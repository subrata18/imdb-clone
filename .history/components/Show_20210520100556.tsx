import React, { useState, useEffect } from "react";
import {
    fetchMovies,
    fetchTopratedMovie,
} from "../services/index";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export function Show() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies());
            setTopRated(await fetchTopratedMovie());
        };

        fetchAPI();
    }, []);

    const movies = nowPlaying.slice(0, 5).map((item, index) => {
        return (
            <div style={{ height: 500, width: "100%" }} key={index}>
                <div className="carousel-center">
                    <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
                </div>
                <div className="carousel-center">
                    <i
                        className="far fa-play-circle"
                        style={{ fontSize: 95, color: "#f4c10f" }}
                    ></i>
                </div>
                <div
                    className="carousel-caption"
                    style={{ textAlign: "center", fontSize: 35 }}
                >
                    {item.title}
                </div>
            </div>
        );
    });


    const topRatedList = topRated.slice(0, 4).map((item, index) => {
        return (
            <div className="col-md-3" key={index}>
                <div className="card">
                    <Link to={`/movie/${item.id}`}>
                        <img className="img-fluid" src={item.poster} alt={item.title}></img>
                    </Link>
                </div>
                <div className="mt-3">
                    <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                    <p>Rated: {item.rating}</p>
                    <ReactStars
                        count={item.rating}
                        size={20}
                        color1={"#f4c10f"}
                    ></ReactStars>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="container">
                <div className="mt-2 row">
                    <div className="col">
                        <RBCarousel
                            autoplay={true}
                            pauseOnVisibility={true}
                            slidesshowSpeed={5000}
                            version={4}
                            indicators={false}
                        >
                            {movies}
                        </RBCarousel>
                    </div>
                </div>


                <div className="mt-3 row">
                    <div className="col">
                        <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                            TRENDING
                        </p>
                        <div className="float-right">
                            <i className="far fa-arrow-alt-circle-right"></i>
                        </div>
                    </div>
                </div>



                <div className="mt-3 row">
                    <div className="col">
                        <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                            TOP RATED MOVIES
                        </p>
                    </div>
                </div>

                <div className="mt-3 row">
                    <div className="col">
                        <div className="float-right">
                            <i className="far fa-arrow-alt-circle-right"></i>
                        </div>
                    </div>
                </div>
                <div className="mt-3 row">{topRatedList}</div>

                <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>

                <div className="mt-3 mb-5 row">
                    <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
                        <h3>ABOUT US</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                            error earum perspiciatis praesentium sint ipsum provident blanditiis
                            pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
                            culpa cupiditate placeat facilis repellat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                            perspiciatis? Numquam, enim illo voluptatum neque facere aut sed ut
                            dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi
                            earum?
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="/" style={{ color: "#f4c10f" }}>
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" style={{ color: "#f4c10f" }}>
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" style={{ color: "#f4c10f" }}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" style={{ color: "#f4c10f" }}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
                        <h3>KEEP IN TOUCH</h3>
                        <ul className="list-unstyled">
                            <li>
                                <p>
                                    <strong>
                                        <i className="fas fa-map-marker-alt"></i> Address:
                                    </strong>{" "}
                                    Dwarbasini, West Bengal, India
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        <i className="fas fa-map-marker-alt"></i> Phone:
                                    </strong>{" "}
                                    +01 00 00 00
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        <i className="fas fa-envelope"></i> Email:
                                    </strong>{" "}
                                    imdb_info@infomail.com
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Show;