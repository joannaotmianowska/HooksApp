import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CandidatesList from './components/CandidatesList/CandidatesList';
import CandidateDetails from './components/CandidateDetails/CandidateDetails';

function App() {
  const [ candidates, setCandidates ] = useState([]);
  const [ page, setPage ] = useState([]);
  // const [ hasMore, setHasMore ] = useState([]);
  const perPage = 20;

	useEffect(() => {
		fetch(`https://randomuser.me/api/?format=json&results=${perPage}&page=${page}`)
			.then(response => response.json())
			.then(json => setCandidates(json.results))
	}, []);

	return (
			<Router>
					<Route exact path='/' component={() => <CandidatesList candidates={candidates}/>}/>
          <Route exact path='/details/:id' component={ CandidateDetails } />
			</Router>
	);
}

export default App;
