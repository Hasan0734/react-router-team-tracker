import React, { useEffect, useState } from 'react';
import TeamDetailBody from '../TeamDetailBody/TeamDetailBody';

const TeamDetails = () => {
    const [team, setTeam] = useState([]);

    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
    }, [])
    const teamDetail = team[0]
    
    return (
        <div>
        <div className="header-container">
           <div className="overlay-color d-flex align-items-center">
               <div className="container">
               <h1 className="text-light text-center">Team Tracker</h1>
               </div>
           </div>
        </div>
        <TeamDetailBody team={teamDetail}></TeamDetailBody>
        </div>
    );
};

export default TeamDetails;