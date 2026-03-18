import React from 'react';
import TopBar from './TopBar';

export default {
  title: 'Layout/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <TopBar variant="default" ticketCount={3} />
);

export const Ticket = () => (
  <TopBar variant="ticket" ticketCount={3} />
);