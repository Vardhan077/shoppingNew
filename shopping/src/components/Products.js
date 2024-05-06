import React,{ useEffect,useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/products.css';
import Card from './card';
import axios from 'axios';

export default function Products({cond=true,query=""}){
    axios.defaults.withCredentials = true;
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [cartitems,setCart] = useState([]);
    
    const handleClick = (item) =>{
        setCart([...cartitems,item]);
        console.log(cartitems,'is cartitems');
    };

    useEffect(()=>{
        axios.get('https://spectre-backend.onrender.com')
        .then(res=>{
            console.log(res.data)
            setName(res.data.name)
            setEmail(res.data.email)
        })
        .catch(err=>{
            console.log(err)
        })
    })

    useEffect(()=>{
        const item = cartitems.slice(-1);
        axios.post('https://spectre-backend.onrender.com/add',{item,email})
        .then(res=>{
            console.log(res,'is product');
        })
    },[cartitems])


    useEffect(()=>{
    setLoading(true)
    
    fetch("https://api.escuelajs.co/api/v1/products",{method:'GET'})
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        setData(data)
    })
    .catch(e=>console.log(e))
    .finally(()=>setLoading(false));
    },[])


    return(
        <div>
            {cond?<Navbar/>:<></>}
             
             <div className="new">
                
                {data.filter((val)=>{
                    if(query === ""){
                        return val
                    }else if(val.title.toLowerCase().includes(query.toLowerCase())){
                        return val;
                    }
                })
                .map((item)=>(
                    <Card key={item.id} item={item} handleClick={handleClick}/>
                ))}
            </div>
            {<Footer/> && loading}
            
        </div>
    );
}