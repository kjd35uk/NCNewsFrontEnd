import React from "react";

class Users extends React.Component {

  render() {
    const options = this.props.users.map(user => user.username);

    return (
      <div className="searchbox-container">
      <select className = 'select-button' onChange={this.handleChange}>
        <option font='Amatic SC'value="">Select user</option>
        {options.map((user, i) => (
          <option key={i} font='Amatic SC' value={user}>
            {user}
          </option>
        ))}
      </select>
    </div>
    );
  }
  handleChange = ({ target: { value } }) => {
    this.props.getArticlesByUser(value)
  };
}

export default Users;
