import React from "react";

class Users extends React.Component {
  render() {
    const options = this.props.users.map(user => user.username);

    return (
      <div className="searchbox-container">
        <select className="select-button" onChange={this.handleChange}>
          <option className="option" value="">
            Select user
          </option>
          {options.map((user, i) => (
            <option className="option" key={i} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>
    );
  }

  handleChange = ({ target: { value } }) => {
    this.props.fetchArticlesbyUserId(value);
  };
}

export default Users;
