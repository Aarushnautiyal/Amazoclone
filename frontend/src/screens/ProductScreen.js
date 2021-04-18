import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data'

export default function ProductScreen(props) {
    const product = data.products.find((x)=>x._id===props.match.params.id);
    if(!product){
        return <div>Product not found</div>
    }
    return (
        <div>
            <Link to="/">Back to Home</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="Large" src={product.image} alt = {product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating = {product.rating} 
                            rev = {product.rev}></Rating>
                        </li>
                        <li>
                            Price:{product.price}$
                        </li>
                        <li>
                            Description:{product.description}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div className="price">Price:</div>
                                    <div>{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status:</div>
                                    <div>{product.InStock>0?(<span className="success">In Stock</span>):
                                    (<span class ="danger">Out of Stock</span>)
                                    }</div>
                                </div>
                            </li>
                            <li>
                                <button className="Primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
