import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import CartCards from "./cartcard";
import '../styles/products.css';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'




export default function Cart() {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const [auth, setAuth] = useState(false);
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState();
  const [id,setId] = useState();
  const [conf,setConf] = useState(false);

  useEffect(() => {
    axios.post("https://spectre-backend.onrender.com",{"token":Cookies.get('token')}).then((res) => {
      console.log(res.data)
      if (res.data.Status === "Success") {
        setEmail(res.data.email);
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, []); // Empty dependency array to run only once when the component mounts

  useEffect(() => {
    console.log(email,"check")
    if (auth && email) {
      axios
        .get(`https://spectre-backend.onrender.com/retrieve?email=${email}`)
        .then((res) => {
          const data = JSON.parse(res.data);
          setCart(data);
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [auth, email]);

  useEffect(() => {
    console.log("Auth Status:", auth);
    console.log("Cart Data:", cart);
  }, [auth, cart]); // Log auth status and cart data

  useEffect(()=>{
    console.log(id)
    axios.post("https://spectre-backend.onrender.com/removeitem",[id])
    .then(res=>{
        window.location.reload()
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

  },[id])

  const handleCheckout = ()=>{
    setConf(true)
    navigate("/checkout")
    
  }
  console.log(auth,"dhl");
  if (!auth) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-32">
        <p className="text-4xl font-bold">Bag</p>
          <div className="pro flex flex-col justify-center items-center">
            <p>Welcome,</p>
            <p>Please login to continue</p>
            <Link to={"/login"} className="butt mt-5">
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const itemsArray = JSON.parse(item.item);
      return total + itemsArray.reduce((itemTotal, singleItem) => itemTotal + singleItem.price, 0);
    }, 0);
  };
  const handleRemove = (id)=>{
    setId(id)
  }
 
  return (
    <div>
      <Navbar />
      <div className="new">
        {cart.map((item, index) => (
          <div key={index}>
            <CartCards item={item} handleRemove={handleRemove}/>
          </div>
        ))}
      </div>
      <div className="total-price text-center font-extrabold text-2xl text-green-700 mt-32">
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button className="butt mb-32" onClick={handleCheckout}>CheckOut!</button>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
