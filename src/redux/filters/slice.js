import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { selectFilter } from "./selectors";
const filtersSlice = createSlice({
  name: "filters",
  initialState: { status: "" },
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

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
