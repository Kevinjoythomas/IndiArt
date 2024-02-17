import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const TamilNadu = () => {
    const artNames=["Kanchipuram Silk Sarees","Pattachitra Art","Patterned Tiles","Terra-cotta Figurines","Thanjavur Paintings"];
    const desc=["asfsaf","agfasf","agfasf","agfasf","agfasf"]

    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="TamilNadu" desc={desc[idx]} idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}