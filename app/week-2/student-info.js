import React from 'react';

const StudentInfo = () => {
  const yourName = 'Muhammed Shameem Kalathil';
  const githubRepositoryLink = 'https://github.com/kalathilshameem/cprg306-assignments';

  return (
    <div>
      <h2>Your Name</h2>
      <p>{yourName}</p>

      <h2>GitHub Repository</h2>
      <p>
        <a href={githubRepositoryLink} target="_blank" rel="noopener noreferrer">
          {githubRepositoryLink}
        </a>
      </p>
    </div>
  );
};


