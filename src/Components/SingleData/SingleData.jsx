import { Link } from "react-router-dom";

const SingleData = ({ singleData }) => {
  const { name,image,genres, network, id, } = singleData.show;
  const {medium,original} = image;
  

  console.log(singleData);
  // console.log(network?.name);
  return (
    <div>
     <div>
        </div>   
      <div className=" card card-compact w-80 bg-base-100 shadow-md hover:shadow-md hover:shadow-black shadow-gray-600 ">
          <h2 className="card-title px-5 py-3 text-3xl ">{name}</h2>
        <figure>
          <img
            src={medium}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p></p>
          <div>
            <p className=" flex gap-2 w-6 ">
        Generes: 
            {
                genres.map(genre => <p key={id} className=" ">{genre}</p>)
            }
            </p>
          </div>
          <div className="card-actions justify-end">
            {
              network?.name ? <p>Publiser: {network?.name}</p> : ''
            }
            {/* <p>Publised By: {network?.name}</p> */}
            <Link to={`/detail/${id}`}>
            <button className="font-bold bg-orange-500 p-2 text-white rounded-md"> Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
