import React from 'react'
import img from '../States/AP/AP.jpg'
import { Link } from 'react-router-dom'

export default function StateCard(props) {
    const stateName=props.stateName
    const imgPath= `States/${stateName}/${stateName}.jpg`
  return (
    <>
    <div className="card mx-2 my-2" style={{width: "18rem"}}>
      <div className='d-flex flex-col justify-content-center align-items-center my-3 ' style={{width:"16rem"}}>
      <img src={imgPath} alt="image" style={{maxWidth:"100%"}}></img>
      </div>
      <div className="card-body">
      <Link to={`/${stateName}`}>
      <button className='btn btn-dark'>{stateName}</button>
      </Link>
    </div>
  </div>
    </>
  )
}
