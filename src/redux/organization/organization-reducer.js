import { OrganizationActionTypes } from "./organization-action-types";

const INITIAL_STATE = {
  newOrganization: {},
  allOrganizations: [],
  statusCode: "",
};

const OrganizationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrganizationActionTypes.CREATE_ORGANIZATION:
      return {
        ...state,
        newOrganization: action.payload,
      };

    case OrganizationActionTypes.FETCH_ALL_ORGNANIZATIONS:
      return {
        ...state,
        allOrganizations: action.payload,
      };

    case OrganizationActionTypes.FETCH_ALL_ORGNANIZATIONS_FAILURE:
      return {
        ...state,
        statusCode: action.payload,
      };

    default:
      return state;
  }
};

export default OrganizationReducer;
