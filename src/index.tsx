import React from 'react';
import ReactDOM from 'react-dom';
import { Linktree, CHANNEL_TYPES } from 'linkees';

import './css/normalize.css';

const items = [
  {
    title: 'Website',
    subtitle: 'My Website',
    type: CHANNEL_TYPES.WEBSITE,
    link: 'https://ababil-mustax.me', //your personal website or portfolio  link
  },
  {
    title: 'GitHub',
    subtitle: '@birdfromhell | 🏡 to all my open-source projects',
    type: CHANNEL_TYPES.GITHUB,
    link: 'https://github.com/birdfromhell', //Github Profile link
  },
  {
    title: 'Instagram',
    subtitle: '@heysagnik |  Shots of my life 🙂',
    type: CHANNEL_TYPES.INSTAGRAM,
    link: 'https://www.instagram.com/bi.ell._/', //instagram profile link
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Linktree cardItems={items} />
  </React.StrictMode>,
  document.getElementById('root')
);
