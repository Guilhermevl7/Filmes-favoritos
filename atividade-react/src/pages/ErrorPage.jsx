import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () =>{
  return (
      <div style={{
        textAlign: 'center',
        color: 'red'
      }}>
        <h1>Error 404!</h1>
        <h4 style={{color:'black'}}> Desculpe não encotramos essa página.</h4>
        <button style={{
         background: 'black'}}>
          <Link to="/" style={{color: 'white'}}>Voltar</Link>
        </button>
      </div>

  );
};

export default ErrorPage;
