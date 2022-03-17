
const organizationsReducer = (state = [], action) => {
  
  switch (action.type) {
      case 'LIST_FAV_ORGS':
          return action.payload;
      default:
          return state;
  }
};   

export default organizationsReducer;