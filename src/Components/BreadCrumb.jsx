import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const location = useLocation();

  // Split the pathname into an array
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="text-sm text-gray-600 mx-20 my-4">
      <ul className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-black font-bold">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2 font-bold">/</span>
              {isLast ? (
                <span className="text-red-500 font-bold">{value}</span>
              ) : (
                <Link to={to} className="text-black font-bold">{value}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
