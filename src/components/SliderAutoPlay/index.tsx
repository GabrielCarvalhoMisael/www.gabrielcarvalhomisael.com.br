import React, { Component } from "react";
import Slider from "react-slick";
import { Column, Container } from "./styles";
import JavaScript from "../../certificados/JavaScript.png"
import PHP from "../../certificados/PHP.png"
import Python from "../../certificados/Python.png"
import Android from "../../certificados/Android.png"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,   
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            autoplay: false,
            speed: 1000,
            autoplaySpeed: 1000,
          }
        },
      ]
    };

    const arrayCertificados = [
      {
        src: Android,
        title: "Android",
        school: "Udemy",
        aulas: "On-line",
        cargaHoraria: "54,5/hrs",
      },
      {
        src: JavaScript,
        title: "JavaScript",
        school: "Udemy",
        aulas: "On-line",
        cargaHoraria: "97/hrs",
      },
      {
        src: PHP,
        title: "Php",
        school: "Udemy",
        aulas: "On-line",
        cargaHoraria: "33,5/hrs",
      },
      {
        src: Python,
        title: 'Python',
        school: "Udemy",
        aulas: "On-line",
        cargaHoraria: "63,5/hrs",
      }
    ]
    return (
      <div style={{textAlign: 'center', fontFamily: 'Edu VIC WA NT Beginner'}}>
      <h1>Diplomas Cursos On-Line</h1>
      <Container>
        <Slider {...settings}>
          {arrayCertificados.map((item, index) => {
            return (
              <Column key={index} onClick={() => console.log({ index })}>
                <img className="imgCertificado" src={item.src} alt="" width='250px' height='180px' />
                <hr className="hr" />
                <h1 style={{fontFamily: 'Roboto'}}>{item.title}</h1>
                <text style={{fontFamily: 'Roboto'}}>Academy: {item.school}</text>
                <br />
                <text style={{fontFamily: 'Roboto'}}>Aulas: {item.aulas}</text>
                <br />
                <text style={{fontFamily: 'Roboto'}}>Carga Horaria: {item.cargaHoraria}</text>
              </Column>
            );
          })}
        </Slider>
      </Container>
      </div>
    );
  }
}