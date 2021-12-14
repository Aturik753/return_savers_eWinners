import React from 'react'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




function Items() {

    const addToCart = () => {
        toast.success("Added to your cart !");
        
    }
    return (
        <div>
            <div class="container">

<section class="container">
  <header class="section-heading heading-line">
      <h4 class="title-section text-uppercase">Popular items</h4>
  </header>
  <div class="col">
  <div class="card h-100">
    <img src="assets/images/items/7.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Item Title</h5>
      <h6>$100.00</h6>
      <p class="card-text">Item brief Description</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4">
<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Item Title</h5>
      <h6>$100.00</h6>
      <p class="card-text">Item brief Description</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      <ToastContainer autoClose={3000}/>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Item Title</h5>
      <h6>$100.00</h6>
      <p class="card-text">Item brief Description</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Item Title</h5>
      <h6>$100.00</h6>
      <p class="card-text">Item brief Description</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/4.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Item Title</h5>
      <h6>$100.00</h6>
      <p class="card-text">Item brief Description</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Item Title</h5>
      <h6>$100.00</h6>
      <p class="card-text">Item brief Description</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/7.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Item Title</h5>
      <h6>$100.00</h6>
      <p class="card-text">Item brief Description</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>



</div>
</section>

  </div>
        </div>
    )
}

export default Items
