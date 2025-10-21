import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import "./JobList.css";

function JobList({ searchQuery }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://jobicy.com/api/v2/remote-jobs?count=20&tag=react");
        const data = await res.json();
        setJobs(data.jobs);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="job-list">
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      {!loading && filteredJobs.length === 0 && (
        <p className="status">No jobs found</p>
      )}
    </div>
  );
}

export default JobList;

