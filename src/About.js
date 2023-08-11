import React from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <h1>About Us</h1>
            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
        </>
    );
}

export { About };