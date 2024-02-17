import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const Karnataka = () => {
    const artNames=["Banana Fiber Crafts","Kasuti Embroidery","Crochet Lace Of Palakollu","Sandalwood Carving","Channapatna toys"];
    const desc=["asfsaf","agfasf","agfasf","agfasf","agfasf"]

    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="Karnataka" desc={desc[idx]} idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}