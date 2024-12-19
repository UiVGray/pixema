import React from 'react';

export function Container(props: { children: React.ReactNode }) {

  return <div className="container">{props.children}</div>;
}
