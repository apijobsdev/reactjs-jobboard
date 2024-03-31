import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('ReactJs');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchJobs();
  }, []);

  async function searchJobs() {
    setLoading(true);
    setResults([]);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'your-api-key', // Remember to keep your API key secure
        'X-RapidAPI-Host': 'apijob-job-searching-api.p.rapidapi.com',
      },
      body: JSON.stringify({ q: search }),
    };

    const url = 'https://apijob-job-searching-api.p.rapidapi.com/v1/job/search';
    const response = await fetch(url, options);
    const data = await response.json();
    setResults(data.hits);
    setLoading(false);
  }

  return (
    <div className="app">
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="search-button" onClick={searchJobs}>Search</button>
      </div>
      <div className="results-container">
        {loading && <div className="loading">Loading...</div>}
        {results.map((job, index) => (
          <div className="job-card" key={index}>
            <a href={job.url} target="_blank" rel="noopener noreferrer" className="job-link">
              <h2 className="job-title">{job.title}</h2>
            </a>
            <p className="job-description">{job.description}</p>
            <p className="job-organization">{job.hiringOrganization}</p>
            <div className="job-location">{job.locationName}</div>
            <div className="job-date">{job.datePosted}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
