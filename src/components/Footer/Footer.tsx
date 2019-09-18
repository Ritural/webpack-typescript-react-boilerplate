import * as React from 'react';

import { VERSION } from 'store/modules/app/constants';

export const Footer = () => (
  <footer className="Footer">
    <p>This is the footer</p>
    <p>{VERSION}</p>
  </footer>
);
