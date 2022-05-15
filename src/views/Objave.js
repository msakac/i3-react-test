import React, { useEffect } from 'react'
import ObjaveJson from '../data/objave.json';
import Aos from 'aos';
import "aos/dist/aos.css";

import '../scss/components/layout.scss'
import '../scss/components/objava.scss'
function Objave() {
  useEffect(() =>{
    Aos.init({duration: 800});
  })
  return (
    <div className='parent-wrap'>
        <h1 className='naslov'>Objave</h1>
        
          {
            ObjaveJson && ObjaveJson.map(objava =>{
              return(
              <div className='objava-grid' key={objava.id}>
                <div className='grid-element grid-col-span-3' >
                  <h2 className='objava-naslov'>{objava.naslov}</h2>
                </div>
                <div className='grid-element grid-col-span-3'>
                  <p className='objava-tekst'>{objava.sadrzaj}</p>
                </div>
                <div className='grid-element grid-row-span-2'>
                  <img className='objava-naslovna-slika' alt="slika" src={objava.naslovnaSlika}></img>
                </div>
                {
                  objava.footer && objava.footer.map(footer =>{
                    return (
                      <div data-aos="fade-left" className='grid-element' key={footer.id}>
                        <img className='objava-footer-slika' alt="slika" src={footer.urlSlika}></img>
                        <p className='objava-footer-tekst'>{footer.sadrzaj}</p>
                      </div>
                    )
                  })
                }
               </div> 
              )
            })
          }
        
    </div>
  )
}

export default Objave