import React, { Component } from 'react';
import data from '../data';
import { Link } from 'react-router-dom'
import axios from 'axios'

class HomeScreen extends Component {

  constructor(props){
    super(props)
    this.state ={
      listProduct: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/products`, null)
      .then(res => {
        console.log("res = " +res);
        console.log(res.data);
        this.setState({
          listProduct: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return <ul className="products">
    {
      // data.products.map( product => 
      //   <li>
      //     <div className="product">
      //     <Link to={'/product/' + product.id} >
      //       <img className="product-image" src={product.image} alt="product" />
      //     </Link>
      //       <div className="product-name">
      //         <Link to={'/product/' + product.id} >{product.name}</Link>
      //       </div>
      //       <div className="product-brand">{product.brand}</div>
      //       <div className="product-price">${product.price}</div>
      //       <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
      //     </div>
      //   </li>
      //   )
      this.state.listProduct.map(product => 
        <li key = {product.id}>
             <div className="product">
             <Link to={'/product/' + product.id} >
               <img className="product-image" src='/images/mac.jpg' alt="product" />
             </Link>
               <div className="product-name">
                 <Link to={'/product/' + product.id} >{product.name}</Link>
               </div>
               <div className="product-brand">brand</div>
               <div className="product-price">${product.price}</div>
               <div className="product-rating">{product.rating} Stars</div>
             </div>
        </li>)
    }
    </ul>
  }
}
  

export default HomeScreen;
