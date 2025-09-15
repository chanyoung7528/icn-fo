import { direction } from '@/shared/assets/icon';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Icons/Direction',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: { type: 'text' },
      description: 'Icon size',
      defaultValue: '2.4rem',
    },
    fill: {
      control: { type: 'color' },
      description: 'Icon fill color',
      defaultValue: '#222',
    },
    type: {
      control: { type: 'radio' },
      options: ['regular', 'bold'],
      description: 'Icon type (for CheckIcon)',
      defaultValue: 'regular',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllDirectionIcons: Story = {
  args: {
    size: '2.4rem',
    fill: '#222',
    type: 'regular',
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-bold">Basic Direction Icons</h3>
        <div className="grid grid-cols-8 gap-6">
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.CheckIcon {...args} />
            <span className="mt-2 text-sm font-medium">Check</span>
            <code className="text-muted-foreground mt-1 text-xs">CheckIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.MinusIcon {...args} />
            <span className="mt-2 text-sm font-medium">Minus</span>
            <code className="text-muted-foreground mt-1 text-xs">MinusIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.PlusIcon {...args} />
            <span className="mt-2 text-sm font-medium">Plus</span>
            <code className="text-muted-foreground mt-1 text-xs">PlusIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.SectionIcon {...args} />
            <span className="mt-2 text-sm font-medium">Section</span>
            <code className="text-muted-foreground mt-1 text-xs">SectionIcon</code>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold">Arrow Icons</h3>
        <div className="grid grid-cols-8 gap-6">
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.TopIcon {...args} />
            <span className="mt-2 text-sm font-medium">Top</span>
            <code className="text-muted-foreground mt-1 text-xs">TopIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.Top2Icon {...args} />
            <span className="mt-2 text-sm font-medium">Top2</span>
            <code className="text-muted-foreground mt-1 text-xs">Top2Icon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.RightIcon {...args} />
            <span className="mt-2 text-sm font-medium">Right</span>
            <code className="text-muted-foreground mt-1 text-xs">RightIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.Right2Icon {...args} />
            <span className="mt-2 text-sm font-medium">Right2</span>
            <code className="text-muted-foreground mt-1 text-xs">Right2Icon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.BottomIcon {...args} />
            <span className="mt-2 text-sm font-medium">Bottom</span>
            <code className="text-muted-foreground mt-1 text-xs">BottomIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.Bottom2Icon {...args} />
            <span className="mt-2 text-sm font-medium">Bottom2</span>
            <code className="text-muted-foreground mt-1 text-xs">Bottom2Icon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.LeftIcon {...args} />
            <span className="mt-2 text-sm font-medium">Left</span>
            <code className="text-muted-foreground mt-1 text-xs">LeftIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.Left2Icon {...args} />
            <span className="mt-2 text-sm font-medium">Left2</span>
            <code className="text-muted-foreground mt-1 text-xs">Left2Icon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.SmallTopIcon {...args} />
            <span className="mt-2 text-sm font-medium">SmallTop</span>
            <code className="text-muted-foreground mt-1 text-xs">SmallTopIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.SmallBottomIcon {...args} />
            <span className="mt-2 text-sm font-medium">SmallBottom</span>
            <code className="text-muted-foreground mt-1 text-xs">SmallBottomIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.DashLeftIcon {...args} />
            <span className="mt-2 text-sm font-medium">DashLeft</span>
            <code className="text-muted-foreground mt-1 text-xs">DashLeftIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <direction.arrow.DashRightIcon {...args} />
            <span className="mt-2 text-sm font-medium">DashRight</span>
            <code className="text-muted-foreground mt-1 text-xs">DashRightIcon</code>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CheckIconTypes: Story = {
  args: {
    size: '3rem',
    fill: '#10b981',
  },
  render: (args) => (
    <div className="flex min-h-[200px] items-center justify-center gap-12">
      <div className="flex flex-col items-center">
        <direction.CheckIcon {...args} type="regular" />
        <span className="mt-2 text-sm font-medium">Regular</span>
        <code className="text-muted-foreground mt-1 text-xs">type="regular"</code>
      </div>
      <div className="flex flex-col items-center">
        <direction.CheckIcon {...args} type="bold" />
        <span className="mt-2 text-sm font-medium">Bold</span>
        <code className="text-muted-foreground mt-1 text-xs">type="bold"</code>
      </div>
    </div>
  ),
};

export const ArrowDirections: Story = {
  args: {
    size: '3rem',
    fill: '#3b82f6',
  },
  render: (args) => (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="relative">
        {/* Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="h-4 w-4 rounded-full bg-gray-300"></div>
        </div>

        {/* Top */}
        <div className="absolute top-0 left-1/2 mb-4 -translate-x-1/2 -translate-y-full transform">
          <direction.arrow.TopIcon {...args} />
        </div>

        {/* Right */}
        <div className="absolute top-1/2 right-0 ml-4 translate-x-full -translate-y-1/2 transform">
          <direction.arrow.RightIcon {...args} />
        </div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-1/2 mt-4 -translate-x-1/2 translate-y-full transform">
          <direction.arrow.BottomIcon {...args} />
        </div>

        {/* Left */}
        <div className="absolute top-1/2 left-0 mr-4 -translate-x-full -translate-y-1/2 transform">
          <direction.arrow.LeftIcon {...args} />
        </div>
      </div>
    </div>
  ),
};

export const InteractiveButtons: Story = {
  args: {
    size: '1.5rem',
    fill: '#6b7280',
  },
  render: (args) => (
    <div className="flex min-h-[200px] items-center justify-center gap-4">
      <button className="flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors hover:bg-gray-50">
        <direction.CheckIcon {...args} fill="#10b981" />
        <span>Confirm</span>
      </button>

      <button className="flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors hover:bg-gray-50">
        <direction.PlusIcon {...args} />
        <span>Add</span>
      </button>

      <button className="flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors hover:bg-gray-50">
        <direction.MinusIcon {...args} />
        <span>Remove</span>
      </button>

      <button className="flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors hover:bg-gray-50">
        <direction.arrow.RightIcon {...args} />
        <span>Next</span>
      </button>
    </div>
  ),
};
