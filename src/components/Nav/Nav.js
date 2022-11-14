import React from 'react'
import './nav.css'
import { navLinkList, logoData } from './navLinkList'
function Nav() {
  const {imageLocation, altText} = logoData;
  console.log(imageLocation)
  return (
    <nav className='headerNav'>
          <div><img src={imageLocation} alt={altText} /></div>
          <ul>

            {
              navLinkList.map(
                (navLink, key) =>{
                  return(
                    <li key={key}>{navLink.name}</li>
                  )
                }
              )
            }
            <li>
              <a href='/' className=''>
                connect Wallet
              </a>
            </li>
          </ul>

    </nav>
  )
}

export default Nav
