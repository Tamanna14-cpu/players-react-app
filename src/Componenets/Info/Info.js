import React from 'react';

const Info = (props) => {

    const info = props.info;
    const totalIncome = info.reduce((sum, player) => sum + player.salary, 0)

    return (
        <div>
           <h4>Selected players : {info.length}</h4> 
           {
               info.map ( player =>
                   <div className ="d-flex justify-content-between" key = {player.id}>
                       <div>{player.name}</div>
                       <div>{player.salary}</div>
                   </div>
               )
           }
           <hr/>

           <h5>Total Salary : {totalIncome}</h5>
        </div>
    );
};

export default Info;