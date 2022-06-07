import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCompanies, deleteCompany, getCompanies } from 'api/contacts/company';
import { allInteractions, createInteractions } from 'api/contacts/contact-subTab/interactions';
import { editContact } from 'api/contacts/contact-subTab/profile';
import { addContact, allContacts, deleteContact, eachContact } from 'api/contacts/contacts';
import { addHousehold, deleteHousehold, getAllHouseHold } from 'api/contacts/household';
import { companiesSearch, contactSearch, houseHoldSearch } from 'api/contacts/search';
import { addTags, allTags, deleteTag } from 'api/contacts/tags';
import { addTodo, getTodos } from 'api/contacts/todo';
import { addVolunteer, getVolunteer } from 'api/contacts/volunteer';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  companies: [],
  isLoading: false,
  tagsCreated: false,
  houseHolds: [],
  contactData: [],
  tagsData: [],
  todos: [],
  eachContact: [],
  interactionData: [],
  volunteers: []
};

export const createContact = createAsyncThunk('contact/createContact', addContact);
export const viewContact = createAsyncThunk('contact/viewContact', allContacts);
export const getAllCompanies = createAsyncThunk('contact/getAllCompanies', getCompanies);
export const createNewCompany = createAsyncThunk('contact/createCompany', addCompanies);
export const allHouseHold = createAsyncThunk('contact/allHouseHold', getAllHouseHold);
export const createHouseHold = createAsyncThunk('contact/houseHold', addHousehold);
export const createTags = createAsyncThunk('contact/createTags', addTags);
export const viewTags = createAsyncThunk('contact/viewTags', allTags);
export const createTodo = createAsyncThunk('contact/createTodo', addTodo);
export const getAllTodos = createAsyncThunk('contact/getAllTodos', getTodos);
export const createVolunteer = createAsyncThunk('contact/createVolunteer', addVolunteer);
export const oneContact = createAsyncThunk('contact/oneConact', eachContact);
export const getInteraction = createAsyncThunk('contact/getInteraction', createInteractions);
export const updateContact = createAsyncThunk('contact/updateContact', editContact);
export const getAllInteractions = createAsyncThunk('getAllInteractions', allInteractions);
export const getAllVolunteer = createAsyncThunk('contact/getAllVolunteer', getVolunteer);
export const removeContact = createAsyncThunk('contact/removeContact', deleteContact);
export const removeHouseHold = createAsyncThunk('contact/removeHouseHold', deleteHousehold);
export const removeCompany = createAsyncThunk('contact/removeCompany', deleteCompany);
export const removeTag = createAsyncThunk('contact/removeTag', deleteTag);

//search
export const searchContact = createAsyncThunk('contact/searchContact', contactSearch);
export const searchCompanies = createAsyncThunk('contact/searchCompanies', companiesSearch);
export const searchHouseHold = createAsyncThunk('contact/searchHouseHold', houseHoldSearch);

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: {
    //CREATE CONTACT
    [createContact.fulfilled]: (state) => {
      state.isLoading = true;
    },

    [createContact.rejected]: (state) => {
      state.isLoading = false;
    },
    //VIEW CONTACTS
    [viewContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contactData = action.payload;
    },
    [viewContact.rejected]: (state) => {
      state.isLoading = false;
    },
    [createNewCompany.pending]: (state) => {
      state.isLoading = true;
    },
    [createNewCompany.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createNewCompany.rejected]: (state) => {
      state.isLoading = false;
    },

    [getAllCompanies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.companies = action.payload;
    },
    [getAllCompanies.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllCompanies.pending]: (state) => {
      state.isLoading = true;
    },
    [createHouseHold.pending]: (state) => {
      state.isLoading = true;
    },
    [createHouseHold.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createHouseHold.rejected]: (state) => {
      state.isLoading = false;
    },
    [allHouseHold.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.houseHolds = action.payload;
    },
    [allHouseHold.rejected]: (state) => {
      state.isLoading = false;
    },

    //CREATE TAGS
    [createTags.pending]: (state) => {
      state.isLoading = true;
    },
    [createTags.fulfilled]: (state) => {
      state.isLoading = false;
      state.tagsCreated = false;
    },

    //VIEW TAGS
    [viewTags.fulfilled]: (state, action) => {
      state.tagsData = action.payload;
    },
    [viewTags.rejected]: (state, action) => {
      state.tagsData = action.payload;
    },

    // [searchContact.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.contactData = action.payload;
    // },
    // [searchCompanies.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.companies = action.payload;
    // },
    // [searchHouseHold.fulfilled]: (state, action) => {
    //   state.houseHolds = action.payload;
    // },
    [logoutUser.fulfilled]: () => {
      return initialState;
    },
    [createTodo.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createTodo.rejected]: (state) => {
      state.isLoading = false;
    },
    [createTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [getAllTodos.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [createVolunteer.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [createVolunteer.rejected]: (state) => {
      state.isLoading = false;
    },
    [createVolunteer.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllVolunteer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.volunteers = action.payload;
    },
    [getAllVolunteer.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllVolunteer.pending]: (state) => {
      state.isLoading = true;
    },
    [oneContact.fulfilled]: (state, action) => {
      state.eachContact = action.payload;
    },
    [updateContact.fulfilled]: (state, action) => {
      state.eachContact = action.payload;
    },
    [getAllInteractions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.interactionData = action.payload;
    },
    [removeContact.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeContact.pending]: (state) => {
      state.isLoading = true;
    },
    [removeContact.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeHouseHold.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeHouseHold.pending]: (state) => {
      state.isLoading = true;
    },
    [removeHouseHold.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeCompany.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeCompany.pending]: (state) => {
      state.isLoading = true;
    },
    [removeCompany.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeTag.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [removeTag.pending]: (state) => {
      state.isLoading = true;
    },
    [removeTag.rejected]: (state) => {
      state.isLoading = false;
    },
    // [searchContact.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.contactData = action.payload;
    // },
    // [searchCompanies.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.companies = action.payload;
    // },
    // [searchHouseHold.fulfilled]: (state, action) => {
    //   state.houseHolds = action.payload;
    // },
    [logoutUser.fulfilled]: () => {
      return initialState;
    }
  }
});

export default contactSlice.reducer;
