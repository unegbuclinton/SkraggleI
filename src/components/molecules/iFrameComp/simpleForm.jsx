import { useElement } from 'context';
import { EmptySimpleForm } from 'lib/BasicElement/SimpleForm';
import React from 'react';

function SimpleFormIframeComponent() {
  const { elementConfig } = useElement();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#ffff  ',
        borderRadius: '1rem',
        alignItems: 'center',
        height: '86%'
      }}>
      {/* <form style={elementConfig.style ?? {}}>
        <button style={elementConfig.style ?? {}}>{elementConfig.children}</button>
        <button style={elementConfig.style ?? {}}>{elementConfig.children}</button>
      </form> */}
      <EmptySimpleForm {...elementConfig} />
    </div>
  );
}
export default SimpleFormIframeComponent;
