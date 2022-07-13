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
        A sticky button "sticks" to a point on your users screens (determined by the "scroll offset" value) after they scroll.
      </p>
      <p style={{ color: 'red' }}>
        Set the "scroll offset" to "30px" and try scrolling here to see the magic.
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
