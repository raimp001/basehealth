import React from 'react';

export const Breadcrumb: React.FC = ({ children }) => (
  <nav aria-label="breadcrumb">{children}</nav>
);

export const BreadcrumbList: React.FC = ({ children }) => (
  <ol>{children}</ol>
);

export const BreadcrumbItem: React.FC = ({ children }) => (
  <li>{children}</li>
);

export const BreadcrumbLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, ...props }) => (
  <a {...props}>{children}</a>
);

