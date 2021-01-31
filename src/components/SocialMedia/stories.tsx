import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SocialMedia from '.';

export default {
  title: 'Social Media',
  component: SocialMedia,
  args: {},
} as Meta;

export const Basic: Story = args => <SocialMedia {...args} />;
