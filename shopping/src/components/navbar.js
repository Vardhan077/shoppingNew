import '../styles/navbar.css'
import { ShoppingBag, UserRound, Shirt,} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';


export default function navbar(){
    return(
        <div className="main flex flex-row items-center justify-around">
            <div className="logo flex flex-row items-center">
                <h1 className='text-5xl font-semibold hover:font-bold hover:text-pink-600 duration-150'><a href="/">Spectre</a></h1>
            </div>
            <div className="options flex flex-row justify-around">
                <div className="hover:font-bold hover:text-pink-600 duration-150 item">
                    <div className='pic mb-1'><Link to="/products"><Shirt/></Link></div>
                    <div><p className='info'>Products</p></div>
                </div>
                <div className="hover:font-bold hover:text-pink-600 duration-150 item profile">
                    <div className='pic mb-1'><Link to="/profile"><UserRound/></Link></div>
                    <div><p className='info'>Profile</p></div>
                </div>
                <div className="hover:font-bold hover:text-pink-600 duration-150 item">
                    <div className='pic mb-1'><Link to="/cart"><ShoppingBag/></Link></div>
                    <div><p className='info'>Bag</p></div>
                </div>
            </div>
        </div> 
    )
}