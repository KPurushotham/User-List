import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <User age="30">John</User>
        <User age="25">Smith</User>
        <User age="19">Writer</User>
        <User age="27">Syam</User>
        <User age="18">Billgate</User>
        <User age="23">Appollok</User>
        <User age="15">Satya</User>
        <User>Viswa</User>
        <User></User>
        <User age="20">Worldson</User>
      </div>
    );
  }
}

export default Users;
