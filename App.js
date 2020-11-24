import React, { Component } from "react";
import "./App.css";
export class App extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  };
  imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Profile</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
                    <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              <i className="material-icons">upload photo</i>
             </label>
          </div>
          <div className="label">
            <label className="profile-name" htmlFor="name">
              <i className="material-icons">User Name</i>
               </label>
          </div>
          <div className="label">
            <label className="profile-about" htmlFor="about">
              <i className="material-icons">About</i>
               </label>
               </div>
               <div className="label">
            <label className="profile-hobby" htmlFor="Hobby">
              <i className="material-icons">Hobby</i>
               </label>
               </div>
               <div className="label">
            <label className="profile-contact" htmlFor="contact">
              <i className="material-icons">Contact Number</i>
               </label>
               </div>
               <div className="label">
            <label className="profile-email" htmlFor="email">
              <i className="material-icons">Email</i>
               </label>
               </div>
               <div className="label">
            <label className="profile-website" htmlFor="website">
              <i className="material-icons">Website</i>
               </label>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
