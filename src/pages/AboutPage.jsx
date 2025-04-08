import { timelineData } from '../data/aboutdata'
import React, { useState } from 'react'
import "../styles/About.css"

export default function AboutPage() {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredTimeline = timelineData.filter((item) => {
    if (filter === 'All') {
      return true;
    }
    return item.category === filter;
  });

  const groupedTimeline = filteredTimeline.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  return (
    <>
      <h1>About</h1>

      <p>A look back at some significant and not so significant events that overlapped with my professional career.</p>

      <fieldset className='button-group'>
        <legend className='sr-only'>Timeline filter</legend>
       
      <label>
          <input
            type="radio"
            name="timeline-filter"
            value="All"
            checked={filter === 'All'}
            onChange={() => handleFilterChange('All')}
          />
          <span>All</span>
        </label>
        <label>
          <input
            type="radio"
            name="timeline-filter"
            value="My Career"
            checked={filter === 'My Career'}
            onChange={() => handleFilterChange('My Career')}
          />
          <span>My Career</span>
        </label>
        <label>
          <input
            type="radio"
            name="timeline-filter"
            value="Industry"
            checked={filter === 'Industry'}
            onChange={() => handleFilterChange('Industry')}
          />
          <span>Industry</span>
        </label>
      </fieldset>

      <div className='timeline'>
        {Object.entries(groupedTimeline).map(([year, items]) => (
          <div key={year}>
            <h3>{year}</h3>
            {items.map((item) => (
              <p
                key={item.id}
                className={item.category === 'Industry' ? 'industry-event' : ''}
              >
                {item.text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
