import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const AP = () => {
    const artNames=["Mangalagiri Sarees","Budithi Art","Crochet Lace Of Palakollu","Kondapalli Wood Works","Bidri"];
    const desc=["Mangalagiri Sarees are a unique variety of sarees that originated in Mangalagiri, a town in the Guntur District of Andhra Pradesh",
                "Budithi Art is a unique and special form of metal handicrafts that originated in Budithi, a village in the Srikakulam district of Andhra Pradesh",
                "Crochet Lace of Palakollu is a unique craft from the West Godavari district of Andhra Pradesh. This craft involves creating intricate lacework using crochet techniques",
                "Kondapalli Wood Works, also known as Kondapalli Toys, are unique wooden toys crafted in the village of Kondapalli, near Vijayawada, in Andhra Pradesh",
                "Bidri, also known as Bidriware, is a unique form of metal handicraft that originated in Bidar, Karnataka, but is now a well-known handicraft of Hyderabad, Andhra Pradesh"]
    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="AP" desc={desc[idx]} idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}