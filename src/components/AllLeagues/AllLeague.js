import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './AllLeagues.css'
const AllLeagues = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(()=> {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])
    const sliceLeagues = leagues.slice(0, 15)
    return (
        <div className="league-container">
            <div className="container">
            <div className="row">
                {
                    sliceLeagues.map(leg => <League league={leg}></League>)
                }
            </div>
            </div>
        </div>
    );
};

export default AllLeagues;