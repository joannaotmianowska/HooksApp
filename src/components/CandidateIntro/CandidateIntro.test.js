import React from 'react';
import { render } from '@testing-library/react';
import CandidateIntro from './CandidateIntro';

describe('CandidateIntro component', () => {
    const mockIntro = {
        name: {
            first: "abc",
            last: "cde"
        },
        location: {
            country: "efg",
            city: "ijk"
        },
        picture: {
            thumbnail: "https://examplarypic.co"
        }
    }

    test('renders candidate details', () => {
        const { getByText, getByAltText } = render(<CandidateIntro details={mockIntro}/>);

        expect(getByText(mockIntro.name.first)).toBeInTheDocument();
        expect(getByText(mockIntro.name.last)).toBeInTheDocument();
        expect(getByText(mockIntro.location.country)).toBeInTheDocument();
        expect(getByText(mockIntro.location.city)).toBeInTheDocument();
        expect(getByAltText(mockIntro.name.first)).toBeInTheDocument();
    });
});
