import { createSelector } from "reselect";

const selectOrganization = state => state.organization;

export const selectAllOrganizations = createSelector(
  [selectOrganization],
  organization => organization ? organization.allOrganizations : []
);

export const selectStatusCode = createSelector(
  [selectOrganization],
  organization => organization.statusCode
);