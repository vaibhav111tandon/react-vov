import React from 'react';
import Vov from './vov';

export default {
  component: Vov,
};

export const Primary = () => (
<div>
    <Vov animation="fade-in" duration="2s">
      <h1>Hello!</h1>
    </Vov>
</div>
)