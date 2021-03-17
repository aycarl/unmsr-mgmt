import {OrganizationActionTypes} from "./organization-action-types";

const INITIAL_STATE = {
  newOrganization: {},
  statusCode: ""
}

const OrganizationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrganizationActionTypes.CREATE_NEW_ORGANIZATION:
      return {
        ...state,
        newOrganization: action.payload
      }
      
    case OrganizationActionTypes.SAVE_ORGANIZATION_AS_DRAFT:
      return {
        ...state,
        statusCode: action.payload
      }
      
    case OrganizationActionTypes.SUBMIT_NEW_ORGANIZATION:
      return {
        ...state,
        statusCode: action.payload
      }
  
    default:
      return state;
  }
}

export default OrganizationReducer;