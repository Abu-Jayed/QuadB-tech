import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DataDetail = () => {
    const id = useParams()
    const [allData, setAllData] = useState([])
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    const noMore = []
    const findData = allData.map(data => {
        if(data.show.id == id.id){
            noMore.push(data.show)
        }
    });
    let dataObj = {}
    const rightData = noMore.map(data => {
        dataObj.singleData = data
    } )
    const summary = noMore[0]?.summary
    console.log(noMore[0]);

    const removePTags = (htmlString) => {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(htmlString, 'text/html');
        return parsedHtml.body.textContent;
      };
      const cleanedSummary = removePTags(summary);
      const img = noMore[0]?.image.original;
    return (
        <div className="mb-20">
            <h1 className="text-5xl font-semibold">{noMore[0]?.name}</h1>
            <img src={img} alt="" />
            <h1 className="text-2xl font-semibold">Summary:</h1>
            <p> {cleanedSummary}</p>
        </div>
    );
};

export default DataDetail;