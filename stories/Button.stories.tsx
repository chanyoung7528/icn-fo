import { HeartIcon } from '@/shared/assets/icon/contents';
import { Button } from '@/shared/ui/Button';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral'],
      description: 'Button color variant',
    },
    appearance: {
      control: { type: 'select' },
      options: ['default', 'outline', 'text'],
      description: 'Button appearance style',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'xsm', 'sm', 'lg', 'xl', 'icon'],
      description: 'Button size',
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
type Story = StoryObj<typeof meta>;

// Basic Button Stories
export const Default: Story = {
  args: {
    variant: 'primary',
    appearance: 'default',
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    appearance: 'default',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    appearance: 'default',
    children: 'Secondary Button',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    appearance: 'default',
    children: 'Neutral Button',
  },
};

// Outline Variants
export const PrimaryOutline: Story = {
  args: {
    variant: 'primary',
    appearance: 'outline',
    children: 'Primary Outline',
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: 'secondary',
    appearance: 'outline',
    children: 'Secondary Outline',
  },
};

export const NeutralOutline: Story = {
  args: {
    variant: 'neutral',
    appearance: 'outline',
    children: 'Neutral Outline',
  },
};

// Text Variants
export const SecondaryText: Story = {
  args: {
    variant: 'secondary',
    appearance: 'text',
    children: 'Secondary Text',
  },
};

export const NeutralText: Story = {
  args: {
    variant: 'neutral',
    appearance: 'text',
    children: 'Neutral Text',
  },
};

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" appearance="default" size="xsm">
        XSM
      </Button>
      <Button variant="primary" appearance="default" size="sm">
        Small
      </Button>
      <Button variant="primary" appearance="default" size="default">
        Default
      </Button>
      <Button variant="primary" appearance="default" size="lg">
        Large
      </Button>
      <Button variant="primary" appearance="default" size="xl">
        XL
      </Button>
    </div>
  ),
};

// With Icons
export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" appearance="default" size="default">
        <HeartIcon />
        With Icon
      </Button>
      <Button variant="secondary" appearance="outline" size="default">
        <HeartIcon />
        Outline Icon
      </Button>
      <Button variant="neutral" appearance="text" size="default">
        <HeartIcon />
        Text Icon
      </Button>
    </div>
  ),
};

// Disabled States
export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" appearance="default" size="default" disabled>
        Disabled Primary
      </Button>
      <Button variant="secondary" appearance="outline" size="default" disabled>
        Disabled Secondary
      </Button>
      <Button variant="neutral" appearance="text" size="default" disabled>
        Disabled Neutral
      </Button>
    </div>
  ),
};

// All Color and Appearance Combinations
export const AllCombinations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Primary</h3>
        <div className="flex items-center gap-4">
          <Button variant="primary" appearance="default" size="default">
            Default
          </Button>
          <Button variant="primary" appearance="outline" size="default">
            Outline
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Secondary</h3>
        <div className="flex items-center gap-4">
          <Button variant="secondary" appearance="default" size="default">
            Default
          </Button>
          <Button variant="secondary" appearance="outline" size="default">
            Outline
          </Button>
          <Button variant="secondary" appearance="text" size="default">
            Text
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-600">Neutral</h3>
        <div className="flex items-center gap-4">
          <Button variant="neutral" appearance="default" size="default">
            Default
          </Button>
          <Button variant="neutral" appearance="outline" size="default">
            Outline
          </Button>
          <Button variant="neutral" appearance="text" size="default">
            Text
          </Button>
        </div>
      </div>
    </div>
  ),
};
