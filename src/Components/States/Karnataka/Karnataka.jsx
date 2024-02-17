import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const Karnataka = () => {
    const artNames=["Banana Fiber Crafts","Kasuti Embroidery","Crochet Lace Of Palakollu","Sandalwood Carving","Channapatna Toys"];
    const desc=["Banana Fiber Crafts from Andhra Pradesh are a unique form of handicraft that utilizes the fiber extracted from banana stems, which are generally discarded after the fruit is harvested",
    "Kasuti Embroidery is a traditional hand embroidery style that originated in the 7th century in the regions of Dharwad, Western Karnataka",
    "Crochet Lace of Palakollu is a unique craft from the West Godavari district of Karnataka. This craft involves creating intricate lacework using crochet techniques",
    "Sandalwood Carving is a unique form of handicraft that is practiced in Karnataka",
    "Channapatna Toys are a unique form of wooden toys and dolls that are manufactured in the town of Channapatna in the Ramanagara district of Karnataka state, India"]

    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="Karnataka" desc={desc[idx]} idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}