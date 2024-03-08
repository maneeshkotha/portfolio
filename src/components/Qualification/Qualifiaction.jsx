import React, { useState } from "react";
import "./Qualification.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Education and Work Experience</h2>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification__button button--flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <FaGraduationCap className="qualification__icon1" />
            Education
          </div>

          <div className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification__button button--flex"
            } onClick={()=>toggleTab(2)}>
            <FaBriefcase className="qualification__icon2" />
            Experience
          </div>
        </div>
      </div>
      <div className="qualification__sections">
        <div className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification__content"
            }>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Information Technology and Management</h3>
              <span className="qualification__subtitle">
                Illinois Institute of Technology
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i>Spring 2023 - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Computer Science</h3>
              <span className="qualification__subtitle">
                Keshav Memorial Institute of Technology
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2018 - 2021
              </div>
            </div>
          </div>

        

          <div className="qualification__data">
          
         
         
          </div>
        </div>
        <div className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification__content"
            }>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Teaching Assistantship - Open Source Intelligent Device Application</h3>
              <span className="qualification__subtitle">
                Information Technology and Management
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> Jan 2024 - Present
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title"> Software Engineer</h3>
              <span className="qualification__subtitle">
                IVY COMPTECH
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> October 2021 - DEC2022
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Software Intern</h3>
              <span className="qualification__subtitle">
                IVY COMPTECH 
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> Jan 2021 - October 2021
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;