const organizationsReducer = (state = [], action) => {
  
  switch (action.type) {
      case 'LIST_ORGANIZATIONS':
          return action.payload;
      default:
          return state;
  }
};   

export default organizationsReducer;