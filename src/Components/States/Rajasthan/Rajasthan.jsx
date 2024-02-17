import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const Rajasthan = () => {
    const artNames=["Blue Pottery","Kagzi Pottery","Kundan Work","Marble Work","Mojari"];
    const desc=["asfsaf","agfasf","agfasf","agfasf","agfasf"]

    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="Rajasthan" desc={desc[idx]} idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}