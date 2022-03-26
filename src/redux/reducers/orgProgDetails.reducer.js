const OrgProgDetails = (state = {}, action) => {
  switch (action.type) {
      case 'SET_ORG_PROG_DETAILS':
          return action.payload;
      default: 
          return state;
  }
}

export default OrgProgDetails;