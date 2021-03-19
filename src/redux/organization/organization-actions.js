import axios from "axios";
import { OrganizationActionTypes } from "./organization-action-types";

export const CreateOrganization = (newOrganization) => ({
  type: OrganizationActionTypes.CREATE_ORGANIZATION,
  payload: newOrganization,
});

// TODO: future feature
// dispatch action to save new organization details as draft
export const SaveOrganizationAsDraft = statusCode => ({
  type: OrganizationActionTypes.SAVE_ORGANIZATION_AS_DRAFT,
  payload: statusCode
});

// TODO: future feature
// dispatch action to submit new organization application to Student Activity Center
export const SubmitNewOrganization = statusCode => ({
  type: OrganizationActionTypes.SUBMIT_NEW_ORGANIZATION,
  payload: statusCode
});

export const FetchAllOrganizations = allOrganizations => ({
  type: OrganizationActionTypes.FETCH_ALL_ORGNANIZATIONS,
  payload: allOrganizations
});

export const FetchAllOrganizationsFailure = errorCode => ({
  type: OrganizationActionTypes.FETCH_ALL_ORGNANIZATIONS_FAILURE,
  payload: errorCode
});

export const FetchAllOrganizationsFromDB = () => {
  return async dispatch => {
    axios.get('https://tilde-coco-strapi.herokuapp.com/organizations')
    .then(response => {
      console.log(response.data)
      dispatch(FetchAllOrganizations(response.data))
    })
    .catch(error => {
      dispatch(FetchAllOrganizationsFailure(error))
    })
  }
};

// dispatch action to save draft in database

// dispatch action to submit draft to SAC