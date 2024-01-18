/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'

const Home = () => {
  return (

    <div>
         <h1 className="text-2xl font-bold p-4">Wildlife Exploration in Andasibe - Maxuri</h1>
      {/* Navbar flottante */}
      <nav className="bg-blue-400 text-white p-16 fixed w-full top-0 z-10">
        <div className="container mx-auto">
          {/* Contenu de la navbar */}
          <div className="flex justify-between items-center">
            <button className='bg-purple text-white shadow-md '>ITINERAIRE</button>
            <button className='bg-white '>ITINERAIRE</button>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="container max-w-md mx-auto w-full mt-16">

      <h6 className="text-xl text-gray-750 font-bold p-4">16 Septembre 2023</h6>

        {/* Carte avec image */}
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden w-full shadow-md">
          {/* Titre de la carte */}
        
    
          {/* Contenu de la carte */}
          <div className="p-4">
            <h6 className="text-pink-700 text-pink">
              DEPARTURE - Central European Summer Time
            </h6>
          </div>
          <br/>

        </div>

        {/* Ajoutez ici d'autres éléments de contenu, sections, etc. */}
        
      </div>
      <br/>

      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden w-full shadow-md">
          {/* Titre de la carte */}
        
          {/* Contenu de la carte */}
          <div className="p-4">
            <h6 className="text-pink-950 text-pink">
              Visit to Ambohimanga Palace 
            </h6>
          </div>

        </div>
        <br/>

        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden w-full shadow-md">
          {/* Titre de la carte */}
        
          {/* Contenu de la carte */}
          <div className="p-4">
            <h6 className="text-pink-400 text-pink">
               Relais des Plateaux Hotel & Spa 
            </h6>
          </div>

        </div>
        <br/>


    </div>

    
    
  )
}

export default Home
