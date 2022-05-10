import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Switch from 'components/atoms/Switch/Switch';
import { useFormik } from 'formik';
import React from 'react';
import { CardItems, RevenueFooter, RevenueForm, RevenueLabel, SetInputField } from './styles';

function SetRevenueModalContent({ onClose, setValue }) {
  const formik = useFormik({
    initialValues: {
      monthly: '',
      quarterly: '',
      yearly: ''
    },
    onSubmit: (values) => {
      setValue(values);
    }
  });

  return (
    <Card className="revenue-card">
      <RevenueForm
        onSubmit={() => {
          setValue(formik.values);
        }}>
        <CardItems>
          <div className="revenue-card__left">
            <RevenueLabel>Monthly Goals</RevenueLabel>
            <SetInputField
              id="monthly"
              placeholder="$"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.monthly}
            />
          </div>
          <div className="revenue-card__right">
            <p className="revenue-card__option">Show in Overview</p>
            <Switch />
          </div>
        </CardItems>
        <CardItems>
          <div className="revenue-card__left">
            <RevenueLabel>Quarterly Goals</RevenueLabel>
            <SetInputField
              id="quarterly"
              placeholder="$"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quarterly}
            />
          </div>
          <div className="revenue-card__right">
            <p className="revenue-card__option">Show in Overview</p>
            <Switch />
          </div>
        </CardItems>
        <CardItems>
          <div className="revenue-card__left">
            <RevenueLabel>Yearly Goals</RevenueLabel>
            <SetInputField
              id="yearly"
              placeholder="$"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.yearly}
            />
          </div>
          <div className="revenue-card__right">
            <p className="revenue-card__option">Show in Overview</p>
            <Switch />
          </div>
        </CardItems>
        <RevenueFooter>
          <div className="footer-btn">
            <Button onClick={onClose} className="set-revenue-btn" auth invert>
              Cancel
            </Button>
          </div>
          <div className="footer-btn">
            <Button type="submit" className="set-revenue-btn" auth>
              Save
            </Button>
          </div>
        </RevenueFooter>
      </RevenueForm>
    </Card>
  );
}

export default SetRevenueModalContent;
