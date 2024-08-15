import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "../auth/operations";
axios.defaults.baseURL = "https://nodejs-hw-mongodb-jzmm.onrender.com";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      // Get the state
      const state = thunkAPI.getState();
      // Set the token
      setToken(state.auth.token);
      const response = await axios.get("/contacts", {
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, thunkAPI) => {
    try {
      // Get the state
      const state = thunkAPI.getState();
      // Add headers
      const response = await axios.post(
        "/contacts",
        {
          name: text.name,
          number: text.number,
        },
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      // Get the state
      const state = thunkAPI.getState();
      // Add headers
      const response = await axios.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

