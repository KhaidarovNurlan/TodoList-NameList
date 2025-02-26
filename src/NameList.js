import React, { useEffect, useState } from 'react';

function NameList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="name-list">
      <h1>Спонсоры нашего сайта:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="name-item">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
