import axios from "axios"
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { ApiEndPoints } from "../utils/ApiEndPoints";
const HomeCards = () => {
const[data,setData] = useState(null);
const [loading ,setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
    const fetch = async()=>{
        await fetchData();
    }
    fetch();
},[])

const fetchData = async () =>{
    try{
        setLoading(true);
        const response = await axios.get(ApiEndPoints.GetCurrentMatches);
        setData(response.data.data);
    }catch(err){
        setError(err);
    }finally{
        setLoading(false);
    }  
}
  return (
    <>
     {loading && <Loader />}
     {error && <div>Error: {error.message}</div>}
     {!loading &&  <div className="overflow-x-auto flex space-x-4 p-4">
      {console.log(data)}
      {data.map((index) => (
        <div
          key={index?.id}
          className="min-w-[300px] border border-gray-300 rounded-2xl shadow-lg p-4 bg-white"
        >
          <div className="text-sm text-gray-500 font-medium">{index?.name}</div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <img
                src={"/cricscore.svg"}
                alt={""}
                className="w-6 h-6 rounded-full"
              />
              <span className="ml-2 font-semibold text-gray-800">{index?.teams[0]}</span>
            </div>
            <div className="text-lg font-bold text-gray-900">{index?.score[0].r}</div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <img
                src={"/cricscore.svg"}
                alt={""}
                className="w-6 h-6 rounded-full"
              />
              <span className="ml-2 font-semibold text-gray-800">{index?.teams[1]}</span>
            </div>
            <div className="text-lg font-bold text-gray-900">{(index?.score.length>1)?index?.score[1].r:""}</div>

          </div>
          <div className="mt-4 text-red-600 font-medium">{index?.status}</div>
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span className="hover:underline cursor-pointer">FANTASY</span>
            <span className="hover:underline cursor-pointer">TABLE</span>
            <span className="hover:underline cursor-pointer">SCHEDULE</span>
          </div>
        </div>
      ))}
    </div>}
    </>
  );
};

export default HomeCards;
