import { OrganizationActionTypes } from "./organization-action-types";

export const CreateNewOrganization = (newOrganization) => ({
  type: OrganizationActionTypes.CREATE_NEW_ORGANIZATION,
  payload: newOrganization,
});

export const SaveOrganizationAsDraft = statusCode => ({
  type: OrganizationActionTypes.SAVE_ORGANIZATION_AS_DRAFT,
  payload: statusCode
});

export const SubmitNewOrganization = statusCode => ({
  type: OrganizationActionTypes.SUBMIT_NEW_ORGANIZATION,
  payload: statusCode
});

// dispatch action to save draft in database

// dispatch action to submit draft to SAC