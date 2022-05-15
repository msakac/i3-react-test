import React from 'react'
import Projekti from '../data/projekti.json';
import '../scss/components/projekt.scss'

function Projekt() {
  return (
    <div className='parent-wrap'>
        <div className='projekti-flex-box'>
            {
                Projekti && Projekti.map(projekt =>{
                    return(
                        <div className='projekt-container' key ={projekt.id}>
                            <div className='projekt-postotak-container'>
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