// src/components/CandidateSearch.js
import React, { useState } from 'react';

const CandidateSearch = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);

  const handleSearch = async () => {
    // this is a static data
    const fetchedCandidates = [
      { id: 1, name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', location: 'San Francisco', jobRole: 'Product Manager' },
    ];
    setCandidates(fetchedCandidates);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Search Candidates</h2>
      <div className="flex flex-col md:flex-row mb-8 justify-center items-center">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 p-3 mr-0 md:mr-4 mb-4 md:mb-0 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Job Role"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-3 rounded-md ml-0 md:ml-4 mt-4 md:mt-0 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Candidates</h3>
        {candidates.length > 0 ? (
          candidates.map((candidate) => (
            <div key={candidate.id} className="border border-gray-200 p-4 mb-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h4 className="text-lg font-bold text-gray-800">{candidate.name}</h4>
              <p className="text-gray-600">{candidate.location}</p>
              <p className="text-gray-600">{candidate.jobRole}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No candidates found.</p>
        )}
      </div>
    </div>
  );
};

export default CandidateSearch;
