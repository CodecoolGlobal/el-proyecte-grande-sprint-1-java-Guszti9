import './userPage.css';
import React from "react";

function GetUserDetails(props) {

    return (
        <div id={"user-details"}>
            <table className="blueTable">
                <thead>
                    <th>
                        {props.id.firstName} {props.id.lastName}
                    </th>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {props.id.linkedIn}
                    </td>
                </tr>
                <tr>
                    <td>
                        e-mail: {props.id.email}
                    </td>
                </tr>
                <tr>
                    <td>
                        facebook: {props.id.faceBook}
                    </td>
                </tr>
                <tr>
                    <td>
                        phone: {props.id.phoneNumber}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}

export default GetUserDetails;