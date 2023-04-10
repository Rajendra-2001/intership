import "./NewHackathonSubmissionContaine.css";

const NewHackathonSubmissionContaine = ({
  submissionTitle,
  submissionDescription,
}) => {
  return (
    <div className="item7">
      <div className="title-of-your">{submissionTitle}</div>
      <div className="title-of-your-submission-wrapper">
      <input
            className="item7"
            type="text"
            placeholder={submissionTitle}
          />
      </div>
    </div>
  );
};

export default NewHackathonSubmissionContaine;
{/* <input className="title-of-your">{submissionDescription}</input> */}