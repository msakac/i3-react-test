import React from 'react'
import Projekti from '../data/projekti.json';
import '../scss/components/projekt.scss'
import '../scss/components/layout.scss'

function Projekt() {
  return (
    <div className='parent-wrap'>
        <h1 className='naslov'>Doprinosi projekta</h1>
        <div className='projekti-flex-box'>
            {
                Projekti && Projekti.map(projekt =>{
                    return(
                        <div className='projekt-container' key ={projekt.id}>
                            <div className='projekt-postotak-container'>
                                <img className='projekt-postotak-container-img' src={projekt.img} alt="Slika"></img>
                                <h2>{projekt.postotak}</h2>
                            </div>
                            <h2>{projekt.naziv}</h2>

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projekt