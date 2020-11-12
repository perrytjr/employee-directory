import React from "react";
import Moment from "react-moment";

function ResultList(props) {
  return (
    <table className="employeeTable" >
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.randomArrayShuffle} style={{cursor:'pointer'}}>Name (Click to Sort) 
          
        </th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody className="dataResults">
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>
                        <td> <img className =""src={result.picture.medium} alt="" /></td>
                        <td>{result.name.first + " " + result.name.last}</td>
                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ResultList;
