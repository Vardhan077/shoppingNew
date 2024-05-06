import Navbar from "./navbar"
import React from "react"
import { Link } from "react-router-dom"
import Celeb from "./confetti"

export default function CheckOut(){
    return(
        <div>
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-32">
          <div className="pro flex flex-col justify-center items-center">
            <p className="font-bold text-pink-600">Order Placed!!</p>
            <p>Thank you for choosing <span className="font-bold">Spectre</span></p>
            <Link to={"/"} className="butt mt-5">
              Home
            </Link>
          </div>
          <Celeb/>
        </div>
      </div>
    )
}
