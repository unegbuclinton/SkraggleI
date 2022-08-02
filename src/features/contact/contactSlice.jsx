import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCompanies, deleteCompany, getCompanies } from 'api/contacts/company';
import {
  allInteractions,
  createInteractions,
  interactionsByID
} from 'api/contacts/contact-subTab/interactions';
import { editContact } from 'api/contacts/contact-subTab/profile';
import {
  addContact,
  allContacts,
  deleteContact,
  eachContact,
  smartRecommendation
} from 'api/contacts/contacts';
import { addHousehold, deleteHousehold, getAllHouseHold } from 'api/contacts/household';
import { companiesSearch, contactSearch, houseHoldSearch } from 'api/contacts/search';
import { addTags, allTags, deleteTag } from 'api/contacts/tags';
import { addTodo, getEachTodo } from 'api/contacts/todo';
import { addVolunteer, eachVolunteer } from 'api/contacts/volunteer';
import { logoutUser } from 'features/auth/authSlice';

const initialState = {
  companies: [],
  isLoading: false,
  tagsCreated: false,
  houseHolds: [],
  contactData: [],
  tagsData: [],
  todos: [],
  eachTodoData: [],
  eachContact: [],
  eachInteractionData: [],
  interactionData: [],
  recommendation: [],
  eachVolunteerData: [],
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
export const eachTodo = createAsyncThunk('contact/eachTodo', getEachTodo);
export const createVolunteer = createAsyncThunk('contact/createVolunteer', addVolunteer);
export const oneContact = createAsyncThunk('contact/oneConact', eachContact);
export const getInteraction = createAsyncThunk('contact/getInteraction', createInteractions);
export const updateContact = createAsyncThunk('contact/updateContact', editContact);
export const getAllInteractions = createAsyncThunk('contact/getAllInteractions', allInteractions);
// export const getAllVolunteer = createAsyncThunk('contact/getAllVolunteer', getVolunteer);
export const getEachVolunteer = createAsyncThunk('getEachVolunteer', eachVolunteer);
export const removeContact = createAsyncThunk('contact/removeContact', deleteContact);
export const removeHouseHold = createAsyncThunk('contact/removeHouseHold', deleteHousehold);
export const removeCompany = createAsyncThunk('contact/removeCompany', deleteCompany);
export const removeTag = createAsyncThunk('contact/removeTag', deleteTag);
export const smartAsk = createAsyncThunk('contact/smartAsk', smartRecommendation);
export const eachInteraction = createAsyncThunk('contact/eachInteraction', interactionsByID);

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
      state.isLoading = false;
    },
    [createContact.rejected]: (state) => {
      state.isLoading = false;
    },
    [createContact.pending]: (state) => {
      state.isLoading = true;
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
    [allHouseHold.pending]: (state) => {
      state.isLoading = true;
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
    [createTags.rejected]: (state) => {
      state.isLoading = false;
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
    // },`
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
    [eachTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.eachTodoData = action.payload;
    },
    [eachTodo.rejected]: (state) => {
      state.isLoading = false;
    },
    [eachTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [getEachVolunteer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.eachVolunteerData = action.payload;
    },
    [getEachVolunteer.rejected]: (state) => {
      state.isLoading = false;
    },
    [getEachVolunteer.pending]: (state) => {
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
    [smartAsk.pending]: (state) => {
      state.isLoading = true;
    },
    [smartAsk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.recommendation = action.payload;
    },
    [smartAsk.rejected]: (state) => {
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

    [eachInteraction.fulfilled]: (state, action) => {
      state.eachInteractionData = action.payload;
    },
    [logoutUser.fulfilled]: () => {
      return initialState;
    }
  }
});

export default contactSlice.reducer;
