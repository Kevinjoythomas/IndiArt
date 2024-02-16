import React from 'react';
import './States.css';
import { Link, NavLink } from 'react-router-dom'
// import { AP } from './AP/AP';
import  StateCard  from '../StateCard/StateCard'

export const States = () => {
  const stateNames=["AP", "Karnataka", "Kerela", "Maharashtra", "Odisha", "Rajasthan", "Tamil Nadu"]
  return (
    <>
    <p>hi</p>
    {stateNames.map((stateName) => {
        return (<StateCard name={stateName}/>)
    })
  }
      {/* <li className='Andhra Pradesh'>
        <Link className="Andhra Pradesh" to="/AP">Andhra Pradesh</Link>
      </li>

      <li className='Karnataka'>
        <Link className="Karnataka" to="/Karnataka">Karnataka</Link>
      </li>

      <li className='Kerala'>
        <Link className="Kerala" to="/Kerala">Kerala</Link>
      </li>

      <li className='Maharashtra'>
        <Link className="Maharashtra" to="/Maharashtra">Maharashtra</Link>
      </li>

      <li className='Rajasthan'>
        <Link className="Rajasthan" to="/Rajasthan">Rajasthan</Link>
      </li>

      <li className='Tamil Nadu'>
        <Link className="Tamil Nadu" to="/TamilNadu">Tamil Nadu</Link>
      </li>

      <li className='Odisha'>
        <Link className="Odisha" to="/Odisha">Odisha</Link>
      </li> */}


    </>
  )
}