import { useState } from 'react';

const SubmissionForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // store submission data in local storage
    localStorage.setItem('submissionData', JSON.stringify(formData));
    // reset form data
    setFormData({
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
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea id="summary" name="summary" value={formData.summary} onChange={handleInputChange}></textarea>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>
      </div>
      <div>
        <label htmlFor="coverImage">Cover Image URL</label>
        <input type="text" id="coverImage" name="coverImage" value={formData.coverImage} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="hackathonName">Hackathon Name</label>
        <input type="text" id="hackathonName" name="hackathonName" value={formData.hackathonName} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="githubLink">GitHub Link</label>
        <input type="text" id="githubLink" name="githubLink" value={formData.githubLink} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="otherLinks">Other Links</label>
        <textarea id="otherLinks" name="otherLinks" value={formData.otherLinks} onChange={handleInputChange}></textarea>
      </div>
      <div>
        <label htmlFor="fileUpload">File Upload</label>
        <input type="file" id="fileUpload" name="fileUpload" onChange={handleInputChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;
