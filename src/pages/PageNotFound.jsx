import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Woops... You went somewhere you are not supposed to be</p>
      <button type="button" className="button" onClick={onClickBack}>Take Me Back!</button>
    </div>
  );
}

export default PageNotFound;
