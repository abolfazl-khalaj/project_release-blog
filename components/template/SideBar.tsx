'use client'

import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './SideBar.css'
import { useRouter } from 'next/router';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  
  {
    key: 'sub1',
    label: 'Navigation One',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: '1-2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'کتاب جاوااسکریپت',
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
          {
            key: 'sub5',
            label: 'Submenu',
            children: [
              { key: '45', label: 'Option 7' },
              { key: '170', label: 'Option 8' },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];



const SideBar: React.FC = () => {

  const onClick: MenuProps['onClick'] = (e) => {
      
  };
  
   return <Menu onClick={onClick} style={{ width: 300 , direction:'rtl'}} mode="vertical" items={items}   subMenuOpenDelay={0.1}         rootClassName="custom-rtl-menu" // Apply root class for custom styling

  />
};

export default SideBar;