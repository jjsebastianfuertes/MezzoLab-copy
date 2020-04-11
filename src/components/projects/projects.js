import React from 'react';
import Card from './card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './projects-styles.css';

const Projects = ()=>(
    <div className="projects">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <a className="projects__view-more" href="/#">View all <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
        
    </div>
);

export default Projects;