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

 export const sendReview = (formData,slug) => {
   fetch(`http://127.0.0.1:8011/api/submit-review/${slug}`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   });
 };

 export const fetchReview=async(setReview,slug)=>{
   const response = await fetch(
     `http://127.0.0.1:8011/api/submit-review/${slug}`
   );
   const data = await response.json();
   setReview(data);
 }

 export const createUser = async(userData) =>{
  try {
    const response = await fetch(`http://127.0.0.1:8011/api/createuser/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // handle non-2xx response codes here
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    // handle the response data here
  } catch (error) {
    // handle network errors and other exceptions here
    alert("Error creating user:", error);
  }
 }