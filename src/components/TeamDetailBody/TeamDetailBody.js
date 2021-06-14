import React from 'react';
import './TeamDetailBody.css'
const TeamDetailBody = (props) => {
    console.log(props.team)
    const{strTeam} = props.team
    return (
        <div className="teams">
           <div className="container">
               <div className="text-light team-description">
                   <h1>{strTeam}</h1>
               </div>
           
           </div>
        </div>
    );
};

export default TeamDetailBody;