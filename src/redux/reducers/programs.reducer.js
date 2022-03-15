
const programsReducer = (state = [], action) => {
  
  switch (action.type) {
      case 'LIST_PROGRAMS':
          return action.payload;
      default:
          return state;
  }
};   

export default programsReducer;