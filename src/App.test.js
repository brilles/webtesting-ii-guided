import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, debug, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<App/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders successfully', () => {
    render(<App />);
  });
  it('renders Hello World', () => {
    const { getByText, queryByText, debug } = render(<App />);

    // debug();

    // getByText(/hello world/i);
    expect(queryByText(/hello world/i)).not.toBeNull();
  });

  it('greets the team', () => {
    const { getByText } = render(<App />);
    const button = getByText(/greet/i);
    fireEvent.click(button);
    getByText(/Hello XVII/i);
  });

  it('says goodbye to the team', () => {
    const { getByText } = render(<App />);
    const button = getByText(/bye/i);
    fireEvent.click(button);
    getByText(/Bye XVII/i);
  });
});
