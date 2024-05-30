import React from 'react';
import { render } from '@testing-library/react';
import { actionHelper, mockHelper, assertHelper } from './src/helpers';

const robotHelper = (Component, props = {}) => {
  const renderedComponent = render(<Component {...props} />);

  const helpers = {
    actionHelper,
    mockHelper,
    assertHelper
  };

  return {
    ...renderedComponent,
    ...helpers
  };
}

export default robotHelper;
