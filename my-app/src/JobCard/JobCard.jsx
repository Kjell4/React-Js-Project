import React from "react";
import "./JobCard.css";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2 className="job-title">{job.jobTitle}</h2>
      <p className="company-name">{job.companyName}</p>
      <p className="job-type">{job.jobType}</p>
      <p className="job-level">Level: {job.jobLevel}</p>
      <p className="job-geo">Location: {job.jobGeo}</p>
      <img className="company-logo" src={job.companyLogo}/>
      <p><a href={job.url} className="job-link"> View Details </a></p>
    </div>
  );
}

export default JobCard;
