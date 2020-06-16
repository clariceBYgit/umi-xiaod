import React from 'react';
import styles from './index.css';
import { Link }from 'umi'
export default () => {
  const usersList = [
    {id:1,name:'jerry'},
    {id:2,name:'tom'}
  ]
  return (
    <div>
      <h1 className={styles.title}>Page users/index</h1>
    
      <ul>
        {
          usersList.map(item=>(
            <li key={item.id}>
              <Link to={`/users/${item.name}`}>{item.id}---{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
