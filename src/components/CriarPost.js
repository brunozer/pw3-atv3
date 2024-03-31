import React, { useState } from 'react';

const CriarPost = ({ criarPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    criarPost(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <div className="CriarPostForm"> 
      <h4>Criar Novo Post</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>mensagem:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CriarPost;
