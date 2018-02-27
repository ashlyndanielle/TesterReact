import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as products from './services/products';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    products.index()
    .then( products => {
      console.log('products: ', products);
      this.setState({
        products
      })
    });
  }

  render() {
    const style={ "display": "block"}
    const products = this.state.products.map( product => {
      return (
        <div className="spacer" key={product.id} >
          <img className="product-image" src={product.image} />
          <Link style={style} to={`/product/${product.id}`}>{product.title}</Link>
        </div>
      )
    })
    return (
      <div className='main-container flex'>
        { products }
      </div>
    );
  }
}

export default Store;