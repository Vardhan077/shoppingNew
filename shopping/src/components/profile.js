import Navbar from "./navbar"
import Footer from "./footer"
import '../styles/profile.css'
import avatar from '../assets/avatar.png'
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import PacmanLoader from "react-spinners/PacmanLoader";


export default function Profile() {
    axios.defaults.withCredentials = true;
    const [auth, setAuth] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [loading, setLoading] = useState(false)
    const handleLogout = () => {
        axios.get('https://spectre-backend.onrender.com/logout')
            .then(res => {
                if (res.data.Status === "Success") {
                    Cookies.remove("token")
                    setAuth(!auth)
                }
                console.log(res, 'is res from progile')
            })
    }
    useEffect(() => {
        setLoading(true)
        axios.get("https://spectre-backend.onrender.com", { "token": Cookies.get("token") })
            .then(res => {
                console.log(res, 'from profileeeeee')
                if (res.data.Status === "Success") {
                    setName(res.data.name)
                    setEmail(res.data.email)
                    setAuth(true)
                } else {
                    setAuth(false)
                }
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    },[])
    console.log(auth, 'auth in profile', name, email)
    return (
        <div>
            {
                auth ?
                    <div>
                        <Navbar />
                        {
                            loading ? (<PacmanLoader color="#ff0a54" />) : (
                                <div className="flex flex-col justify-center items-center mt-32">
                                    <div className="pro flex flex-col justify-center items-center">
                                        <img src={avatar} width={170} alt="" />
                                        <p>Welcome,</p>
                                        <p className=" font-bold text-6xl">{name}</p>
                                        <p className="text-sm mt-2">{email}</p>
                                        <Link to={"/cart"} className="butt mt-5">View bag</Link>
                                        <button onClick={handleLogout} className="mt-2 text-sm">Log out</button>
                                    </div>
                                </div>
                            )

            
                        }

                        <div className="absolute inset-x-0 -bottom-80"><Footer /></div>
                    </div>
                    :
                    <div>
                        <Navbar />
                        <div className="flex flex-col justify-center items-center mt-32">
                            <p className="text-4xl font-bold">Profile</p>
                            <div className="pro flex flex-col justify-center items-center">
                                <p>Welcome,</p>
                                <p>Please login to continue</p>
                                <Link to={"/login"} className="butt mt-5" >Log in</Link>
                            </div>

                        </div>
                    </div>

            }

        </div>

    )
}
