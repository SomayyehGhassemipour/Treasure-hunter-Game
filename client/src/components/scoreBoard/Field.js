import React from 'react';

function Field({ item, index }) {
  let className = item.userName === localStorage.getItem("userName") ? "table-row active" : "table-row"
  return (
    <li key={index} className={className}>
      <div className="rank"><div
        className="rank-bg">{index + 1}</div></div>
      <div className="name">{item.userName}</div>
      <div className="score">{item.score}</div>
    </li>
  );
}

export default Field;