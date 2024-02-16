import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const AP = () => {
    const artNames=["Mangalagiri Sarees","Budithi Art","Crochet Lace Of Palakollu","Kondapalli Wood Works","Bidri"];
    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="AP" idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}