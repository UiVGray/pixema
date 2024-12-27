import React from 'react';

export function Container(props: { children: React.JSX.Element }) {

  return <div className="flex flex-col items-center p-8">{props.children}</div>;
}
