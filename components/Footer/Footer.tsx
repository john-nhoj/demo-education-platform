import React from 'react';
import * as cn from 'classnames';

const Footer = () => {
  return (
    <footer className={cn('footer', 'bg-red-100')}>
      This is a footer
      <style>{`
      .footer {
        grid-area: footer;
      }
    `}</style>
    </footer>
  );
};

export { Footer };
