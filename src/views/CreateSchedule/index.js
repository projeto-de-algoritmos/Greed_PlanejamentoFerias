import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityForm from './ActivityForm';
import './index.css';


function CreateSchedule() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const savedActivities = localStorage.getItem('activities');
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    }
  }, []);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
    localStorage.setItem('activities', JSON.stringify([...activities, newActivity]));
  };

  const handleClearActivities = () => {
    setActivities([]);
    localStorage.removeItem('activities');
  };

  const navigate = useNavigate();

  const handleGoToSchedule = () => {
    navigate('/schedule');
  };

  return (
    <body className='body'>
      <div className="back">
        <h2>Adicionar Atividade</h2>
        <ActivityForm onAddActivity={handleAddActivity} />

        <ul>
        <h2>Atividades Adicionadas</h2>
          {activities.map((activity, index) => (
            <li key={index}>
              {activity.name} - Início: {activity.start}, Fim: {activity.end}
            </li>
          ))}
        </ul>
        <button className="button" onClick={handleGoToSchedule}>Ir para o Cronograma</button>
        <button className="button" onClick={handleClearActivities}>Limpar Atividades</button>
      </div>
    </body>

  );
}

export default CreateSchedule;
