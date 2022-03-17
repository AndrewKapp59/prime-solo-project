const favProgs = (state = [], action) => {
  
  switch (action.type) {
      case 'LIST_FAV_PROGS':
          return action.payload;
      default:
          return state;
  }
};   

export default favProgs;