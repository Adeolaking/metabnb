import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MetaBNBNFTs from '../components/MetaBNBNFTs'
function Home() {
  return (
    <section className='relative '>
      <Header/>
      <Hero/>
      <MetaBNBNFTs/>
      <Footer/>
    </section>
  )

}

export default Home
