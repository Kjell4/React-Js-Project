import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import "./JobList.css";

function JobList({ searchQuery }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {

        const res = await fetch("https://jobicy.com/api/v2/remote-jobs?count=20&tag=react");
        const data = await res.json();
        setJobs(data.jobs);

    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="job-list">

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

    </div>
  );
}

export default JobList;
