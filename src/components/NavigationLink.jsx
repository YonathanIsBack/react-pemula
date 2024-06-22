import { Link } from 'react-router-dom';
import React from 'react';

function NavigationLink() {
  return (
    <div className="navigation-link">
      <Link to="/" className="button">Home</Link>
      <Link to="/archives" className="button">Archives</Link>
      <Link to="/notes/new" className="button">Tambah Catatan Baru</Link>
    </div>
  );
}

export default NavigationLink;
