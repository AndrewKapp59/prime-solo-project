import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import FavOrgItem from './FavOrgItem';

import Grid from '@mui/material/Grid';

function FavOrganizations() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_FAV_ORGS" });
  }, []);

  const favOrgList = useSelector((store) => store.favOrgs);

  return (
    <>
      <h1>Favorite Organizations</h1>
      <div className="org-list-container">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          {/* {favOrgList.map((favOrg, index) => {
            return (
              <Grid key={index} item xs={3}>
                <FavOrgItem key={index} favOrg={favOrg} />
              </Grid>
            );
          })} */}
        </Grid>
      </div>
    </>
  );
}

export default FavOrganizations;

