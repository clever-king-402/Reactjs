import React from "react";
import Cat from "./Cat";
import Products from "./Products";
import { Routes,Route,Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4">
            <ul className="list-group">
              {Cat.map((e) => (
                <li className="list-group-item">
                  {e.id} may is hex {e.catName}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9">
            <div
              id="carouselExampleControlsNoTouching"
              class="carousel slide"
              data-bs-touch="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://dummyimage.com/700x450/00f/fff"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://dummyimage.com/700x450/f00/ff0"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://dummyimage.com/700x450/0f0/fff"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <h2>Latest Products</h2>
        <div className="row py-5">
            {Products.map((item)=>(
                 <div className="col-lg-4">
                    <div className="card ss">
                        <img src={item.image} alt="" />
                        <p><Link to={`/details/${item.id}`}>{item.title}</Link></p>

                    </div>
                 </div>
            ))}
        </div>
      </div>
    </>
  );
}
