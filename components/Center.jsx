"use client";
import "./styles/shop.css";
import Shop from "./Shop";
import Live from "./Live";

const Center = () => {
  return (
    <section className='center'>
        <Shop/>
        <Live/>
    </section>
  )
}

export default Center