import React, { useState, useEffect } from 'react';
import './index.css';


function greedyActivity(activities) {
  if (!activities || activities.length === 0) {
    return [];
  }
  // Ordena as atividades pelo horário de fim em ordem crescente
  activities.sort((a, b) => a.end - b.end);
  // Adiciona a primeira atividade como selecionada
  const selectedActivities = [activities[0]];
  // Armazena o horário de fim da última atividade selecionada
  let lastEndTime = activities[0].end;

  // Percorre as atividades restantes
  for (let i = 1; i < activities.length; i++) {
    // Verifica se a atividade atual pode ser realizada após a última atividade selecionada
    if (activities[i].start >= lastEndTime) {
      selectedActivities.push(activities[i]);
      lastEndTime = activities[i].end;
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