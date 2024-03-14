"use client"
import { useEffect, useState } from 'react';



export default function ProductsPage() {
  

  const [products, setProducts] = useState();

  useEffect(() => {
    {
      const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        //console.log(json.products);
        setProducts(json.products);
      };

      fetchData();
    }
  }, []);

  return (
    <div className='border-2 border-gray-400 p-4'>
  <h1 className='text-2xl font-bold mb-4'>Products list</h1>
  {products && (
    <ul>
      {products.map((product, index) => (
        <li key={index} className='mb-4'>
          <h2 className='text-xl font-semibold'>{product.title}</h2>
          <p className='text-gray-700'>{product.description}</p>
        </li>
      ))}
    </ul>
  )}
</div>

  );
}
