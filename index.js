import React from 'react';
import { render } from '@testing-library/react';
import { actionHelper, fetchMockHelper, assertHelper } from './src/helpers';

const renderComponentWithHelpers = (Component, props = {}) => {
  const renderedComponent = render(<Component {...props} />);

  const helpers = {
    actionHelper,
    fetchMockHelper,
    assertHelper
  };

  return {
    ...renderedComponent,
    ...helpers
  };
}

export default renderComponentWithHelpers;
