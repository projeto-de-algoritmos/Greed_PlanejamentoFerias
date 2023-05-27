import React, { useState } from 'react';

function ActivityForm({ onAddActivity }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se os campos estão preenchidos
    if (!start || !end || !name) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    // Cria um objeto de atividade com os valores do formulário
    const newActivity = {
      start: parseInt(start),
      end: parseInt(end),
      name: name
    };

    // Chama a função de callback para adicionar a atividade
    onAddActivity(newActivity);

    // Limpa os campos do formulário
    setStart('');
    setEnd('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Início:
        <input
          type="number"
          value={start}
          onChange={(event) => setStart(event.target.value)}
        />
      </label>
      <br />
      <label>
        Fim:
        <input
          type="number"
          value={end}
          onChange={(event) => setEnd(event.target.value)}
        />
      </label>
      <br />
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Adicionar Atividade</button>
    </form>
  );
}

export default ActivityForm;
