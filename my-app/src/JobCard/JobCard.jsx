import React from "react";
import "./JobCard.css";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2 className="job-title">{job.jobTitle}</h2>
      <p className="company-name">{job.companyName}</p>
      <p className="job-type">{job.jobType}</p>
      <img className="company-logo" src={job.companyLogo}/>
      <a href={job.url} className="job-link"> View Details </a>
    </div>
  );
}

export default JobCard;
