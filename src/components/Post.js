import React, { useState } from 'react';

const Post = ({ id, title, body, deletarPost, atualizarPost }) => {
  const [editMode,  setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedBody, setEditedBody] = useState(body);

  const handleDelete = () => {
    deletarPost(id);
  };

  const handleUpdate = () => {
    atualizarPost(id, editedTitle, editedBody);
    setEditMode(false);
  };

  return (
    <div className="Post"> 
      {editMode ? (
        <div className="EditForm">
          <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <textarea value={editedBody} onChange={(e) => setEditedBody(e.target.value)} />
          <button onClick={handleUpdate}>Salvar</button>
        </div>
      ) : (
        <>
          <h4>{title}</h4>
          <p>{body}</p>
          <button onClick={() => setEditMode(true)}>Editar</button>
          <button onClick={handleDelete}>Excluir</button>
        </>
      )}
    </div>
  );
};

export default Post;
