import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './AllTeam.css'

const AllTeam = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
  
    return (
        <div className="teams">
            <div className="container">
                <div className="row pt-5">
                    {
                        teams.map(tem => <Team team={tem}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTeam;