import React, { useEffect, useState } from 'react';
import styles from './Hackathons.module.css';
import { Link } from 'react-router-dom';
import Header from '../Layout/Navbar/Header';
import './button.css';
import HackathonCard from '../Card/Card';




const Hackathons = () => {
  const [submissions, setSubmissions] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const submissionData = JSON.parse(localStorage.getItem('submissionData'))

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);

  };

  useEffect(() => {
    const sortedSubmissions = [...submissions];
    if (sortBy === 'newest') {
      sortedSubmissions.sort((a, b) =>
        a.hackathonStartDate > b.hackathonStartDate ? -1 : 1
      );
    } else if (sortBy === 'oldest') {
      sortedSubmissions.sort((a, b) =>
        a.hackathonStartDate > b.hackathonStartDate ? 1 : -1
      );
    }
    setSubmissions(sortedSubmissions);
  }, [submissions, sortBy]);


  return (
    <div className={styles.desktop01}>
      <Header />
      <div className={styles.hero}>
        <img className={styles.wavesIcon} alt="" src="/waves@2x.png" />
        <div className={styles.textButton}>
          <div className={styles.hackathonSubmissions}>
            Hackathon Submissions
          </div>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. `}</div>
          <Link to="submission_form/">
            <button className={styles.signUpButton}>
              <div className={styles.joinForFree}>Upload Submission</div>
            </button>
          </Link>
        </div>
        <img
          className={styles.untitledDesign1}
          alt=""
          src="/untitled-design-1@2x.png"
        />
      </div>
      <div className={styles.tabs}>
        <div className={styles.allSubmissionsWrapper}>
          <div className={styles.allSubmissions}>All Submissions</div>
        </div>
        <div className={styles.favouriteSubmissionsWrapper}>
          <div className={styles.allSubmissions}>Favourite Submissions</div>
        </div>
      </div>
      <div className={styles.utilities}>
        <div className={styles.search}>
          <img className={styles.arrowDropDownIcon} alt="" src="/search.svg" />
          <input className={styles.newest} type="text" placeholder="Search Hackathons" />
        </div>
        <div className={styles.filter}>

          <select value={sortBy} onChange={handleSortByChange}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

      </div>
      

      <Link to="Interviw_Submission/">
        <div className={styles.card}>
          <div className={styles.heading}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.interviewme}>InterviewMe</div>
          </div>
          <div className={styles.desc}>
            Built with GPT-3, React, and Flask. Practice interviews with AI and
            ace your next interview.
          </div>
          <div className={styles.stats}>
            <div className={styles.view}>
              <img
                className={styles.removeRedEyeIcon}
                alt=""
                src="/removeredeye.svg"
              />
              <i className={styles.uploaded6Days}>uploaded 6 days ago</i>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.card1}>
        <div className={styles.heading}>
          <img
            className={styles.imageIcon}
            alt=""
            src="/rectangle-6767@2x.png"
          />
          <div className={styles.interviewme}>Pizza Impsum</div>
        </div>
        <div className={styles.desc}>
          Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.
        </div>
        <div className={styles.stats}>
          <div className={styles.view}>
            <img
              className={styles.removeRedEyeIcon}
              alt=""
              src="/removeredeye.svg"
            />
            <i className={styles.uploaded6Days}>uploaded 12 days ago</i>
          </div>
        </div>
      </div>
      <div className={styles.card2}>
        <div className={styles.heading}>
          <img
            className={styles.imageIcon}
            alt=""
            src="/rectangle-6766@2x.png"
          />
          <div className={styles.interviewme}>Lorem Ipsum</div>
        </div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus
          egestas libero tristique nec.
        </div>
        <div className={styles.stats}>
          <div className={styles.view}>
            <img
              className={styles.removeRedEyeIcon}
              alt=""
              src="/removeredeye1.svg"
            />
            <i className={styles.uploaded6Days}>uploaded 8 days ago</i>
          </div>
        </div>
      </div>
      <div className={styles.card3}>
        <div className={styles.heading}>
          <img
            className={styles.imageIcon}
            alt=""
            src="/rectangle-67671@2x.png"
          />
          <div className={styles.interviewme}>Figma Ipsum</div>
        </div>
        <div className={styles.desc}>
          Figma ipsum component variant main layer. Blur hand object thumbnail
          subtract flows font bold image. Font.
        </div>
        <div className={styles.stats}>
          <div className={styles.view}>
            <img
              className={styles.removeRedEyeIcon}
              alt=""
              src="/removeredeye1.svg"
            />
            <i className={styles.uploaded6Days}>uploaded 16 days ago</i>
          </div>
        </div>
      </div>
      <div className={styles.card4}>
        <div className={styles.heading}>
          <img
            className={styles.imageIcon}
            alt=""
            src="/rectangle-67661@2x.png"
          />
          <div className={styles.interviewme}>Potter Ipsum</div>
        </div>
        <div className={styles.desc}>
          Potter ipsum wand elf parchment wingardium. Ghost glass hall tears
          hair must train. Snape alohamora bathrooms.
        </div>
        <div className={styles.stats}>
          <div className={styles.view}>
            <img
              className={styles.removeRedEyeIcon}
              alt=""
              src="/removeredeye.svg"
            />
            <i className={styles.uploaded6Days}>uploaded 9 days ago</i>
          </div>
        </div>
      </div>
      <div className={styles.card5}>
        <div className={styles.heading}>
          <img
            className={styles.imageIcon}
            alt=""
            src="/rectangle-67672@2x.png"
          />
          <div className={styles.interviewme}>Office Ipsum</div>
        </div>
        <div className={styles.desc}>Office ipsum you must be muted.</div>
        <div className={styles.stats}>
          <div className={styles.view}>
            <img
              className={styles.removeRedEyeIcon}
              alt=""
              src="/removeredeye.svg"
            />
            <i className={styles.uploaded6Days}>uploaded 28 days ago</i>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hackathons