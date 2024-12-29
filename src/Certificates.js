import { useState, useEffect } from 'react';
import './Certificates.css'
import certificateImg from './Images/CertificateProof.PNG';
const certificate = () => {

    const frontEndLink = "https://www.coursera.org/professional-certificates/meta-front-end-developer?utm_medium=sem&utm_source=bg&utm_campaign=B2C_NAMER__coursera_FTCOF_courseraplus_country-US_BrandExact&campaignid=662918304&adgroupid=1245748005518131&device=c&keyword=coursera&matchtype=e&network=o&devicemodel=&adposition=&creativeid=&assetgroupid=%7Bassetgroupid%7D&targetid=kwd-77859617364943%3Aloc-190&extensionid=%7Bextensionid%7D&hide_mobile_promo=&msclkid=54981f698c071b51f9bc780ec7002cca&utm_term=coursera&utm_content=Coursera%20Plus%20%28Exact%29";
    const capstoneLink = " https://shakeel159.github.io/lemon-app/";
    const CertificateLink = "https://www.coursera.org/account/accomplishments/professional-cert/ISN9FJUCUE70";

    const recipeApp = "https://github.com/shakeel159/Recipe-App";

    return(
        <div className="CertificateBox">
            <div className='certificate-tab'>            
                <h1>Certificate</h1>
                <h2>Meta Front-End Developer Professional Certificate</h2>
                <p>Taught by Meta Staff</p>
            </div>
            <br></br>
            <div className='controlled-inline'>
                <div className='img-Box'>
                    <img className='linkImg' src={certificateImg} alt="Meta-certificate-Img"></img>
                </div>
                <br></br>
                <div className='certificate_text'>
                    <p className='abt_text'>
                    Meta Front End Developer Course where you will <span>
                    </span>Receive professional-level training from Meta, <span>
                    </span>Demonstrate your proficiency in portfolio-ready projects, <span>
                    </span> and earn an employer-recognized certificate from Meta
                    </p>
                    <br></br>
                    <p className='abt_buttons'>
                    <span>Below you can click the buttons provided to go to designated pages</span>
                    <span>that will showcase where to take Meta Front End Course, Where you can view my Capstone Project, and a button to the Certificate</span>
                    </p>
                    <div className='buttons-container'>
                        <div className='courseLink'>
                            <button className='button_Certificate'>
                                <a href={frontEndLink} target="_blank" rel="noopener noreferrer">
                                    Meta Front-End Course
                                </a>
                            </button>
                        </div>
                        <br></br>
                        <div className='capstoneLink'>
                            <button className='button_Certificate'>
                                <a href={capstoneLink} target="_blank" rel="noopener noreferrer">
                                    Capstone Project
                                </a>
                            </button>
                        </div>
                        <br></br>
                        <div className='capstoneLink'>
                            <button className='button_Certificate'>
                                <a href={CertificateLink} target="_blank" rel="noopener noreferrer">
                                    Certificate
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
};


export default certificate;