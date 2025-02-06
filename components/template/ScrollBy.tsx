'use client'

import React from 'react';
import { Anchor } from 'antd';
import './ScrollBy.css';

const handleClick = (
  e: React.MouseEvent<HTMLElement>,
  link: {
    title: React.ReactNode;
    href: string;
  },
) => {
  e.preventDefault();
  console.log(link);
};

const ScrollBy: React.FC = () => (
  <Anchor
    affix={false}
    onClick={handleClick}
    className=''
    items={[
      {
        key: '1',
        href: '#anchor-dewwmo-basic',
        title: 'کتاب جاوااسکریپت',
      },
      {
        key: '2',
        href: '#anchor-dfemo-static',
        title: 'کلین کد',
      },
      {
        key: '5',
        href: '#anchor-demso-static',
        title: 'پترن ها',
      },
      {
        key: '6',
        href: '#anchor-defamao-static',
        title: 'Static demo',
      },
      {
        key: '7',
        href: '#anchor-deamo-static',
        title: 'Static demo',
      },


    ]}
  />
);

export default ScrollBy;