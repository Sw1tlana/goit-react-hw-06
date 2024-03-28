import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	items: []
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,

  reducers: {
    addContacts(state, action) {
        state.items.push(action.payload);
    },
    deleteContacts(state, action) {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;