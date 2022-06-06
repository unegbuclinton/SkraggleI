import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import SelectDropDown from 'components/atoms/GenericDropdown';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { updateContact } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import { DPIconCloseBlack } from 'icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { editAssociationModal } from 'validation/Schema';

function EditAssociationModalComponent({ onClose }) {
  const { eachContact } = useSelector((state) => state.contact);
  const associationId = eachContact.id;
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState(['']);
  const [itemName, setItemName] = useState('');

  const handleCompanyChange = (e) => {
    console.log(e.value);
    // const { name } = e.value;
    // setItemName(e.value);
    const list = [...companyName];
    // list[index][name] = name;
    setCompanyName(list);
    // formik.setFieldValue('companyName', [...formik.values.companyName, companyName]);
  };
  console.log(companyName);

  const handleRemove = (index) => {
    const list = [...companyName];
    list.splice(index, 1);
    setCompanyName(list);
    setItemName(list);
    formik.setFieldValue('companyName', list);
  };
  // console.log(companyName);

  const handleAdd = (e) => {
    e.preventDefault();
    setCompanyName([
      ...companyName,
      {
        id: companyName.length,
        name: itemName
      }
    ]);
    setItemName('');
  };

  const formik = useFormik({
    initialValues: {
      companyName: [],
      household: ''
    },
    validationSchema: editAssociationModal,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      const body = {
        household: values.household,
        companyName: values.companyName
      };
      dispatch(updateContact({ body: body, id: associationId }));
      onClose();
    }
  });

  const associationOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  return (
    <ModalWrapper onSubmit={formik.handleSubmit}>
      <Card>
        <ModalLabel>Company</ModalLabel>
        <AddCompanyWrapper>
          {companyName.map((name, index) => (
            <>
              <div className="icon-close">
                <CloseButton type="button" onClick={() => handleRemove(index)}>
                  <DPIconCloseBlack />
                </CloseButton>
              </div>
              <SelectDropDown
                key={index}
                className="add-company__dropdown"
                id={name}
                name={name}
                type={'text'}
                options={associationOptions}
                value={formik.values.companyName.includes(name)}
                onChange={(e) => handleCompanyChange(e, index)}
                onBlur={formik.handleBlur}
              />
              {formik.touched.companyName && formik.errors.companyName ? (
                <ErrorMessage>{formik.errors.companyName}</ErrorMessage>
              ) : null}
            </>
          ))}
        </AddCompanyWrapper>
        <div className="add-address-button">
          <AddAddressButton type="button" onClick={(e) => handleAdd(e)}>
            Add Other Address
          </AddAddressButton>
        </div>
        <ModalLabel>Household</ModalLabel>
        <SelectDropDown
          className="add-household__dropdown"
          id="household"
          name="household"
          type={'text'}
          options={associationOptions}
          value={formik.values.household}
          onChange={(value) => formik.setFieldValue('household', value.value)}
          onBlur={formik.handleBlur}
        />
        {formik.touched.household && formik.errors.household ? (
          <ErrorMessage>{formik.errors.household}</ErrorMessage>
        ) : null}

        <div className="buttons-container">
          <CancelButton onClick={onClose} auth invert>
            Cancel
          </CancelButton>
          <SaveButton type="submit">Save</SaveButton>
        </div>
      </Card>
    </ModalWrapper>
  );
}

export default EditAssociationModalComponent;

const ModalWrapper = styled.form`
  padding: 2.4rem 2.4rem 3.9rem 2.4rem;
  .add-company__dropdown {
    width: 100%;
    margin-bottom: 1.6rem;
  }
  .add-household__dropdown {
    width: 100%;
    margin-top: 0.9rem;
    margin-bottom: 1.6rem;
  }
  .add-address-button {
    display: flex;
    justify-content: right;
    margin-top: 1.6rem;
  }
  .icon-close {
    display: flex;
    justify-content: right;
    margin-bottom: 1.3rem;
  }
  .buttons-container {
    display: flex;
    justify-content: right;
    margin-top: 4rem;
  }
`;

const ModalLabel = styled.label`
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

const AddCompanyWrapper = styled.div`
  width: 60.2rem;
  height: fit-content;
  margin-top: 0.9rem;
  padding: 2rem 1.6rem 1.6rem 1.6rem;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 0.5rem;
`;

const AddAddressButton = styled(Button)`
  width: 18.2rem;
  height: 5.1rem;
  background-color: ${COLORS.torquoise};
  border-radius: 0.340356rem;
  font-weight: ${FONTWEIGHTS.xbold};
  font-size: 1.47038rem;
  color: ${COLORS['grey-400']};
  margin-bottom: 2.4rem;
`;

const CloseButton = styled(Button)`
  width: 1.4rem;
  height: 1.4rem;
  background-color: transparent;
`;

const CancelButton = styled(Button)`
  width: 10.7rem;
  height: 5.1rem;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 0.340356rem;
  background-color: transparent;
  color: ${COLORS['gray-500']};
  margin-right: 1.6rem;
`;

const SaveButton = styled(Button)`
  width: 20.5rem;
  height: 5.1rem;
  background-color: ${COLORS.pink};
  color: ${COLORS.white};
  border-radius: 0.340356rem;
  font-weight: ${FONTWEIGHTS.xbold};
`;
