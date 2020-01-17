import React from 'react';
import CandidateIntro from '../CandidateIntro/CandidateIntro';

function CandidatesList({ candidates }) {

	return (
			<div>
					{ candidates.map(candidate =>
						<CandidateIntro details={candidate} key={Math.random()+candidate.id}/>
					)}
			</div>
	);
}

export default CandidatesList;