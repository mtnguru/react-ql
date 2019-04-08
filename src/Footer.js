import React from 'react';

import Link from './Link';

const Footer = () => (
  <div className="maestro-footer">
    <small>
      <span className="Footer-text">
        A Creation of
      </span>{' '}
      <Link
        className="Footer-link"
        href="http://ecosleuth.com"
      >
        EcoSleuth, LLC
      </Link>{' '}
    </small>
  </div>
);

export default Footer;