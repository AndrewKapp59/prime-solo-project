function OrganizationItem({ organization }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [favorite, setFavorite] = useState(false);

  console.log(user);

  const addFavorite = () => {
    console.log("Adding Favorite");
    const postOptions = {
      org_id: organization.id,
      user_id: user.id
    };
    dispatch({ type: "POST_FAV_ORG", payload: postOptions });
    setFavorite(true);
  };

  const removeFavorite = () => {
    console.log('Removing Favorite');

    dispatch({ type: "DELETE_FAV_ORG", payload: organization.id });

    setFavorite(false);
  };

  const handleSelectedOrganization = (organization) => {
    history.push(`/organization-details/${organization.org_id}`);
  };

  const name = organization.org_name;
  const img = organization.org_img_url;

  return (
    <Card
      className="org-card"
      style={{ backgroundColor: '#dee8f1' }}
      sx={{ maxWidth: 500 }}
    >
      <CardMedia
        component="img"
        height="100"
        image={img}
        alt={(name, 'img')}
      ></CardMedia>
      <CardContent sx={{ maxHeight: 60 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          onClick={() => handleSelectedOrganization(organization)}
        >
          {name}
        </Typography>
      </CardContent>
      {user.user_type === 'Artist' ? (
        <div className="favorite-overlay">
          {!favorite && (
            <BookmarkBorderIcon onClick={addFavorite} fontSize="medium" />
          )}
          {favorite && (
            <BookmarkIcon onClick={removeFavorite} fontSize="medium" />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </Card>
  );
}

export default OrganizationItem;