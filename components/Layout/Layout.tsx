import React from 'react';
import * as cn from 'classnames';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={cn('min-h-screen', 'layout')}>
      {children}
      <style jsx>{`
        .layout {
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: 70px auto 50px;
          grid-template-areas:
            'header'
            'main'
            'footer';
        }
      `}</style>
    </div>
  );
};

export { Layout };
