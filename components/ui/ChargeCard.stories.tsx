import ChargeCard from './ChargeCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ChargeCard> = {
  title: 'UI/ChargeCard',
  component: ChargeCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ChargeCard>;

export const Default: Story = {
  args: {
    amount: 24.0,
  },
};
