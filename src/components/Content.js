import React, { Component } from "react";
import "./content.css";
import carouselImage1 from "../images/MainCarousel/image1.webp";
import carouselImage2 from "../images/MainCarousel/image2.webp";
import carouselImage3 from "../images/MainCarousel/image3.webp";
import carouselImage4 from "../images/MainCarousel/image9.webp";
import carouselImage5 from "../images/MainCarousel/image10.webp";
import carouselImage6 from "../images/MainCarousel/bo1.webp";
import carouselImage7 from "../images/MainCarousel/bo2.webp";
import carouselImage8 from "../images/MainCarousel/bo3.webp";
import carouselImage9 from "../images/MainCarousel/bo4.webp";
import carouselImage10 from "../images/MainCarousel/mp1.webp";
import carouselImage11 from "../images/MainCarousel/mp2.webp";
import carouselImage12 from "../images/MainCarousel/mp3.webp";
import carouselImage13 from "../images/MainCarousel/mp4.webp";
import carouselImage14 from "../images/MainCarousel/to1.webp";
import carouselImage15 from "../images/MainCarousel/to2.webp";
import carouselImage16 from "../images/MainCarousel/to3.webp";
import carouselImage17 from "../images/MainCarousel/to4.webp";
import carouselImage18 from "../images/MainCarousel/fv1.webp";
import carouselImage19 from "../images/MainCarousel/fv2.webp";
import carouselImage20 from "../images/MainCarousel/fv3.webp";
import carouselImage21 from "../images/MainCarousel/fv4.webp";
import carouselImage22 from "../images/MainCarousel/fv5.webp";
import carouselImage23 from "../images/MainCarousel/ss1.webp";
import carouselImage24 from "../images/MainCarousel/ss2.webp";
import carouselImage25 from "../images/MainCarousel/ss3.webp";
import carouselImage26 from "../images/MainCarousel/ss4.webp";
import carouselImage27 from "../images/MainCarousel/ch1.webp";
import carouselImage28 from "../images/MainCarousel/ch2.webp";
import carouselImage29 from "../images/MainCarousel/ch3.webp";
import carouselImage30 from "../images/MainCarousel/ch4.webp";
import carouselImage31 from "../images/MainCarousel/bs1.webp";
import carouselImage32 from "../images/MainCarousel/bs2.webp";
import carouselImage33 from "../images/MainCarousel/bs3.webp";
import carouselImage34 from "../images/MainCarousel/bs4.webp";
import carouselImage35 from "../images/MainCarousel/bs5.webp";
import carouselImage36 from "../images/MainCarousel/bs6.webp";
import { NavLink } from "react-router-dom";

class Content extends Component {

  render() {
    return (
      <>
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-margin"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carouselImage1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carouselImage2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carouselImage3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="d-flex flex-column align-items-center mt-5">
          <h4 className="mb-2">Explore Wide Range of Products</h4>
          <NavLink to="/mainContent">
            <button className="button-1">
                View Products
            </button>
          </NavLink>
        </div>
        <hr />

        {/* carousel-2 */}
        <div>
          <div
            id="carouselExampleControls-1"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carouselImage4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carouselImage5} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls-1"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls-1"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Bank Offers */}
        <div className="mt-3">
          <div className="text-center">
            <h1 className="heading-size">Bank Offers</h1>
          </div>
          <hr />

          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage6} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage7} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage8} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage9} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Most Popular Offers */}
        <div className="mt-3">
          <div className="text-center">
            <h1 className="heading-size">Most Popular</h1>
          </div>
          <hr />

          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage10} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage11} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage12} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage13} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Top Offers */}
        <div className="mt-3">
          <div className="text-center">
            <h1 className="heading-size">Top Offers</h1>
          </div>
          <hr />

          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage14} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage15} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage16} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage17} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* fruits and vegitables */}
        <div className="mt-3">
          <div className="text-center">
            <h1 className="heading-size">Fruits & Vegitables</h1>
          </div>
          <hr />

          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-12  col-md-6">
                <img className="w-100" src={carouselImage18} alt="" />
              </div>
              <div className="col-6 col-md-6">
                <img className="w-100" src={carouselImage19} alt="" />
              </div>
              <div className="col-6 col-md-4">
                <img className="w-100" src={carouselImage20} alt="" />
              </div>
              <div className="col-6 col-md-4">
                <img className="w-100" src={carouselImage21} alt="" />
              </div>
              <div className="col-6 col-md-4">
                <img className="w-100" src={carouselImage22} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Snacks and Stores */}
        <div className="mt-3">
          <div className="text-center">
            <h1 className="heading-size">Snacks Store</h1>
          </div>
          <hr />

          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage23} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage24} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage25} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage26} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Cleaning & Household */}
        <div className="mt-3">
          <div className="text-center">
            <h1 className="heading-size">Snacks Store</h1>
          </div>
          <hr />

          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage27} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage28} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage29} alt="" />
              </div>
              <div className="col-6 col-md-3">
                <img className="w-100" src={carouselImage30} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Store */}
        <div className="mt-3">
          <div className="text-center">
            <h1 className="heading-size">Brand Store</h1>
          </div>
          <hr />

          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-4 col-md-2">
                <img className="w-100" src={carouselImage31} alt="" />
              </div>
              <div className="col-4 col-md-2">
                <img className="w-100" src={carouselImage32} alt="" />
              </div>
              <div className="col-4 col-md-2">
                <img className="w-100" src={carouselImage33} alt="" />
              </div>
              <div className="col-4 col-md-2">
                <img className="w-100" src={carouselImage34} alt="" />
              </div>
              <div className="col-4 col-md-2">
                <img className="w-100" src={carouselImage35} alt="" />
              </div>
              <div className="col-4 col-md-2">
                <img className="w-100" src={carouselImage36} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default Content;
