import React from 'react';
import './index.css';

function greedyActivity(activities) {
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

function HomePage() {
  // Exemplo de uso do algoritmo
  const activities = [
    { start: 1, end: 4, name: "Go out with the dog" },
    { start: 3, end: 5, name: "Visit the museum" },
    { start: 0, end: 6, name: "Meet some villagers" },
    { start: 5, end: 7, name: "Go to a party" },
    { start: 3, end: 9, name: "Reproduce for fun" },
    { start: 5, end: 9, name: "Do an outside activity" },
    { start: 6, end: 10, name: "Get rest" },
    { start: 8, end: 11, name: "Go hunting" },
    { start: 8, end: 12, name: "Remt a sports car" },
    { start: 2, end: 14, name: "Visite the Zoo" },
    { start: 12, end: 16, name: "Talk to Michelle" }
  ];

  const selected = greedyActivity(activities);
  //console.log(selected[0])
  console.log(selected);

  return (
    <body className='body'>
    <div className="back">
    <div className="guys"></div>
    </div>
    </body>
    
  );
}

export default HomePage;