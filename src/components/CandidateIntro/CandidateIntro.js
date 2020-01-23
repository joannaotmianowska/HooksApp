import React from 'react';
import styles from './CandidateIntro.module.scss';

function CandidateIntro({ details }) {

    const { name, location, picture } = details;

    return (
        <div className={styles.intro}>
            <h4>
                <span>{ name.first }</span>
                <span>{ name.last }</span>
            </h4>
            <div>
                <span>{ location.country }</span>,
                <span>{ location.city } </span>
            </div>
            <div><img alt={name.first} src={picture.thumbnail }/></div>
        </div>
    );
}

export default CandidateIntro;