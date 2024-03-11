import axios from "../utils/axios";
import Product from "./Product";
import { useEffect, useState } from "react";

function Show() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch data and update state
    useEffect(()=>{

        axios.get('/products')
           .then((response) => {
               setProducts(response.data);
               setLoading(false);
           })
           .catch((error) => {
               console.error('Error fetching products:', error);
               setLoading(false);
           });

    },[])  //[] when we on this route when the state is cahnge it will nt render again and again
    

    // Call fetchData after 3 seconds

        
 

    return (
        <div>
            {loading ? (
                <div className="w-full h-[85vh]  flex justify-center items-center">

                <div className=" border-r-2 border-b-zinc-800 w-20 h-20 rounded-full animate-spin border-b-2 border-slate-300 hover:animate-pulse from-white" ></div>
                </div>
            ) : (
                <Product products={products} />
            )}
        </div>
    );
}

export default Show;
