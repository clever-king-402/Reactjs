import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`http://127.0.0.1:8011/api/categories/`);
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    const fetchSliders = async () => {
      const response = await fetch(`http://127.0.0.1:8011/api/sliders/`);
      const data = await response.json();
      setSliders(data);
    };
    fetchSliders();
  }, []);

  const [ads, setAds] = useState([]);
  useEffect(() => {
    const fetchAds = async () => {
      const response = await fetch(`http://127.0.0.1:8011/api/ads/`);
      const data = await response.json();
      setAds(data);
    };
    fetchAds();
  }, []);

  const [brands,setBrands] = useState([]);
  useEffect(() => {
    const fetchBrands = async () => {
      const response = await fetch(`http://127.0.0.1:8011/api/brands/`);
      const data = await response.json();
      setBrands(data);
    };
    fetchBrands();
  }, []);

  return (
    <>
      {/* this is header  */}
      <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <nav class="navbar bg-light">
                <ul class="navbar-nav">
                  {categories.map((item, index) => {
                    return (
                      <li className="nav-item" key={item.id}>
                        <Link class="nav-link" to="#">
                          <i className={`fa ${item.icon}`}></i>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div class="col-md-6">
              <div class="header-slider normal-slider">
                {sliders.map((item) => {
                  return (
                    <div class="header-slider-item">
                      <img src={item.image} alt="Slider Image" />
                      <div class="header-slider-caption">
                        <p>{item.description}</p>
                        <a class="btn" href="">
                          <i class="fa fa-shopping-cart"></i>Shop Now
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="col-md-3">
              <div class="header-img">
                {ads.map((ad) => {
                  if (ad.rank == 1) {
                    return <div class="img-item">
                      <img src={ad.image} />
                      <a class="img-text" href="">
                        <p>{ad.description}</p>
                      </a>
                    </div>;
                  }
                  if (ad.rank == 2) {
                   return <div class="img-item">
                      <img src={ad.image} />
                      <a class="img-text" href="">
                        <p>{ad.description }</p>
                      </a>
                    </div>;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header ends here  */}

      {/* this is brand part  */}
      <div class="brand">
        <div class="container-fluid">
          <div class="brand-slider">
            {brands.map((brand)=>{
                return (
                  <div class="brand-item">
                    <img src={brand.image} alt="" />
                  </div>
                );
            })}
          </div>
        </div>
      </div>
      {/* brand part end here  */}

      {/* <!-- Feature Start--> */}
      <div class="feature">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content">
                <i class="fab fa-cc-mastercard"></i>
                <h2>Secure Payment</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content">
                <i class="fa fa-truck"></i>
                <h2>Worldwide Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content">
                <i class="fa fa-sync-alt"></i>
                <h2>90 Days Return</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content">
                <i class="fa fa-comments"></i>
                <h2>24/7 Support</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature End-->  */}

      {/* <!-- Category Start--> */}
      <div class="category">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="category-item ch-400">
                <img src="img/category-3.jpg" />
                <a class="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="category-item ch-250">
                <img src="img/category-4.jpg" />
                <a class="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div class="category-item ch-150">
                <img src="img/category-5.jpg" />
                <a class="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="category-item ch-150">
                <img src="img/category-6.jpg" />
                <a class="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div class="category-item ch-250">
                <img src="img/category-7.jpg" />
                <a class="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="category-item ch-400">
                <img src="img/category-8.jpg" />
                <a class="category-name" href="">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Category End-->   */}

      {/* <!-- Call to Action Start --> */}
      <div class="call-to-action">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h1>call us for any queries</h1>
            </div>
            <div class="col-md-6">
              <a href="tel:0123456789">+012-345-6789</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Call to Action End -->        */}

      {/* <!-- Featured Product Start --> */}
      <div class="featured-product product">
        <div class="container-fluid">
          <div class="section-header">
            <h1>Featured Product</h1>
          </div>
          <div class="row align-items-center product-slider product-slider-4">
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-1.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-2.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-3.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-4.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-5.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Featured Product End -->        */}

      {/* <!-- Newsletter Start --> */}
      <div class="newsletter">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <h1>Subscribe Our Newsletter</h1>
            </div>
            <div class="col-md-6">
              <div class="form">
                <input type="email" value="Your email here" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Newsletter End -->  */}

      {/* <!-- Recent Product Start --> */}
      <div class="recent-product product">
        <div class="container-fluid">
          <div class="section-header">
            <h1>Recent Product</h1>
          </div>
          <div class="row align-items-center product-slider product-slider-4">
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-6.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-7.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-8.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-9.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="product-item">
                <div class="product-title">
                  <a href="#">Product Name</a>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-10.jpg" alt="Product Image" />
                  </a>
                  <div class="product-action">
                    <a href="#">
                      <i class="fa fa-cart-plus"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <div class="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a class="btn" href="">
                    <i class="fa fa-shopping-cart"></i>Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Recent Product End --> */}

      {/* <!-- Review Start --> */}
      <div class="review">
        <div class="container-fluid">
          <div class="row align-items-center review-slider normal-slider">
            <div class="col-md-6">
              <div class="review-slider-item">
                <div class="review-img">
                  {/* <img src="img/review-1.jpg" alt="Image"> */}
                </div>
                <div class="review-text">
                  <h2>Customer Name</h2>
                  <h3>Profession</h3>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="review-slider-item">
                <div class="review-img">
                  {/* <img src="img/review-2.jpg" alt="Image"> */}
                </div>
                <div class="review-text">
                  <h2>Customer Name</h2>
                  <h3>Profession</h3>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="review-slider-item">
                <div class="review-img">
                  {/* <img src="img/review-3.jpg" alt="Image"> */}
                </div>
                <div class="review-text">
                  <h2>Customer Name</h2>
                  <h3>Profession</h3>
                  <div class="ratting">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Review End -->    */}
    </>
  );
};

export default Homepage;
