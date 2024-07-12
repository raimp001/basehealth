import React from 'react';

export const Card: React.FC = ({ children }) => (
  <div>{children}</div>
);

export const CardHeader: React.FC = ({ children }) => (
  <div>{children}</div>
);

export const CardTitle: React.FC = ({ children }) => (
  <h3>{children}</h3>
);

export const CardDescription: React.FC = ({ children }) => (
  <p>{children}</p>
);

export const CardContent: React.FC = ({ children }) => (
  <div>{children}</div>
);

