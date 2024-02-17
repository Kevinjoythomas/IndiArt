import React from 'react';
import './Home.css';
import vishnu from '../Assets/Home/vishnu.jpg';
import darbar from '../Assets/Home/darbar.jpg';
import gjtour from '../Assets/Home/gjtour.jpeg';
import woodcarving from '../Assets/Home/woodcarving.jpg';
import kashmiriwoodart from '../Assets/Home/kashmiriwoodart.jpg';
import varanasi from '../Assets/Home/varanasi.jpg';

export const Home = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-container" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={varanasi} className="d-block w-100" alt="homePage"/>
                        <div class="carousel-caption d-none d-md-block">
                                <h5>Welcome to</h5>
                                <h1>Uttar Pradesh</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={darbar} className="d-block w-100" alt="threads"/>
                        <div class="carousel-caption d-none d-md-block">
                                <h5>Welcome to</h5>
                                <h1>Maharashtra</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={vishnu} className="d-block w-100" alt="carving"/>
                        <div class="carousel-caption d-none d-md-block">
                                <h5>Welcome to</h5>
                                <h1>Andra Pradesh</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={gjtour} className="d-block w-100" alt="hand"/>
                        <div class="carousel-caption d-none d-md-block">
                                <h5>Welcome to</h5>
                                <h1>Tamil Nadu</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={kashmiriwoodart} className="d-block w-100" alt="saree"/>
                        <div class="carousel-caption d-none d-md-block">
                                <h5>Welcome to</h5>
                                <h1>Kashmir</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={woodcarving} className="d-block w-100" alt="threads"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Welcome to</h5>
                            <h1>Odisha</h1>                            
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='my-2'>
            <h2><br />'cause where would we be without culture?</h2>
            <p>divided by states, united by art.</p>
            </div>
        </>
    )
}