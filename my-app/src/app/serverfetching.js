
  async function productlist(){
    let response= await fetch("https://dummyjson.com/products")
    let data = await response.json()
     return data.products
  }

const Serverfetching =async () => {
let products= await productlist()
  return (
   <div>
     <h1> Products List </h1>
       {products.map((item)=>
           <div>
            <h1>Name:{item.title}</h1>
            <p>{item.description}</p>
           </div>
       )}
       </div>
  )
}

export default Serverfetching
