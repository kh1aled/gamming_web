"use client";
import Landing from "@components/Landing";
import Banner from "@components/Banner";
import Center from "@components/Center";
import Games from "@components/Games";
import Products from "@components/Products";
import Articles from "@components/Articles";
import NewsLetter from "@components/NewsLetter";
import Footer from "@components/Footer";

const page = () => {
  return (
    <div className='w-full'>
        <Landing/>
        <Banner/> 
        <Center/>
        <Games/>
        <Products/>
        <Articles/>
        <NewsLetter/>
        <Footer/> 
    </div>
  )
}

export default page