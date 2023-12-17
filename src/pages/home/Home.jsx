import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList1 from '../../components/propertyList/PropertyList1'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList1/>
        <h1 className='homeTitle'>Homes guests Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>

      </div>
    </div>
  )
}

export default Home
