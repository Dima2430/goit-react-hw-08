import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { status: "" },
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.status;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
