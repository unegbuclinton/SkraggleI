import * as Yup from 'yup';

export const registrationSchema = Yup.object({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  email: Yup.string().email('invalid Mail').required('Email is Required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      'Password must be at least 8 characters including a lowercase letter, an uppercase letter, and a number'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Passwords do not match')
});

export const resetSchema = Yup.object({
  email: Yup.string().email('invalid Mail').required('Email is Required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      'Password is not strong'
    )
});

export const loginSchema = Yup.object({
  email: Yup.string().email('Invalid Email').required('Email is Required'),
  password: Yup.string().required('Password is Required')
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email('Invalid Email').required('Email is Required')
});

export const createContactStepOneValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('First name is required'),
  lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Last name is required'),
  primary_email: Yup.string().email('invalid Mail').required('Email is required'),
  primary_phone: Yup.string().required('Email is required'),
  // emailSucription: Yup.string().required("Email Subscription is required"),
  // date: Yup.string().required("Date is required"),
  // month: Yup.string().required("Month is required"),
  // year: Yup.string().required("Year is required"),
  company: Yup.string().required('Company is required')
});

export const createContactStepTwoValidationSchema = Yup.object({
  address: Yup.string().required('Address is required'),
  unit: Yup.string().required('Unit is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  postalcode: Yup.string().required('postalcode is required'),
  country: Yup.string().required('Country is required')
});

export const createCompanyValidatonSchema = Yup.object({
  companyName: Yup.string().required('Company name is required'),
  primaryPhone: Yup.string().required('Primary phone is required'),
  tags: Yup.string().required('Tag is required')
});

export const houseHoldValidationSchema = Yup.object({
  name: Yup.string().required('Name is required')
});

export const tagValidationSchema = Yup.object({
  tag: Yup.string().required('Tag is required')
});

export const segmentValidationSchema = Yup.object({
  segment: Yup.string().required('Segment is required')
});

export const detailsValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  message: Yup.string().required('Message is required'),
  venue: Yup.string().required('Venue is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string().required('Zip is required'),
  settings: Yup.string().required('Settings is required'),
  eventStartDate: Yup.string().required('Events date required'),
  startTime: Yup.string().required('Start time is required'),
  endTime: Yup.string().required('End time is required'),
  registrationDate: Yup.string().required('Registration date is required'),
  receipt: Yup.string().required('Receipt is required'),
  receiptTitle: Yup.string().required('Receipt title is required'),
  category: Yup.string().required('Category is required'),
  receiptDescription: Yup.string().required('Receipt Description is required'),
  formName: Yup.string().required('Form name is required'),
  emailReply: Yup.string().required('Email reply is required'),
  subject: Yup.string().required('Subject is required'),
  email: Yup.string().required('Recipient is required')
});

export const packageValidatioSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  price: Yup.string().required('Price is required'),
  directCost: Yup.string().required('Cost is required'),
  discount: Yup.string().required('Discount percentage is required'),
  earlyBid: Yup.string().required('Early bid cutoff is required'),
  endTime: Yup.string().required('End time is required'),
  partcipant: Yup.string().required('Participants is required'),
  qty: Yup.string().required('Quantity is required'),
  packageQuantity: Yup.string().required('Package quantity is required')
});

export const fieldValidationSchema = Yup.object({
  fieldLabel: Yup.string().required('Field label is required'),
  reportLabel: Yup.string().required('Report Label is required'),
  fieldType: Yup.string().required('Field type is required')
});

export const promoCodeValidationSchema = Yup.object({
  promoCode: Yup.string().required('Promo code is required'),
  description: Yup.string().required('Description is required'),
  discount: Yup.string().required('Discount is required'),
  maxUsers: Yup.string().required('Max users is required'),
  startDate: Yup.string().required('Start date is required'),
  endDate: Yup.string().required('End date is required')
});

export const generalSettingsValidationSchema = Yup.object({
  eventMessage: Yup.string().required('This field is required'),
  donationMessage: Yup.string().required('This field is required'),
  linkText: Yup.string().required('This field is required')
});

export const createCampaignSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  goals: Yup.string().required('Please enter Fundraiser Goals'),
  followers: Yup.string().required('Select a Follower')
});

export const p2pFundraiserValidationSchema = Yup.object({
  displayName: Yup.string().required('field is required'),
  firstName: Yup.string().required('field is required'),
  lastName: Yup.string().required('field is required'),
  email: Yup.string().required('field is required'),
  goalAmount: Yup.string().required('field is required'),
  offlineAmount: Yup.string().required('field is required'),
  offlineDonation: Yup.string().required('field is required'),
  goalDate: Yup.string().required('field is required')
  // personalMessage: Yup.string().required('field is required')
});
