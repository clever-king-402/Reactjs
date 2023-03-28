const sale = "sale"

export const fetchCategories = async (setCategories) => {
  const response = await fetch(`http://127.0.0.1:8011/api/categories/`);
  const data = await response.json();
  setCategories(data);
};

export const fetchSliders = async (setSliders) => {
   const response = await fetch(`http://127.0.0.1:8011/api/sliders/`);
   const data = await response.json();
   setSliders(data);
 };


 export const fetchAds = async (setAds) => {
   const response = await fetch(`http://127.0.0.1:8011/api/ads/`);
   const data = await response.json();
   setAds(data);
 };

 export const fetchProductsSale = async (setProductsSale) => {
   const response = await fetch(`http://127.0.0.1:8011/api/product-filter/sale`);
   const data = await response.json();
   setProductsSale(data);
 };

 export const fetchProductsNew = async (setProductsNew) => {
   const response = await fetch(`http://127.0.0.1:8011/api/product-filter/new`);
   const data = await response.json();
   setProductsNew(data);
 };


export const fetchBrands = async (setBrands) => {
   const response = await fetch(`http://127.0.0.1:8011/api/brands/`);
   const data = await response.json();
   setBrands(data);
 };

 export const fetchProductDetail = async (setProduct,slug) => {
   const response = await fetch(`http://127.0.0.1:8011/api/products/${slug}`);
   const data = await response.json();
   setProduct(data);
 };