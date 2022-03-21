import Button from "components/atoms/Button/Button";
import CheckBox from "components/atoms/CheckBox/CheckBox";
import TableBtn from "components/atoms/TableButton/TableBtn";



export const contactsColumns = [
    {
      name: '',
      cell: () => (
        <CheckBox />
      ),
      width: '8rem',
    },
    {
      name: 'FULL NAME',
      selector: (row) => row.fullName,
      width: '20.8rem',
    },
    {
      name: 'PRIMARY EMAIL',
      selector: (row) => row.primaryEmail,
      width: '30rem',
    },
    {
      name: 'PRIMARY PHONE',
      selector: (row) => row.primaryPhone,
      width: '40rem',
      
    },
    {
      name: 'TAGS',
      cell: () => (
       <TableBtn />
      ),
     width: '20.8rem',
    },


  ];

  export const contactsData = [
    {
      fullName: 'Troy Barnes Sr.',
      primaryEmail: 'troybarnesthrowsfootballs@gmail.com',
      primaryPhone: 2563256325,
     
    },
    {
        fullName: 'TMohammed Adam',
        primaryEmail: 'mohamed@biggorillaapps.com',
        primaryPhone: 2563256325,
    },
    {
        fullName: 'Mohammed Adam',
        primaryEmail: 'mohamed@biggorillaapps.com',
        primaryPhone: 2563256325,
    },
    {
        fullName: 'Mohammed Adam',
        primaryEmail: 'mohamed@biggorillaapps.com',
        primaryPhone: 2563256325,
    },
    {
        fullName: 'Mohammed Adam',
        primaryEmail: 'mohamed@biggorillaapps.com',
        primaryPhone: 2563256325,
    },
    {
        fullName: 'Mohammed Adam',
        primaryEmail: 'mohamed@biggorillaapps.com',
        primaryPhone: 2563256325,
    },
    {
        fullName: 'Mohammed Adam',
        primaryEmail: 'mohamed@biggorillaapps.com',
        primaryPhone: 2563256325,
    },
    {
        fullName: 'Mohammed Adam',
        primaryEmail: 'mohamed@biggorillaapps.com',
        primaryPhone: 2563256325,
    },
    {
        fullName: 'Mohammed Adam',
        primaryEmail: 'mohamed@biggorillaapps.com',
        primaryPhone: 2563256325,
    },
    
  ];