import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>this is home page</h1>
            <Link to="/about">go to about page</Link>
        </div>
    )
}

export default Home
