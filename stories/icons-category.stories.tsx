import { category } from '@/shared/assets/icon';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Icons/Category',
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllCategoryIcons: Story = {
  args: {
    size: '2.4rem',
    fill: '#222',
  },
  render: (args) => (
    <div className="grid grid-cols-8 gap-6">
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.BabyIcon {...args} />
        <span className="mt-2 text-sm font-medium">Baby</span>
        <code className="text-muted-foreground mt-1 text-xs">BabyIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.BagIcon {...args} />
        <span className="mt-2 text-sm font-medium">Bag</span>
        <code className="text-muted-foreground mt-1 text-xs">BagIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.BellIcon {...args} />
        <span className="mt-2 text-sm font-medium">Bell</span>
        <code className="text-muted-foreground mt-1 text-xs">BellIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.BodyHairIcon {...args} />
        <span className="mt-2 text-sm font-medium">BodyHair</span>
        <code className="text-muted-foreground mt-1 text-xs">BodyHairIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.CartIcon {...args} />
        <span className="mt-2 text-sm font-medium">Cart</span>
        <code className="text-muted-foreground mt-1 text-xs">CartIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.DeleteIcon {...args} />
        <span className="mt-2 text-sm font-medium">Delete</span>
        <code className="text-muted-foreground mt-1 text-xs">DeleteIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.DrinkIcon {...args} />
        <span className="mt-2 text-sm font-medium">Drink</span>
        <code className="text-muted-foreground mt-1 text-xs">DrinkIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.FashionIcon {...args} />
        <span className="mt-2 text-sm font-medium">Fashion</span>
        <code className="text-muted-foreground mt-1 text-xs">FashionIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.FoodIcon {...args} />
        <span className="mt-2 text-sm font-medium">Food</span>
        <code className="text-muted-foreground mt-1 text-xs">FoodIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.HomeIcon {...args} />
        <span className="mt-2 text-sm font-medium">Home</span>
        <code className="text-muted-foreground mt-1 text-xs">HomeIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.JewelryIcon {...args} />
        <span className="mt-2 text-sm font-medium">Jewelry</span>
        <code className="text-muted-foreground mt-1 text-xs">JewelryIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.MakeupIcon {...args} />
        <span className="mt-2 text-sm font-medium">Makeup</span>
        <code className="text-muted-foreground mt-1 text-xs">MakeupIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.MenuIcon {...args} />
        <span className="mt-2 text-sm font-medium">Menu</span>
        <code className="text-muted-foreground mt-1 text-xs">MenuIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.PriceIcon {...args} />
        <span className="mt-2 text-sm font-medium">Price</span>
        <code className="text-muted-foreground mt-1 text-xs">PriceIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.QrIcon {...args} />
        <span className="mt-2 text-sm font-medium">QR</span>
        <code className="text-muted-foreground mt-1 text-xs">QrIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.SearchIcon {...args} />
        <span className="mt-2 text-sm font-medium">Search</span>
        <code className="text-muted-foreground mt-1 text-xs">SearchIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.SettingIcon {...args} />
        <span className="mt-2 text-sm font-medium">Setting</span>
        <code className="text-muted-foreground mt-1 text-xs">SettingIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.SkinCareIcon {...args} />
        <span className="mt-2 text-sm font-medium">SkinCare</span>
        <code className="text-muted-foreground mt-1 text-xs">SkinCareIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.SportsIcon {...args} />
        <span className="mt-2 text-sm font-medium">Sports</span>
        <code className="text-muted-foreground mt-1 text-xs">SportsIcon</code>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <category.TvIcon {...args} />
        <span className="mt-2 text-sm font-medium">TV</span>
        <code className="text-muted-foreground mt-1 text-xs">TvIcon</code>
      </div>
    </div>
  ),
};

export const SingleIcon: Story = {
  args: {
    size: '4rem',
    fill: '#007bff',
  },
  render: (args) => (
    <div className="flex min-h-[200px] items-center justify-center">
      <category.SearchIcon {...args} />
    </div>
  ),
};

export const SizeComparison: Story = {
  args: {
    fill: '#333',
  },
  render: (args) => (
    <div className="flex min-h-[200px] items-center justify-center gap-8">
      <div className="flex flex-col items-center">
        <category.CartIcon {...args} size="1rem" />
        <span className="mt-2 text-xs">1rem</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon {...args} size="1.5rem" />
        <span className="mt-2 text-xs">1.5rem</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon {...args} size="2rem" />
        <span className="mt-2 text-xs">2rem</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon {...args} size="2.4rem" />
        <span className="mt-2 text-xs">2.4rem (기본)</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon {...args} size="3rem" />
        <span className="mt-2 text-xs">3rem</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon {...args} size="4rem" />
        <span className="mt-2 text-xs">4rem</span>
      </div>
    </div>
  ),
};

export const ColorVariations: Story = {
  args: {
    size: '3rem',
  },
  render: () => (
    <div className="flex min-h-[200px] items-center justify-center gap-8">
      <div className="flex flex-col items-center">
        <category.CartIcon size="3rem" fill="#ef4444" />
        <span className="mt-2 text-xs">Red</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon size="3rem" fill="#3b82f6" />
        <span className="mt-2 text-xs">Blue</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon size="3rem" fill="#10b981" />
        <span className="mt-2 text-xs">Green</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon size="3rem" fill="#f59e0b" />
        <span className="mt-2 text-xs">Orange</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon size="3rem" fill="#8b5cf6" />
        <span className="mt-2 text-xs">Purple</span>
      </div>
      <div className="flex flex-col items-center">
        <category.CartIcon size="3rem" fill="#6b7280" />
        <span className="mt-2 text-xs">Gray</span>
      </div>
    </div>
  ),
};
