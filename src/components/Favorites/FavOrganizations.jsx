import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function FavOrganizations() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_FAVORITES" });
  }, []);

  const favGifList = useSelector((store) => store.gifFav);

  console.log(favGifList);

  return (
    <>
      <h1>Favorite Organizations</h1>
      <div className='gif-list-container'>
       
      </div>
    </>
  );
}

export default FavOrganizations;
