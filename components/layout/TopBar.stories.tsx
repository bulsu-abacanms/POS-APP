import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TopBar from './TopBar';

const meta: Meta<typeof TopBar> = {
  title: 'Layout/TopBar',
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  render: () => (
    <TopBar variant="default" ticketCount={3} />
  ),
};

export const Ticket: Story = { 
  render: () => (
    <TopBar variant="ticket" ticketCount={3} /> 
  ),
};