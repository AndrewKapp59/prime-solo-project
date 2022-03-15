
const selectedOrganization = (state = [], action) => {
  switch (action.type) {
      case 'SET_SELECTED_ORGANIZATION':
          return action.payload;
      default:
          return state;
  }
}

export default selectedOrganization;