import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RedirectAdmin extends Component {
  render() {
    return (
      <a href="/adminHome" className="redirect_button">
        <div className="admin_item">
          <h1>Click Anywhere To Redirect</h1>
        </div>
      </a>
    );
  }
}
