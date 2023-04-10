import "./interview_container.css";

const InterviewMeContainer = () => {
  return (
    <div className="hero">
      <div className="hero1">
        <div className="heading">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <div className="interviewme">InterviewMe</div>
          <button className="buttons1">
            <div className="login-button3">
              <img className="edit-icon" alt="" src="/edit.svg" />
              <div className="edit">Edit</div>
            </div>
            <div className="login-button3">
              <img className="edit-icon" alt="" src="/delete.svg" />
              <div className="edit">Delete</div>
            </div>
            <div className="login-button5">
              <img className="edit-icon" alt="" src="/download.svg" />
              <div className="download-file1">Download file</div>
            </div>
          </button>
        </div>
        <div className="built-with-gpt-3">
          Built with GPT-3, React, and Flask. Practice interviews with AI and
          ace your next interview.
        </div>
        <div className="star-outline-parent">
          <img className="edit-icon" alt="" src="/staroutline.svg" />
          <div className="frame-child" />
          <div className="date">
            <img
              className="calendar-today-icon"
              alt=""
              src="/calendartoday.svg"
            />
            <div className="march">12 March</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewMeContainer;
