import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.isLoading;
export const selectContactsError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filters.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalized = filter?.trim().toLowerCase() || "";
    if (!normalized) return contacts;
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(normalized) ||
        (c.number && c.number.toLowerCase().includes(normalized))
    );
  }
);
