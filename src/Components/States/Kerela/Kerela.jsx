import React from 'react';
// import './AP.css'
import '../States';
import ArtworkCard from '../../ArtworkCard/ArtworkCard';

export const Kerela = () => {
    const artNames=["Bamboo Crafts","Bell Metal Crafts","Coconut Crafts","Nettur Petti","Bidri"];
    const desc=["Bamboo Crafts in Kerela are a unique form of handicraft that utilizes the fiber extracted from bamboo stems, which are generally discarded after the fruit is harvested",
    "Bell Metal Crafts, also known as Budithi Bell and Brass Craft, are unique handicrafts made in Budithi, a village in the Srikakulam district of Kerela",
    "The state is one of the leading coconut producing states. Artists create innovative and beautiful handicrafts from the coconut shells1.",
    "Nettur Petti, also known as the Nettur Box or Aada Petti, is a traditional jewelry box from Kerala",
    "Bidri or Bidriware is a form of exquisite metal handicraft that originated in Bidar, Karnataka, and is now popular in various parts of India, including Kerala. Here are some key features"]
    return (
        
        <div className='d-flex flex-wrap justify-content-center mx-5'>
         {artNames.map((artName,idx)=>{
            return (<ArtworkCard  currState="Kerela" desc={desc[idx]} idx={idx} artName={artName}/>)
        })}
        </div>
        
    )
}