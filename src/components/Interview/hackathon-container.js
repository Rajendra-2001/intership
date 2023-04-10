import "./hackathon-container.css";

const HackathonContainer = () => {
  return (
    <div className="hackathon-info">
      <div className="hackathon">Hackathon</div>
      <div className="prestige-interview-challenge">
        Prestige Interview Challenge
      </div>
      <div className="date1">
        <img
          className="calendar-today-icon1"
          alt=""
          src="/calendartoday1.svg"
        />
        <div className="feb-2023-">24 Feb 2023 - 24 March 2023</div>
      </div>
    </div>
  );
};

export default HackathonContainer;
