# reactjs-jobboard
A web application which lists various jobs using the apijobs.dev . Built using React, Node.js, Express



# Jobboard

A job board is a platform to post job vacancies and search for jobs. It allows employers to find employees faster by searching for potential global candidates.
A typical job board platform supports searching and filtering open jobs and has a form for applying for positions. Examples of standard job boards are Strapi, Upwork, Indeed, or Fiverr.

Strapi is an open-source headless CMS based on Node.js, where you can host and manage content. Strapi supports Jamstack technology, and it is easy to serve content to the front-end across different platforms via restful API calls. Strapi has made it easy for developers to manage their application content without writing complex code.

React is also an open-source JavaScript front-end framework for creating interactive user interfaces. React allows developers to create reusable components that, when combined, form the entire application user interface.

In this tutorial, you will learn about Strapi and walk through a step-by-step guide on creating a complete job board website with React and Strapi.


# Goal
Let's have a look at what we'll accomplish at the end of this tutorial:

Connect apijobs api
Create a user interface where employees can search and filter open jobs and apply for them (vacancy listing).


# Prerequisite:
To complete this tutorial, you'll need the following software installed:

Node.js: v14 or v16
Npm or Yarn
You should also be familiar with React.js.


# Create a apijobs account ( free and takes 5 min max)
Set up Strapi on our local machine using Strapi CLI (Command Line Interface). In your terminal, navigate to the folder where you wish to install Strapi. Run the command below.

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://bank.cellar-c2.services.clever-cloud.com/file/project/479aefcf7cbbd6fcce4a9ef1376c9d51/rapidapi.png.png)


and subscribe at the free plan

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://bank.cellar-c2.services.clever-cloud.com/file/project/89ae32cfb85966e9a593e93c2a522a7b/Screenshot%202024-03-31%20at%2019.14.33.png.png)

and then you should get your X-RapidAPI-Key : 'X-RapidAPI-Key': 'my-api-key',



# Designing the application's front-end
Now that we have set up the back-end, we will start building the application interface and its functionalities next.

React Installation
Open a new terminal and install react with the command below.

    npx create-react-app job-board
    cd job-board
    npm start


# Building the Interface
This part will have the following features: a search bar for searching for a job and the list of all jobs
Navigate to src/pages, open app.js in any code editor, paste the following code, and then save it.

code
```
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


```


Next, let's add style to the application. Inside the src folder, create a style.css file and add the following:

Style


```
.app {
  font-family: 'Arial', sans-serif;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.search-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex-grow: 1;
  margin-right: 10px;
}

.search-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #0056b3;
}

.job-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}

.job-title {
  font-size: 20px;
  color: #000;
  margin-bottom: 5px;
}

.job-description {
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}

.job-organization,
.job-location,
.job-date {
  font-size: 14px;
  color: #666;
}
```


![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://bank.cellar-c2.services.clever-cloud.com/file/project/5f1fdacc4c5d29cf5034321536f3cc7b/Screenshot%202024-03-31%20at%2019.59.18.png.png)

# Conclusion
Now we have successfully built a complete job board website from scratch.
This tutorial explains what apijobs is, how to get started and how to use it with React to build a complete job board application.

