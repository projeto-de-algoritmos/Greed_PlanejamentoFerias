import React, { useState } from 'react';

function ActivityForm({ onAddActivity }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!start || !end || !name) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const newActivity = {
      start: parseInt(start),
      end: parseInt(end),
      name: name
    };

    onAddActivity(newActivity);

    setStart('');
    setEnd('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-group-item">
          <label>
            Início:
            <input
              type="number"
              className="input"
              value={start}
              onChange={(event) => setStart(event.target.value)}
            />
          </label>
        </div>
        <div className="input-group-item">
          <label>
            Fim:
            <input
              type="number"
              className="input"
              value={end}
              onChange={(event) => setEnd(event.target.value)}
            />
          </label>
        </div>
      </div>
      <br />
      <label>
        Nome:
        <input
          type="text"
          className="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <button className="button" type="submit">Adicionar Atividade</button>
    </form>
  );
}

export default ActivityForm;
