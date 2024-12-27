import React from 'react';

export function Main(props: { children: React.JSX.Element }) {

  return <main className="flex flex-col items-center">{props.children}</main>;
}
