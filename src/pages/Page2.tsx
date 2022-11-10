import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function Page2() {
  return (
    <div>
      <Link to="/">to Page 1:</Link>
    </div>
  );
}

export default memo(Page2);
