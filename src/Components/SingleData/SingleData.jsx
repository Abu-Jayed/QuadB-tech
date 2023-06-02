import { BsStarFill, BsStarHalf } from "react-icons/bs";

const SingleData = ({ singleData }) => {
  const { name,image,genres, network,  } = singleData.show;
  const {medium,original} = image;
  

  // console.log(singleData);
  console.log(network?.name);
  return (
    <div>
     <div>
      {/* <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3  mx-auto md:my-10 gap-10">
            <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
            <img className="mx-auto w-48" src="https://slimages.macys.com/is/image/MCY/products/0/optimized/22528380_fpx.tif" alt="" />
            <a href="" className="p-5 text-blue-400 font-bold">Gund P Lushes April Flore Plus</a>
            <p className="font-bold text-xl px-5 pt-2">$15.99</p>
            <div className="items-center px-4 flex mb-4 text-2xl text-orange-600">
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>   
            <BsStarFill></BsStarFill>
            <BsStarFill></BsStarFill>
            <BsStarHalf></BsStarHalf>
            <p>4.6 <span className="text-violet-500"> (64)</span></p>
            <button className="text-lg md:ml-5 font-bold p-1 rounded-xl text-white bg-rose-500 ">Buy Now</button>
            </div>
            </div>
        </div> */}
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
                genres.map(genre => <p className=" ">{genre}</p>)
            }
            </p>
          </div>
          <div className="card-actions justify-end">
            {
              network?.name ? <p>Publiser: {network?.name}</p> : ''
            }
            {/* <p>Publised By: {network?.name}</p> */}
            <button className="font-bold bg-orange-500 p-2 text-white rounded-md">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
