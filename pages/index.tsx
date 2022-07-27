import Head from 'next/head';
import React from 'react';

import Title from 'components/Title';

export default function Home({}) {
  return (
    <div className="mx-auto container max-w-6xl">
      <Title />
    </div>
  );
}
