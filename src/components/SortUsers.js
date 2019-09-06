import React from 'react';
import store from "../store";

function SortUsers(props) {
  return (
    <div>
      Sort Users On:
        <select onChange={
        (e) => {

        }
      }>
        <option value="first_name">First Name</option>
        <option value="last_name">Last Name</option>
      </select>
    </div>
  );
}
export default SortUsers;