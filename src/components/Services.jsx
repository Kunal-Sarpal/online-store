import axios from "../utils/axios";
import { useEffect, useState } from "react";


function Services() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios.get('/users').then((jsondata) => {
      setdata(jsondata.data);
      setloading(false);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="w-full h-[85vh]  flex justify-center items-center">
          <div className=" border-r-2 border-b-zinc-800 w-20 h-20 rounded-full animate-spin border-b-2 border-slate-300 hover:animate-pulse from-white"></div>
        </div>
      ) : (
        <div className="flex border-2m-auto">
          <div className="p- m-3 flex flex-wrap justify-start">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-200 m-2 p-4 w-48 h-56 accent-fuchsia-700 shadow-neutral-900 shadow-sm  rounded-xl border-2 border-white text-lg font-semibold "
              >
                <h1>{item.username}</h1>
                <h1>{item.email}</h1>

                <button className=" mt-24  px-2 p-1 rounded-md border-2  border-zinc-600 font-normal hover:bg-green-400 hover:font-semibold w-full">
                  Block
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
