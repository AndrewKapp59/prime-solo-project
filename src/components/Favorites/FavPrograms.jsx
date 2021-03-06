import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import FavProgItem from './FavProgItem';

import Grid from '@mui/material/Grid';

function FavPrograms() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_FAV_PROGS" });
  }, []);

  const favProgList = useSelector((store) => store.favProgs);

  console.log(favProgList);

  return (
    <>
    <div className="prog-list-container">
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        {favProgList.map((favProg, index) => {
          return (
            <Grid key={index} item xs={3}>
              <FavProgItem key={index} favProg={favProg} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  </>
  );
}

export default FavPrograms;