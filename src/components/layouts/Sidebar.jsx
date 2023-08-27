import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar({ isLoading, peopleData, getMore }) {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        {
          isLoading?
          <div className="center">
            <span>Loading...</span>
          </div>
          :
          peopleData.map((p,i) => 
            <Link key={i} to={`/${i+1}`}>
              <li>{p.name}</li>
            </Link>
          )
        }
        {
          !isLoading?
            	<div className='center'>
                <button className='btn-more' onClick={getMore} >➕ Traer más</button>
              </div>
          :""
        }
      </ul>
    </nav>
  );
}

export default Sidebar;