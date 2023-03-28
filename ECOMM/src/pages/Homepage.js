import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {fetchAds,fetchCategories,fetchSliders,fetchProductsSale,fetchBrands,fetchProductsNew} from '../components/Fetcher'
const Homepage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetchSliders(setSliders);
  }, []);

  const [ads, setAds] = useState([]);
  useEffect(() => {
    fetchAds(setAds);
  }, []);

  const [brands,setBrands] = useState([]);
  useEffect(() => {
    
    fetchBrands(setBrands);
  }, []);

  const [productsSale,setProductsSale] = useState([])
  useEffect(()=>{
    fetchProductsSale(setProductsSale);
  },[])

  const [productsNew,setProductsNew] = useState([])
  useEffect(()=>{
    fetchProductsNew(setProductsNew);
  },[])
  return (
    <>
      {/* this is header  */}
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <nav className="navbar bg-light">
                <ul className="navbar-nav">
                  {categories.map((item, index) => {
                    return (
                      <li className="nav-item" key={item.id}>
                        <Link className="nav-link" to="#">
                          <i className={`fa ${item.icon}`}></i>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="col-md-6">
              <div className="header-slider normal-slider">
                {sliders.map((item) => {
                  return (
                    <div className="header-slider-item">
                      <img src={item.image} alt="Slider Image" />
                      <div className="header-slider-caption">
                        <p>{item.description}</p>
                        <Link className="btn" to="">
                          <i className="fa fa-shopping-cart"></i>Shop Now
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-3">
              <div className="header-img">
                {ads.map((ad) => {
                  if (ad.rank == 1) {
                    return (
                      <div className="img-item">
                        <img src={ad.image} />
                        <Link className="img-text" to="">
                          <p>{ad.description}</p>
                        </Link>
                      </div>
                    );
                  }
                  if (ad.rank == 2) {
                    return (
                      <div className="img-item">
                        <img src={ad.image} />
                        <Link className="img-text" to="">
                          <p>{ad.description}</p>
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header ends here  */}

      {/* this is brand part  */}
      <div className="brand">
        <div className="container-fluid">
          <div className="brand-slider">
            {brands.map((brand) => {
              return (
                <div className="brand-item">
                  <img src={brand.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* brand part end here  */}

      {/* <!-- Feature Start--> */}
      <div className="feature">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fab fa-cc-mastercard"></i>
                <h2>Secure Payment</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-truck"></i>
                <h2>Worldwide Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-sync-alt"></i>
                <h2>90 Days Return</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-comments"></i>
                <h2>24/7 Support</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature End-->  */}

      {/* <!-- Category Start--> */}
      <div className="category">
        <div className="container-fluid">
          <div className="row">
            {ads.map((ad) => {
              if (ad.rank == 3) {
                return (
                  <div className="col-md-3">
                    <div className="category-item ch-400">
                      <img src={ad.image} />
                      <Link className="category-name" to="">
                        <p>{ad.description}</p>
                      </Link>
                    </div>
                  </div>
                );
              }
              if (ad.rank == 4) {
                return (
                  <div className="col-md-3">
                    <div className="category-item ch-250">
                      <img src={ad.image} />
                      <Link className="category-name" to="">
                        <p>{ad.description}</p>
                      </Link>
                    </div>
                    <div className="category-item ch-150">
                      <img src={ad.image} />
                      <Link className="category-name" to="">
                        <p>{ad.description}</p>
                      </Link>
                    </div>
                  </div>
                );
              }
              if (ad.rank == 5) {
                return (
                  <div className="col-md-3">
                    <div className="category-item ch-150">
                      <img src={ad.image} />
                      <Link className="category-name" to="">
                        <p>{ad.description}</p>
                      </Link>
                    </div>
                    <div className="category-item ch-250">
                      <img src={ad.image} />
                      <Link className="category-name" to="">
                        <p>{ad.description}</p>
                      </Link>
                    </div>
                  </div>
                );
              }
              if (ad.rank == 6) {
                return (
                  <div className="col-md-3">
                    <div className="category-item ch-400">
                      <img src={ad.image} />
                      <Link className="category-name" to="">
                        <p>{ad.description}</p>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      {/* <!-- Category End-->   */}

      {/* <!-- Call to Action Start --> */}
      <div className="call-to-action">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>call us for any queries</h1>
            </div>
            <div className="col-md-6">
              <Link to="tel:0123456789">+012-345-6789</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Call to Action End -->        */}

      {/* <!-- Featured Product Start --> */}
      <div className="featured-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>Featured Product</h1>
          </div>
          <div className="row align-items-center product-slider product-slider-4">
            {productsSale.map((product) => {
              return (
                <div className="col-lg-3">
                  <div className="product-item">
                    <div className="product-title">
                      <Link to={`/product-details/${product.slug}`}>{product.name}</Link>
                      <div className="ratting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                    <div className="product-image">
                      <Link to="product-detail.html">
                        <img src={product.image} alt="Product Image" />
                      </Link>
                      <div className="product-action">
                        <Link to="#">
                          <i className="fa fa-cart-plus"></i>
                        </Link>
                        <Link to="#">
                          <i className="fa fa-heart"></i>
                        </Link>
                        <Link to="#">
                          <i className="fa fa-search"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="product-price">
                      <h3>
                        <span>$</span>
                        {product.price}
                      </h3>
                      <Link className="btn" to="">
                        <i className="fa fa-shopping-cart"></i>Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
      {/* <!-- Featured Product End -->        */}

      {/* <!-- Newsletter Start --> */}
      <div className="newsletter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1>Subscribe Our Newsletter</h1>
            </div>
            <div className="col-md-6">
              <div className="form">
                <input type="email" value="Your email here" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Newsletter End -->  */}

      {/* <!-- Recent Product Start --> */}
      <div className="recent-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>Recent Product</h1>
          </div>
          <div className="row align-items-center product-slider product-slider-4">
            {productsNew.map((product)=>{
                return (
                  <div className="col-lg-3">
                    <div className="product-item">
                      <div className="product-title">
                        <Link to={`/product-details/${product.slug}`}>
                          {product.name}
                        </Link>
                        <div className="ratting">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                      <div className="product-image">
                        <Link to="product-detail.html">
                          <img src={product.image} alt="Product Image" />
                        </Link>
                        <div className="product-action">
                          <Link to="#">
                            <i className="fa fa-cart-plus"></i>
                          </Link>
                          <Link to="#">
                            <i className="fa fa-heart"></i>
                          </Link>
                          <Link to="#">
                            <i className="fa fa-search"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-price">
                        <h3>
                          <span>$</span>
                          {product.price}
                        </h3>
                        <Link className="btn" to="">
                          <i className="fa fa-shopping-cart"></i>Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
            })}
           
            {/* <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <Link to="#">Product Name</Link >
                  <div className="ratting">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="product-image">
                  <Link to="product-detail.html">
                    <img src="img/product-7.jpg" alt="Product Image" />
                  </Link >
                  <div className="product-action">
                    <Link to="#">
                      <i className="fa fa-cart-plus"></i>
                    </Link >
                    <Link to="#">
                      <i className="fa fa-heart"></i>
                    </Link >
                    <Link to="#">
                      <i className="fa fa-search"></i>
                    </Link >
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <Link className="btn" to="">
                    <i className="fa fa-shopping-cart"></i>Buy Now
                  </Link >
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <Link to="#">Product Name</Link >
                  <div className="ratting">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="product-image">
                  <Link to="product-detail.html">
                    <img src="img/product-8.jpg" alt="Product Image" />
                  </Link >
                  <div className="product-action">
                    <Link to="#">
                      <i className="fa fa-cart-plus"></i>
                    </Link >
                    <Link to="#">
                      <i className="fa fa-heart"></i>
                    </Link >
                    <Link to="#">
                      <i className="fa fa-search"></i>
                    </Link >
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <Link className="btn" to="">
                    <i className="fa fa-shopping-cart"></i>Buy Now
                  </Link >
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <Link to="#">Product Name</Link >
                  <div className="ratting">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="product-image">
                  <Link to="product-detail.html">
                    <img src="img/product-9.jpg" alt="Product Image" />
                  </Link >
                  <div className="product-action">
                    <Link to="#">
                      <i className="fa fa-cart-plus"></i>
                    </Link >
                    <Link to="#">
                      <i className="fa fa-heart"></i>
                    </Link >
                    <Link to="#">
                      <i className="fa fa-search"></i>
                    </Link >
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <Link className="btn" to="">
                    <i className="fa fa-shopping-cart"></i>Buy Now
                  </Link >
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <Link to="#">Product Name</Link >
                  <div className="ratting">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="product-image">
                  <Link to="product-detail.html">
                    <img src="img/product-10.jpg" alt="Product Image" />
                  </Link >
                  <div className="product-action">
                    <Link to="#">
                      <i className="fa fa-cart-plus"></i>
                    </Link >
                    <Link to="#">
                      <i className="fa fa-heart"></i>
                    </Link >
                    <Link to="#">
                      <i className="fa fa-search"></i>
                    </Link >
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <Link className="btn" to="">
                    <i className="fa fa-shopping-cart"></i>Buy Now
                  </Link >
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- Recent Product End --> */}

      {/* <!-- Review Start --> */}
      <div className="review">
        <div className="container-fluid">
          <div className="row align-items-center review-slider normal-slider">
            <div className="col-md-6">
              <div className="review-slider-item">
                <div className="review-img">
                  {/* <img src="img/review-1.jpg" alt="Image"> */}
                </div>
                <div className="review-text">
                  <h2>Customer Name</h2>
                  <h3>Profession</h3>
                  <div className="ratting">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="review-slider-item">
                <div className="review-img">
                  {/* <img src="img/review-2.jpg" alt="Image"> */}
                </div>
                <div className="review-text">
                  <h2>Customer Name</h2>
                  <h3>Profession</h3>
                  <div className="ratting">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="review-slider-item">
                <div className="review-img">
                  {/* <img src="img/review-3.jpg" alt="Image"> */}
                </div>
                <div className="review-text">
                  <h2>Customer Name</h2>
                  <h3>Profession</h3>
                  <div className="ratting">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
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
