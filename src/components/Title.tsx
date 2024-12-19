import React from 'react';

export function Title(props: { children: React.ReactNode }) {

  return <h1 className="title">{props.children}</h1>
}
