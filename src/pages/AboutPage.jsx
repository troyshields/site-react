import { timelineData } from '../data/aboutdata'
import React, { useState } from 'react';

export default function AboutPage() {
  const [filter, setFilter] = useState('Show All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredTimeline = timelineData.filter((item) => {
    if (filter === 'Show All') {
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
      <h1>About Me</h1>

      <h2>It's a journey!</h2>

      <fieldset className='button-group'>
        <legend className='sr-only'>Timeline filter</legend>
       
      <label>
          <input
            type="radio"
            name="timeline-filter"
            value="Show All"
            checked={filter === 'Show All'}
            onChange={() => handleFilterChange('Show All')}
          />
          <span>Show All</span>
        </label>
        <label>
          <input
            type="radio"
            name="timeline-filter"
            value="My Journey"
            checked={filter === 'My Journey'}
            onChange={() => handleFilterChange('My Journey')}
          />
          <span>My Journey</span>
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
