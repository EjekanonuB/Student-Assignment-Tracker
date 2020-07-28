import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Assignment extends Component {
  render() {
    return (
      <div>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <td>{this.props.assignment.username}</td>
              <td>{this.props.assignment.assignmentReport}</td>
              <td>{this.props.assignment.timeSubmitted}</td>
            </tr>
          </thead>
        </table>
        <td>
          <Link
            to='/assignments'
            className='btn btn-info'
            onClick={() => {
              this.props.deleteAssignment(this.props.assignment._id);
            }}
          >
            Delete
          </Link>
        </td>
      </div>
    );
  }
}
export default Assignment;
