import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default class User extends React.Component {
  state = {
    isVisible: false,
  };
  handleClick = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    }); 
  };
  OndeleteUser = () => {
    const { id, deleteUser } = this.props;
    deleteUser(id);
    console.log(id);
  };

  render() {
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="user col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4
              className="d-inline"
              onClick={this.handleClick}
            >
              {name}{" "}
            </h4>
            <FontAwesomeIcon
              icon={faTrash}
              className="icon"
              onClick={this.OndeleteUser}
            />
          </div>
          {isVisible ? (
            <div className="card-body">
              <p className="card-text"> Department:{department}</p>
              <p className="card-text"> Salary:{salary}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
User.defaultProps = {
  name: "Ad yoxdur",
  department: " yoxdur",
  salary: "yoxdur",
};
User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
