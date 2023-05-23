import Head from 'next/head';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title> {title ? `${title} - UrbanEdge` : 'UrbanEdge'}</title>
        <meta name="description" content="Generated by create next app"></meta>
      </Head>
      <div>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  );
}