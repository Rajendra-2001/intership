import Header from "../Layout/Navbar/Header";
import NewHackathonSubmissionContaine from "./NewHackathonSubmissionContaine";
import DatePickerContainer from "./DatePickerContainer";
import "./Desktop07.css";
import styles from '../Hackathons/Hackathons.module.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import React from "react";
import SubmissionForm from "./submission";
const Desktop07 = () => {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    description: '',
    coverImage: '',
    hackathonName: '',
    startDate: '',
    endDate: '',
    githubLink: '',
    otherLinks: '',
    fileUpload: ''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Redirect to home page
    window.location.href = '/';
  };
  return (
    <div className="desktop-07">
      <Header />
      <div className="content">
        <div className="new-hackathon-submission">New Hackathon Submission</div>
        <NewHackathonSubmissionContaine
          submissionTitle="Title"
          submissionDescription="Title of your submission"
        />
        <div className="item">
          <div className="summary">Summary</div>
          <textarea
            className="item-child"
            placeholder="A short summary of your submission (this will be visible with your submission)"
          />
        </div>
        <div className="item">
          <div className="summary">Description</div>
          <textarea
            className="item-item"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
          />
          <div className="characters">0 / 3,000 characters</div>
        </div>
        <div className="item">
          <div className="summary">Cover Image</div>
          <div className="minimum-resolution-360px">
            Minimum resolution: 360px X 360px
          </div>
          <input className="upload" type="file" required />
        </div>
        <div className="item">
          <div className="summary">Hackathon Name</div>
          <input
            className="item-inner"
            type="text"
            placeholder="Enter the name of the hackathon"
          />
        </div>
        <div className="item4">
          <DatePickerContainer
            hackathonStartDate="Hackathon Start Date"
            hackathonEndDate="Select start date"
          />
          <DatePickerContainer
            hackathonStartDate="Hackathon End Date"
            hackathonEndDate="Select end date"
          />
        </div>
        <div className="item">
          <div className="summary">GitHub Repository</div>
          <input
            className="item-inner"
            type="text"
            placeholder="Enter your submission’s public GitHub repository link"
          />
        </div>
        <NewHackathonSubmissionContaine
          submissionTitle="Other Links"
          submissionDescription="You can upload a video demo or URL of you demo app here."
        />
        <div className="item6">
          <div className="file-upload">File Upload</div>
          <div className="recommended-resolution-abcd">
            Recommended resolution: ABCD x WXYZ
          </div>
          <div className="summary">File size should not exceed 100MB</div>
          <div className="upload">
            <img className="cloud-upload-icon" alt="" src="/cloudupload.svg" />
          </div>
        </div>
        <div className="section-4">
          <div className="data-description-container">
            <span>{`Data Description `}</span>
            <span className="span">*</span>
          </div>
          <div className="group-parent">
            <div className="rectangle-parent">
              <div className="group-child" />
              <img
                className="screenshot-2022-03-02-at-1153"
                alt=""
                src="/screenshot-20220302-at-1153-1@2x.png"
              />
            </div>
            <div className="group-item" />
            <img
              className="bitriangle-fill-icon"
              alt=""
              src="/bitrianglefill.svg"
            />
          </div>
        </div>
        <div className="section-10">
          <div className="title">
            <div className="data-description-container">Evaluation Metric</div>
            <img
              className="information-outline-icon"
              alt=""
              src="/informationoutline.svg"
            />
          </div>
          <div className="title-parent">
            <div className="title1">
              <div className="data-description-container">Evaluator</div>
              <img
                className="information-outline-icon1"
                alt=""
                src="/informationoutline1.svg"
              />
            </div>
            <div className="field">
              <div className="summary">--</div>
              <img
                className="information-outline-icon"
                alt=""
                src="/menudown.svg"
              />
            </div>
          </div>
          <div className="field1">
            <div className="title1">
              <div className="data-description-container">Column</div>
              <img
                className="information-outline-icon1"
                alt=""
                src="/informationoutline1.svg"
              />
            </div>
            <div className="field-child" />
          </div>
        </div>

        <div className="line-parent">

          <div className="frame-child" />
          <form onSubmit={handleSubmit}>
          form input fields
          
            <button className="signUpButton">
              <div className={styles.joinForFree}>Upload Submission</div>
            </button>
          
        </form>

        </div>

      </div>
    </div>
  );
};

export default Desktop07;
{/* <Link to="/" onClick={handleSubmit}></Link> */}