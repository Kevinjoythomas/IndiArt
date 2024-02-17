import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const Odisha = () => {
    const artNames=["Applique Art","Golden Grass and Cane Work","Jhoti, Chita, Muruja","Jhoti, Chita, Muruja","Stone and Wood Carving"];
    const desc=["asfsaf","agfasf","agfasf","agfasf","agfasf"]

    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="Odisha" desc={desc[idx]} idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}