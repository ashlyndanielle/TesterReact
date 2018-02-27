import React, { Component } from 'react';

import * as products from '../services/products';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    // this.props.match.params.id is taken from the browser url
    // when you type in or link to the specific item id, the id
    // itself can be grabbed using this^
    products.get(this.props.match.params.id)
    .then( product => this.setState({ product }))
  }

  render() {
    const { product } = this.state;
    const style = { "display": "block", "paddingBottom": "20px" }
    return (
      <div className="main-container">
        <a style={style} href="/store">Back to the Store</a>
        <img className="product-image" src={product.image} alt={product.title}/>
        <h1>{product.title}</h1>
        <p>{`$${product.price}`}</p>
        <p>{product.desc}</p>
      </div>
    );
  }
}

export default Product;