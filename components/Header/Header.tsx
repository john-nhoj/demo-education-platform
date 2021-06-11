import React from 'react';
import * as cn from 'classnames';

const Header = () => {
  return (
    <header className={cn('header', 'bg-red-400')}>
      This is the header
      <style>{`
        .header {
          grid-area: header;
        }
      `}</style>
    </header>
  );
};

export { Header };
