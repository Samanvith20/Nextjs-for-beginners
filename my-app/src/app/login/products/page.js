"use client"
import { useEffect, useState } from 'react';



export default function ProductsPage() {
  

  const [products, setProducts] = useState();

  useEffect(() => {
    {
      const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        console.log(json.products);
        setProducts(json.products);
      };

      fetchData();
    }
  }, []);

  return (
    <div>
      <h1>In this we have to render all the products of my-website</h1>
      {products && (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
               <h1>{product.title} </h1>

            <p>{product.description}</p>
</li>
          ))}
        </ul>
      )}
    </div>
  );
}
