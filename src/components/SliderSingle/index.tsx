import React, { Component } from "react";
import Slider from "react-slick";
import { Img } from "./Image";
import { Column, Container } from "./styles";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Container>
          <Slider {...settings}>
            <Column>
            <Img />
            </Column>
          </Slider>
        </Container>
      </div>
    );
  }
}