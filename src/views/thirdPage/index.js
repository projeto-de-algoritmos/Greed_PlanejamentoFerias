import React, { useState, useEffect } from 'react';
import './index.css';


function greedyActivity(activities) {
  // Ordena as atividades pelo horário de fim em ordem crescente
  activities.sort((a, b) => a.end - b.end);

  const selectedActivities = [];
  let lastEndTime = -Infinity;

  for (const activity of activities) {
    if (activity.start >= lastEndTime) {
      selectedActivities.push(activity);
      lastEndTime = activity.end;
    }
  }

  return selectedActivities;
}


function Schedule() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const savedActivities = localStorage.getItem('activities');
    console.log(savedActivities);
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    }
  }, []);

  const selected = greedyActivity(activities);

  return (
    <body className='body'>
      <div className="scheduleBack">
        <div className="men"></div>
        <p>
          <table>
            <thead>
              <tr>
                <th>Atividade</th>
                <th>Início</th>
                <th>Fim</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.name}</td>
                  <td>{activity.start}</td>
                  <td>{activity.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </p>
      </div>
    </body>
  );
}

export default Schedule;