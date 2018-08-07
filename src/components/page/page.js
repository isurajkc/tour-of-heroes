import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

const Page = ({ children }) => (
  <div class="page">
    <aside>
      <h1>
        <Link to="/" className="logo">
          <small>Tour of </small>
          Super
          <span>heroes</span>
        </Link>
      </h1>
    </aside>
    <main>{children}</main>
  </div>
);

export default Page;
