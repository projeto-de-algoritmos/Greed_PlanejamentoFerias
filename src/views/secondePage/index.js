import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';


function Motivation() {

  let navigate = useNavigate()
  function navigateToPage() {
    navigate('/create-schedule');
  }

  return (
    <body className='body'>
      <div className="back">
        <div className="men"></div>
        <p>&ensp;&ensp;&ensp;&ensp;Era uma vez Rodrigo e seu amigo Antônio, dois estudantes universitários que estavam exaustos depois de semanas intensas de estudos.Eles estavam tão cansados que mal conseguiam se manter acordados durante as aulas. Mas, como bons aventureiros, eles decidiram aproveitar o final de semana para fazer uma viagem de descanso e diversão.
        <br></br>
        &ensp;&ensp;&ensp;&ensp;Essa história começa na sexta-feira à tarde, quando Rodrigo e Antônio, ansiosos pela aventura que os aguarda, encontram-se no aeroporto com suas malas cheias de expectativas. Com seus sorrisos brilhantes e espírito aventureiro, eles embarcam no avião rumo ao desconhecido. 
        <br></br>
        &ensp;&ensp;&ensp;&ensp;Enquanto a viagem segue seu curso, Rodrigo e Antônio começam a imaginar todas as atividades divertidas que poderiam fazer. Saltar de paraquedas? Fazer um passeio de balão? Explorar trilhas e cachoeiras? As possibilidades são infinitas!
        <br></br>
        &ensp;&ensp;&ensp;&ensp;No entanto, quando chegam ao seu destino, eles percebem que esqueceram de fazer o planejamento adequado das atividades. É nesse momento que eles se voltam para você, caro leitor, em busca de ajuda para criar um cronograma épico e inesquecível.</p>
        <button className="button" onClick={navigateToPage}> <span>Criar cronograma</span> </button>
      </div>
    </body>
  );
}

export default Motivation;
