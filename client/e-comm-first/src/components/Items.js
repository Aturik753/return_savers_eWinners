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
      <h5 class="card-title">Wrist Workout Monitor</h5>
      <h6>$150.00</h6>
      <p class="card-text">Track your workout with heart monitor, distance tracking and more. <br/>Compared at $250</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
<br/>
<br/>

<div class="row row-cols-1 row-cols-md-3 g-4">
<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/5.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Tablet Pad</h5>
      <h6>$40.00</h6>
      <p class="card-text">Leather tablet pad for up to 17" laptops<br/>Compared at $55</p>
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
      <h5 class="card-title">Convertable Bag</h5>
      <h6>$70.00</h6>
      <p class="card-text">Back pack converts to hand bag<br/>Compared at $80</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>

<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Golf Shirt</h5>
      <h6>$58.00</h6>
      <p class="card-text">3 button golf shirt - slate blue<br/>Compared at $60</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      <ToastContainer autoClose={3000}/>
    </div>
  </div>
</div>

<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Denim Shorts</h5>
      <h6>$45.00</h6>
      <p class="card-text">Denim shorts mid thigh cut<br/>Compared at $85</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>

<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Winter Work Jacket</h5>
      <h6>$110.00</h6>
      <p class="card-text">Down with durable canvas outer<br/>Compared at $125</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>



{/* <div class="col">
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
 */}


</div>
</section>

  </div>
        </div>
    )
}

export default Items
