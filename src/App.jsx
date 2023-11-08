import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";

function App() {

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true)

  async function fetchData(){
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output=await response.json();
      setCourses(output.data);

    } catch (error) {
      toast.error("Network Me error hai fetch nahi chala")
    }
    setLoading(false)
  }


  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div>
          <Navbar />
        </div>

        <div>
          <Filter filterData={filterData}/>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh]">
          {
            loading?(<Spinner/>):(<Cards courses={courses}/>)
          }
        </div>
      </div>
    </>
  );
}

export default App;
