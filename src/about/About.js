import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import AboutMenu from "./AboutMenu.js";

export default class About extends Component {
  render() {
    return (
      <>
         About
        <Avatar page="about" />
        <AboutMenu />
      </>
    );
  }
}