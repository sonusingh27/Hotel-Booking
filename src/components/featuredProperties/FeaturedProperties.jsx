


import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:8000/api/hotels?featured=true");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;



// import "./featuredProperties.css";

// const FeaturedProperties = () => {
//   return (
//     <div className="fp">
//       <div className="fpItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
//           alt=""
//           className="fpImg"
//         />
//         <span className="fpName">Gitanjali hotel</span>
//         <span className="fpCity">siwan</span>
//         <span className="fpPrice">Starting from $100</span>
//         <div className="fpRating">
//           <button>8.9</button>
//           <span>Excellent</span>
//         </div>
//       </div>
//       <div className="fpItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
//           alt=""
//           className="fpImg"
//         />
//         <span className="fpName">Amarpali hotel</span>
//         <span className="fpCity">Patna</span>
//         <span className="fpPrice">Starting from $100</span>
//         <div className="fpRating">
//           <button>9.3</button>
//           <span>Exceptional</span>
//         </div>
//       </div>
//       <div className="fpItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
//           alt=""
//           className="fpImg"
//         />
//         <span className="fpName">Amar hotel</span>
//         <span className="fpCity">Bhopal</span>
//         <span className="fpPrice">Starting from $99</span>
//         <div className="fpRating">
//           <button>8.8</button>
//           <span>Excellent</span>
//         </div>
//       </div>
//       <div className="fpItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
//           alt=""
//           className="fpImg"
//         />
//         <span className="fpName">Raj hotel</span>
//         <span className="fpCity">Delhi</span>
//         <span className="fpPrice">Starting from $105</span>
//         <div className="fpRating">
//           <button>8.9</button>
//           <span>Excellent</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProperties;