import React from 'react'; 
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
      <div className="Profile-container">
          <div className=" Profile-parent">
            <div className="Profile-details">
                <div className="colz">
                    <div className='colz-icon'>
                        <a href="https://mobile.facebook.com/people/Ropio-Derrick/100009295641568?_rdc=1&_rdr">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/ropio_derrick/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://medium.com/@rodetuk">
                            <i className="fab fa-medium"></i>
                        </a>
                        <a href="https://ke.linkedin.com/in/derrick-ropio-a099a820a">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://mobile.twitter.com/derrickropio">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>

                </div>
                <div className="Profile-details-name">
                    <span className="primary-text">
                        {""}
                        Hello, I'm <span className="highlited-text">Derrick</span>
                    </span>
                </div>
                <div className="Profile-details-role">
                    <span className="primary-text">
                        {""}
                        <h1>
                            {""}
                            <Typical 
                                loop={Infinity}
                                steps={[
                                    "MERN Stack dev",
                                    3000,
                                    "Web App dev",
                                    3000,
                                    "System Dev",
                                    3000,
                                    "Full Stack dev",
                                    3000, 
                                ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                            {""}
                            Woow! Frontent with awesome Backend
                        </span>
                        
                    </span>
                </div>
                <div className="Profile-Options">
                    <button className='btn'>
                       {""}
                       Hire Me         
                    </button>
                    <a className='btn2' href="../../assets/img/pexels-shvets-production-7191981.jpg" download="pexels-shvets-production-7191981.jpg">
                        Get Resume
                    </a>


                </div>
            </div>
            <div className='profile-picture'>
                <div className='picture-background'> 

                </div>
            </div>
          </div>
      </div>
  )
}
