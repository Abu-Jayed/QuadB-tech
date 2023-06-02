import { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";

const AllData = () => {
    const [allData, setAllData] = useState([])
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    // console.log(allData);
    return (
        <div className="grid md:grid-cols-3 grid-cols-1">
            {
                allData.map((singleData,i) => <SingleData
                key={i}
                singleData={singleData}
                ></SingleData>)
            }
        </div>
    );
};

export default AllData;