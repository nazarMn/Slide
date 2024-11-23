import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
export default function MySlider() {


    const [slides, setSlides] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/feedbacks').then((response) => {
            setSlides(response.data);
            console.log(response.data);
        })
    }, [])



    const settigs = {
        dots: true,
        infite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 3000
    };
    return (
        <Slider {...settigs}>
            {slides.map((slide) => (
                <div key={slide._id}>
                    <h3>{slide.comment}</h3>
                    <p>{slide.rating}</p>
                    <p>{slide.name}</p>
                </div>
            ))}
        </Slider>
    )
}
