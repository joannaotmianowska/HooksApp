import React, { useState, useEffect } from 'react';
import CandidatesList from './components/CandidatesList/CandidatesList';

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
			<div>
					<CandidatesList candidates={candidates}/>
			</div>
	);
}

export default App;
