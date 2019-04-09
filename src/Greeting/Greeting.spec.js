import React from 'react';
import Greeting from './Greeting.js';
import { render } from 'react-testing-library';

describe('<Greeting />', () => {
  it('renders No message if message provided', () => {
    const { getByText } = render(<Greeting />);

    getByText(/no message/i);
  });
  it('renders the message provided', () => {
    const { getByText } = render(<Greeting msg="Hello Team" />);

    getByText(/hello team/i);
  });
});
