import {OrganizationActionTypes} from "./organization-action-types";

const INITIAL_STATE = {
  newOrganization: null
}

const OrganizationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrganizationActionTypes.CREATE_NEW_ORGANIZATION:
      return {
        ...state,
        newOrganization: action.payload
      }
  
    default:
      return state;
  }
}

export default OrganizationReducer;