import {React,useEffect, useState} from 'react'
import axios from 'axios'
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function HomeScreen() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchData = async()=>{
      try {
        setLoading(true)
        const {data} = await axios.get('/api/product')
        setLoading(false)
        setproduct(data)
        
      } catch (error) {
        setError(error.message)
        setLoading(false)
        
      }
      
    }

    fetchData()
  }, [])
  
    return (
      <div>
        {loading?
        <LoadingBox></LoadingBox>:
        error?
        <MessageBox variant="danger">{error}</MessageBox>:
        <div className="row center">
              {
                product.map(product=>(
                  <Product key ={product._id} product={product}></Product>
                ))
              }
        </div>}
      </div>
      
    )
}
