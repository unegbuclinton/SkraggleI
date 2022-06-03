import * as Yup from 'yup';

export const registrationSchema = Yup.object({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  email: Yup.string().email('invalid Mail').required('Email is Required'),
  password: Yup.string(),
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
  primary_phone: Yup.string().required('Phone Number is required'),
  emailSubscription: Yup.string().required('Email Subscription is required'),
  date: Yup.string().required('Date is required'),
  month: Yup.string().required('Month is required'),
  year: Yup.string().required('Year is required'),
  company: Yup.string().required('Company is required')
});

export const createContactStepTwoValidationSchema = Yup.object({
  address: Yup.string().required('Address is required'),
  unit: Yup.string().required('Unit is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  postalcode: Yup.string().required('postalcode is required'),
  country: Yup.string().required('Country is required'),
  household: Yup.string().required('Household is required'),
  assignee: Yup.string().required('Assignee is required'),
  priority: Yup.string().required('Priority is required'),
  tags: Yup.array().required('Tags is required')
});

export const createCompanyValidatonSchema = Yup.object({
  companyName: Yup.string().required('Company name is required'),
  primaryPhone: Yup.string().required('Primary phone is required'),
  email: Yup.string().required('Tag is required')
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
  followers: Yup.array().required('Select a Follower')
});

export const editWebsiteSchema = Yup.object({
  website: Yup.string().required('This field is required'),
  twitter: Yup.string().required('This field is required'),
  facebook: Yup.string().required('This field is required'),
  instagram: Yup.string().required('This field is required'),
  linkedin: Yup.string().required('This field is required'),
  youtube: Yup.string().required('This field is required')
});

export const editAssociationModal = Yup.object({
  companyName: Yup.array().required('This field is required'),
  household: Yup.string().required('This field is required')
});

export const volunteerValidationSchema = Yup.object({
  tShirtSize: Yup.string().required('This field is required')
});

export const AdminEditValidationSchema = Yup.object({
  originId: Yup.string().required('Origin ID is required'),
  priority: Yup.string().required('Priority is required'),
  assignee: Yup.string().required('Assignee is required'),
  tag: Yup.string().required('Tag is required'),
  note: Yup.string().required('Note is required'),
  solicitation: Yup.string().required('This field is required'),
  emailSubscriptionStatus: Yup.string().required('This field is required')
});

export const EditContactSchema = Yup.object({
  phone: Yup.string().required('Phone is required'),
  email: Yup.string().required('Email is required'),
  street: Yup.string().required('Street is required'),
  unit: Yup.string().required('Unit is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  postal: Yup.string().required('Postal Code is required'),
  country: Yup.string().required('Country is required')
});

export const editContactProfileSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  preferredName: Yup.string().required('Preferred name is required'),
  phone: Yup.string().required('Phone is required'),
  dob: Yup.string().required('Date of birth is required'),
  street: Yup.string().required('Street is required'),
  unit: Yup.string().required('Unit is required'),
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  postal: Yup.string().required('Postal/Zip code is required'),
  email: Yup.string().required('Recipient is required')
});

export const CreateTodoValidationSchema = Yup.object({
  todo: Yup.string().required('Todo is required'),
  details: Yup.string().required('Details is required'),
  dueDate: Yup.string().required('Due date is required')
  // assignees: Yup.string().required('Assignee is required'),
  // attachment: Yup.string().required('Attachment is required')
});

export const contactInteractionSchema = Yup.object({
  type: Yup.string().required('Type name is required'),
  date: Yup.string().required('Date is required'),
  description: Yup.string().required('Description is required'),
  subject: Yup.string().required('Subject is required')
});
export const campaignOverview = Yup.object({
  task: Yup.string().required('Select an option')
});

export const confirmNewPassword = Yup.object({
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

export const VolunteerValidationSchema = Yup.object({
  name: Yup.string().required('Activity name is required'),
  startDate: Yup.string().required('Start date is required'),
  endDate: Yup.string().required('End Date is required')
});

export const P2PValidationSchema = Yup.object({
  campaignName: Yup.string().required('This Field is required'),
  designation: Yup.string().required('This Field is required'),
  fundraiserName: Yup.string().required('This Field is required'),
  firstName: Yup.string().required('This Field is required'),
  lastName: Yup.string().required('This Field is required'),
  email: Yup.string().required('This Field is required'),
  goalAmount: Yup.string().required('This Field is required'),
  goalCurrency: Yup.string().required('This Field is required'),
  offlineAmount: Yup.string().required('This Field is required'),
  offlineDonation: Yup.string().required('This Field is required'),
  goalDate: Yup.string().required('This Field is required'),
  personalMessage: Yup.string()
});
