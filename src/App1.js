import React, {useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'; 
const url = 'http://course-api.netlify.app/api/react-tabs-project';

function App1() {
    const [loading, setLoading] = useState(true);
    const [jobs,setJobs] = useState([]);
    const [value,setValue] = useState(0);

    const fatchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json()
    }
    return (
        <div>
            <h1>Tabs Project Setup</h1>
        </div>
    )
}

export default App1
