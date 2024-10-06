import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {  useNavigate } from "react-router-dom";
import "./Details.css"
import Footer from "./Footer";


const GetMovies=()=>{ 
    let navigate = useNavigate();   
    
    let [api,setApi]=useState([]);
    let [movies,setMovies]=useState([]);
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=3ccc226ae18a08e9ac2dfa31c2e0de39&language=en-US")
        .then(res=>res.json()).then(x=>setApi(x.results))

    },[])

    function search(){
      
            fetch(`https://api.themoviedb.org/3/search/movie?query=${movies}&api_key=3ccc226ae18a08e9ac2dfa31c2e0de39`)
            .then(res=>res.json())
            .then(x=>setApi(x.results))
    }
    
    
    return(
     <div>
   <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand href="#" className="navbar-brand">MoviesHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                            <Nav.Link href="#link" className="nav-link">About</Nav.Link>
                            <NavDropdown title="More" id="navbarScrollingDropdown" className="nav-dropdown">
                                <NavDropdown.Item href="#action3" className="dropdown-item">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" className="dropdown-item">
                                    Dramas
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#something" className="dropdown-item">
                                  Melody
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="form-control"
                                onChange={(e) => setMovies(e.target.value)} 
                            />
                            <Button variant="outline-success" className="btn-outline-success" onClick={search}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

           

    {/*  carousel*/}
    <div className="carousel-wrapper">
                <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000} showStatus={false}>
                    {api.map((x) => (
                        <div key={x.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`}
                                alt={x.title || "Movie Image"}
                                onError={(e) => { e.target.src = 'path/to/placeholder/image.jpg'; }}
                            />
                            <div className="legend">
                                <h4>{x.title}</h4>
                                <h6>{x.overview}</h6>
                                <h2>{x.vote_average}</h2>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            <div id="title">
                  Trending Movies
            </div>
    {/* cards */}
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                {api.map((card) => (
                    <Card key={card.id} style={{ width: '18rem', margin: '10px' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${card.poster_path}`} />
                        <Card.Body>
                            <Card.Title style={{color:"orange"}}>{card.title}</Card.Title>
                            <Card.Text>
                                {card.overview}
                            </Card.Text>
                            <Button  variant="primary" id="carouselbut"
    onClick={() => navigate("/Details",{state:{card}})}>
    View details
</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <Footer/>
     </div>
    )
}
export default GetMovies;