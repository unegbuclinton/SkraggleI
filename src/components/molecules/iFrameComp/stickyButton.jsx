import { useElement } from 'context';
import { EmptyStickyButton } from 'lib/BasicElement';
import React from 'react';

function DraftStickyButton() {
  // vars
  const { elementConfig } = useElement();

  return (
    <div
      style={{
        background: '#ffff  ',
        borderRadius: '1rem',
        height: '100%',
        padding: '1rem .3rem',
        overflow: 'auto'
      }}>
      <p style={{ color: 'green' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor ut earum repellat
        exercitationem. Sunt omnis suscipit totam? Laborum modi tempora perspiciatis iusto
        necessitatibus aliquam id dolor iure quis fuga.
      </p>
      <p style={{ color: 'red' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor ut earum repellat
        exercitationem. Sunt omnis suscipit totam? Laborum modi tempora perspiciatis iusto
        necessitatibus aliquam id dolor iure quis fuga.
      </p>
      <EmptyStickyButton {...elementConfig} />

      <p style={{ color: 'red' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor ut earum repellat
        exercitationem. Sunt omnis suscipit totam? Laborum modi tempora perspiciatis iusto
        necessitatibus aliquam id dolor iure quis fuga.
      </p>
      <p style={{ color: 'blue' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor ut earum repellat
        exercitationem. Sunt omnis suscipit totam? Laborum modi tempora perspiciatis iusto
        necessitatibus aliquam id dolor iure quis fuga.
      </p>
      <p style={{ color: 'purple' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor ut earum repellat
        exercitationem. Sunt omnis suscipit totam? Laborum modi tempora perspiciatis iusto
        necessitatibus aliquam id dolor iure quis fuga.
      </p>
      <p style={{ color: 'orange' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor ut earum repellat
        exercitationem. Sunt omnis suscipit totam? Laborum modi tempora perspiciatis iusto
        necessitatibus aliquam id dolor iure quis fuga.
      </p>
      <p style={{ color: 'yellow' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor ut earum repellat
        exercitationem. Sunt omnis suscipit totam? Laborum modi tempora perspiciatis iusto
        necessitatibus aliquam id dolor iure quis fuga.
      </p>
      <p style={{ color: 'black' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor ut earum repellat
        exercitationem. Sunt omnis suscipit totam? Laborum modi tempora perspiciatis iusto
        necessitatibus aliquam id dolor iure quis fuga.
      </p>
      <p style={{ color: 'red' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor ut earum repellat
        exercitationem. Sunt omnis suscipit totam? Laborum modi tempora perspiciatis iusto
        necessitatibus aliquam id dolor iure quis fuga.
      </p>
    </div>
  );
}

export default DraftStickyButton;
