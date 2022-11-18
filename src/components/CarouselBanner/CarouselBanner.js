import React from "react";
import styles from "./CarouselBanner.module.css";
import { Carousel, Card, Avatar } from "antd";
// import Carousel from 'react-bootstrap/Carousel';
export default function CarouselBanner() {
  return (
    <div className="mb-4" style={{}}>
      <Carousel className="mt-3">
        <div>
          <img
            src="https://theme.hstatic.net/1000282430/1000544102/14/banner-slider-2.jpg?v=2058"
            style={{ width: "2395px", height: "640px" }}
          />
        </div>
        <div>
          <img
            src="https://theme.hstatic.net/1000282430/1000544102/14/banner-slider-1.jpg?v=2058"
            style={{ width: "2395px", height: "640px" }}
          />
        </div>

      </Carousel>
    </div>
  );
}
