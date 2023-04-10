import { useEffect, useState } from 'react';
import React from 'react';


const submissionData = JSON.parse(localStorage.getItem('submissionData'));



const HackathonCard = ({ submissionData }) => {
  return (
    <div>
      <h2>{submissionData.title}</h2>
      <p>{submissionData.summary}</p>
      <p>{submissionData.description}</p>
      <img src={submissionData.coverImage} alt="Cover" />
      <p>{submissionData.hackathonName}</p>
      <p>{submissionData.startDate}</p>
      <p>{submissionData.endDate}</p>
      <a href={submissionData.githubLink}>GitHub</a>
      <a href={submissionData.otherLinks}>Other Links</a>
      <p>{submissionData.fileUpload}</p>
    </div>
  );
};

export default HackathonCard;
