import { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";

const AllData = () => {
    const [allData, setAllData] = useState([])
    const [showAllData, setShowAllData] = useState(false);
    const handleToggleData = () => {
        setShowAllData(!showAllData);
      };
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    return (
        <div>

        <div className=" gap-20 grid md:grid-cols-3 grid-cols-1 gap">
      {allData.slice(0, showAllData ? allData.length : 6).map((singleData, i) => (
          <SingleData key={i} singleData={singleData} />
          ))}
      <br />
    </div>
    <div className="mb-28 mt-10 flex justify-center">
      <button className=" font-bold bg-orange-500 p-2 text-white rounded-md" onClick={handleToggleData}>
        {showAllData ? 'Show Less Data' : 'Show All Data'}
      </button>
      </div>
        </div>
    );
};

export default AllData;