import React from 'react';
// import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from './App';
import CandidatesList from './components/CandidatesList/CandidatesList';
import CandidatesDetails from './components/CandidateDetails/CandidateDetails';
import NotFound from './components/NotFound/NotFound';

const createWrapper = url => (
  mount(
    <MemoryRouter initialEntries={[url]}>
      <App />
  </MemoryRouter>
  )
);

describe('App component', () => {
  test('renders candidates list as home page', () => {
    const wrapper = createWrapper('/');

    expect(wrapper.find(CandidatesList)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  test('renders candidate details when given proper url', () => {
    const wrapper = createWrapper('/details/1234');

    expect(wrapper.find(CandidatesDetails)).toHaveLength(1);
  });

  test('renders "not found" page when url is wrong', () => {
    const wrapper = createWrapper('/random');

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});

// TO DO - mock server & check if data is being fetched as passed down to list comp

// useEffect(() => {
//   getCandidates(perPage, page)
//     .then(response => setCandidates(response.entity.results))
// }, []);
