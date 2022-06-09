import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic}
              // Image goes here
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Alex Kim</div>
            <div className="brief_description">
              Hello! I am a rising junior at UMass Amherst as a Computer Scinece + Data Science student! My academic career interest lie within machine learning, OS, full-stack development, and back-end development. Outside of school, I am either at the gym, playing soccer, or watching random youtube videos! If anyone has any good food recs, let me know as I am always looking to try new foods!
            </div>
          </div>
        </div>
      </div>
    )
  }
}