
const ProgDetails = (state = {}, action) => {
  switch (action.type) {
      case 'SET_PROG_DETAILS':
          return action.payload;
      default: 
          return state;
  }
}

export default ProgDetails;