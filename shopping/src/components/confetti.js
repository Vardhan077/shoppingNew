import React,{useEffect,useState} from 'react';
import ReactConfetti from 'react-confetti';

const Celeb = () =>{
    const [dim,setDim] = useState({width:window.innerWidth,height:window.innerHeight})
    const detectSize = ()=>{
        setDim({width:window.innerWidth,height:window.innerHeight})
    }
    const [numberOfPieces, setNumberOfPieces] = useState(500);

    useEffect(() => {
      setTimeout(() => {
        setNumberOfPieces(0);
      }, 5000);
    }, []);
    useEffect(()=>{
        window.addEventListener('resize', detectSize)
        return ()=>{
            window.removeEventListener('resize', detectSize)
        }
    },[dim]); 
    return(
        <>
            <ReactConfetti width={dim.width-50} height={dim.height} numberOfPieces={numberOfPieces} tweenDuration ={500}/>
        </>
    )
}

export default Celeb;