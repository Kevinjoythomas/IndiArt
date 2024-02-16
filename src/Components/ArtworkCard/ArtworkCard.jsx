import React from 'react'

export default function ArtworkCard(props) {
    const path=`States/${props.currState}/${props.idx}.jpg`
    const artworkName = props.artName
    const currState=props.currState
    console.log(artworkName,path)
  return (
    <>
          <div className="card mx-2 my-2" style={{width: "18rem"}}>
      <div className='row d-flex flex-col justify-content-center align-items-center my-3 ' style={{width:"16rem"}}>
      <img src={path} alt="image" style={{maxWidth:"100%"}}></img>
      </div>
      <div className="card-body">
        <h4>{artworkName}</h4>
        <h5>{currState}</h5>
        <h5>{`Rs ${Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000}`}</h5>
      <button className='btn btn-warning'>Buy Now</button>
    </div>
  </div>
    </>
  )
}
