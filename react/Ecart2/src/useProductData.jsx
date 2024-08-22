import {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const useProductData = (id) => {
    let [data, setData] = useState(null);
    let navigate = useNavigate();
     
    let productData = async () => {
      let data = await fetch(`https://dummyjson.com/products/${id}`);
      let productData = await data.json();
      setData(productData);
    };
  
  
    useEffect(() => {
      if( id>0 && id<=30 ){
      productData();
      }else{
      navigate("/error")
      }
    }, []);


    return data ;
  
}

export default useProductData
