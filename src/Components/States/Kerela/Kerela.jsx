import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const Kerela = () => {
    const artNames=["Bamboo Crafts","Bell Metal Crafts","Coconut Crafts","Nettur Petti","Bidri"];
    const desc=["asfsaf","agfasf","agfasf","agfasf","agfasf"]
    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="Kerela" desc={desc[idx]} idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}