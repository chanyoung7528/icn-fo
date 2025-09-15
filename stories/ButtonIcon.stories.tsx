import { HeartIcon } from '@/shared/assets/icon/contents';
import { ButtonIcon } from '@/shared/ui/ButtonIcon';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

// ButtonIcon Stories
const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral'],
      description: 'Button variant',
    },
    appearance: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
      description: 'Button type',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as child component',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
  },
};

export default meta;

type ButtonIconStory = StoryObj<typeof ButtonIcon>;

export const IconPrimarySolid: ButtonIconStory = {
  args: {
    variant: 'primary',
    appearance: 'solid',
    children: <HeartIcon fill="#fff" />,
  },
};

export const IconPrimaryOutline: ButtonIconStory = {
  args: {
    variant: 'primary',
    appearance: 'outline',
    children: <HeartIcon fill="#2BB3BF" />,
  },
};

export const IconSecondarySolid: ButtonIconStory = {
  args: {
    variant: 'secondary',
    appearance: 'solid',
    children: <HeartIcon fill="#fff" />,
  },
};

export const IconSecondaryOutline: ButtonIconStory = {
  args: {
    variant: 'secondary',
    appearance: 'outline',
    children: <HeartIcon fill="#000" />,
  },
};

export const IconNeutralSolid: ButtonIconStory = {
  args: {
    variant: 'primary',
    appearance: 'solid',
    children: <HeartIcon fill="#000" />,
  },
};

export const IconNeutralOutline: ButtonIconStory = {
  args: {
    variant: 'neutral',
    appearance: 'solid',
    children: <HeartIcon fill="#000" />,
  },
};

export const IconDisabled: ButtonIconStory = {
  args: {
    variant: 'neutral',
    appearance: 'solid',
    children: <HeartIcon />,
    disabled: true,
  },
};
