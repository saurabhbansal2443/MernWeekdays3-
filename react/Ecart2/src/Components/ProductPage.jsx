import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  let [data, setData] = useState(null);
  const { id } = useParams();
  

  

  let productData = async () => {
    let data = await fetch(`https://dummyjson.com/products/${id}`);
    let productData = await data.json();
    setData(productData)
  }

  useEffect(() => {
    productData();
  }, [])

  if( data == null ){
    return <div> ....loading </div>;
  }
  let { thumbnail , title , price , category , rating , brand  } = data ;
 

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={thumbnail}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
