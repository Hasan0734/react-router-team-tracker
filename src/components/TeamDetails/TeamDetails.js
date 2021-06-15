import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamDetailBody from '../TeamDetailBody/TeamDetailBody';
import './TeamDetails.css'
const TeamDetails = () => {
    const [team, setTeam] = useState([]);
    const {teamId} = useParams()
  
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [teamId])
    
    return (
        <div>
        <div className="header-container">
           <div className="overlay-color d-flex align-items-center">
               <div className="container  d-flex justify-content-center ">
               <div className="col-7 col-sm-4  d-flex justify-content-center">
               <img className="w-50 img-fluid" src={team.strTeamBadge} alt="" />
               </div>
               </div>
           </div>
        </div>
        <TeamDetailBody team={team}></TeamDetailBody>
        </div>
    );
};

export default TeamDetails;