import { contents } from '@/shared/assets/icon';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Icons/Contents',
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

export const AllContentsIcons: Story = {
  args: {
    size: '2.4rem',
    fill: '#222',
  },
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-bold">General Contents Icons</h3>
        <div className="grid grid-cols-8 gap-6">
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.BookMarkIcon {...args} />
            <span className="mt-2 text-sm font-medium">BookMark</span>
            <code className="text-muted-foreground mt-1 text-xs">BookMarkIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.CalandarIcon {...args} />
            <span className="mt-2 text-sm font-medium">Calendar</span>
            <code className="text-muted-foreground mt-1 text-xs">CalandarIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.CalandarCheckIcon {...args} />
            <span className="mt-2 text-sm font-medium">Calendar Check</span>
            <code className="text-muted-foreground mt-1 text-xs">CalandarCheckIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.CameraIcon {...args} />
            <span className="mt-2 text-sm font-medium">Camera</span>
            <code className="text-muted-foreground mt-1 text-xs">CameraIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.CardIcon {...args} />
            <span className="mt-2 text-sm font-medium">Card</span>
            <code className="text-muted-foreground mt-1 text-xs">CardIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.ClockIcon {...args} />
            <span className="mt-2 text-sm font-medium">Clock</span>
            <code className="text-muted-foreground mt-1 text-xs">ClockIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.CrownIcon {...args} />
            <span className="mt-2 text-sm font-medium">Crown</span>
            <code className="text-muted-foreground mt-1 text-xs">CrownIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.DeleteIcon {...args} />
            <span className="mt-2 text-sm font-medium">Delete</span>
            <code className="text-muted-foreground mt-1 text-xs">DeleteIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.DeskIcon {...args} />
            <span className="mt-2 text-sm font-medium">Desk</span>
            <code className="text-muted-foreground mt-1 text-xs">DeskIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.DiamondIcon {...args} />
            <span className="mt-2 text-sm font-medium">Diamond</span>
            <code className="text-muted-foreground mt-1 text-xs">DiamondIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.DownloadIcon {...args} />
            <span className="mt-2 text-sm font-medium">Download</span>
            <code className="text-muted-foreground mt-1 text-xs">DownloadIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.EmailIcon {...args} />
            <span className="mt-2 text-sm font-medium">Email</span>
            <code className="text-muted-foreground mt-1 text-xs">EmailIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.EnterIcon {...args} />
            <span className="mt-2 text-sm font-medium">Enter</span>
            <code className="text-muted-foreground mt-1 text-xs">EnterIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.EventIcon {...args} />
            <span className="mt-2 text-sm font-medium">Event</span>
            <code className="text-muted-foreground mt-1 text-xs">EventIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.FilterIcon {...args} />
            <span className="mt-2 text-sm font-medium">Filter</span>
            <code className="text-muted-foreground mt-1 text-xs">FilterIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.HeartIcon {...args} />
            <span className="mt-2 text-sm font-medium">Heart</span>
            <code className="text-muted-foreground mt-1 text-xs">HeartIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.InfoIcon {...args} />
            <span className="mt-2 text-sm font-medium">Info</span>
            <code className="text-muted-foreground mt-1 text-xs">InfoIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.LanguageIcon {...args} />
            <span className="mt-2 text-sm font-medium">Language</span>
            <code className="text-muted-foreground mt-1 text-xs">LanguageIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.LocationIcon {...args} />
            <span className="mt-2 text-sm font-medium">Location</span>
            <code className="text-muted-foreground mt-1 text-xs">LocationIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.MemberShipIcon {...args} />
            <span className="mt-2 text-sm font-medium">MemberShip</span>
            <code className="text-muted-foreground mt-1 text-xs">MemberShipIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.PencilSimpleIcon {...args} />
            <span className="mt-2 text-sm font-medium">PencilSimple</span>
            <code className="text-muted-foreground mt-1 text-xs">PencilSimpleIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.PhoneIcon {...args} />
            <span className="mt-2 text-sm font-medium">Phone</span>
            <code className="text-muted-foreground mt-1 text-xs">PhoneIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.PlayIcon {...args} />
            <span className="mt-2 text-sm font-medium">Play</span>
            <code className="text-muted-foreground mt-1 text-xs">PlayIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.QrReceiptIcon {...args} />
            <span className="mt-2 text-sm font-medium">QR Receipt</span>
            <code className="text-muted-foreground mt-1 text-xs">QrReceiptIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.ResetIcon {...args} />
            <span className="mt-2 text-sm font-medium">Reset</span>
            <code className="text-muted-foreground mt-1 text-xs">ResetIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.ShareIcon {...args} />
            <span className="mt-2 text-sm font-medium">Share</span>
            <code className="text-muted-foreground mt-1 text-xs">ShareIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.SoundOffIcon {...args} />
            <span className="mt-2 text-sm font-medium">Sound Off</span>
            <code className="text-muted-foreground mt-1 text-xs">SoundOffIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.SoundOnIcon {...args} />
            <span className="mt-2 text-sm font-medium">Sound On</span>
            <code className="text-muted-foreground mt-1 text-xs">SoundOnIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.StarIcon {...args} />
            <span className="mt-2 text-sm font-medium">Star</span>
            <code className="text-muted-foreground mt-1 text-xs">StarIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.StoerIcon {...args} />
            <span className="mt-2 text-sm font-medium">Store</span>
            <code className="text-muted-foreground mt-1 text-xs">StoerIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.StopIcon {...args} />
            <span className="mt-2 text-sm font-medium">Stop</span>
            <code className="text-muted-foreground mt-1 text-xs">StopIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.TimeIcon {...args} />
            <span className="mt-2 text-sm font-medium">Time</span>
            <code className="text-muted-foreground mt-1 text-xs">TimeIcon</code>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold">Eye Icons</h3>
        <div className="grid grid-cols-8 gap-6">
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.eye.EyeIcon {...args} />
            <span className="mt-2 text-sm font-medium">Eye</span>
            <code className="text-muted-foreground mt-1 text-xs">eye.EyeIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.eye.SlashIcon {...args} />
            <span className="mt-2 text-sm font-medium">Eye Slash</span>
            <code className="text-muted-foreground mt-1 text-xs">eye.SlashIcon</code>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold">View Icons</h3>
        <div className="grid grid-cols-8 gap-6">
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.view.GridIcon {...args} />
            <span className="mt-2 text-sm font-medium">Grid View</span>
            <code className="text-muted-foreground mt-1 text-xs">view.GridIcon</code>
          </div>
          <div className="flex flex-col items-center rounded-lg border p-4">
            <contents.view.ListIcon {...args} />
            <span className="mt-2 text-sm font-medium">List View</span>
            <code className="text-muted-foreground mt-1 text-xs">view.ListIcon</code>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const PopularIcons: Story = {
  args: {
    size: '3rem',
    fill: '#ef4444',
  },
  render: (args) => (
    <div className="flex min-h-[200px] items-center justify-center gap-8">
      <div className="flex flex-col items-center">
        <contents.HeartIcon {...args} />
        <span className="mt-2 text-sm font-medium">Heart</span>
      </div>
      <div className="flex flex-col items-center">
        <contents.StarIcon {...args} fill="#f59e0b" />
        <span className="mt-2 text-sm font-medium">Star</span>
      </div>
      <div className="flex flex-col items-center">
        <contents.BookMarkIcon {...args} fill="#3b82f6" />
        <span className="mt-2 text-sm font-medium">Bookmark</span>
      </div>
      <div className="flex flex-col items-center">
        <contents.ShareIcon {...args} fill="#10b981" />
        <span className="mt-2 text-sm font-medium">Share</span>
      </div>
    </div>
  ),
};

export const MediaControls: Story = {
  args: {
    size: '2rem',
    fill: '#6b7280',
  },
  render: (args) => (
    <div className="flex min-h-[200px] items-center justify-center gap-6">
      <button className="rounded-full border p-3 transition-colors hover:bg-gray-50">
        <contents.PlayIcon {...args} />
      </button>
      <button className="rounded-full border p-3 transition-colors hover:bg-gray-50">
        <contents.StopIcon {...args} />
      </button>
      <button className="rounded-full border p-3 transition-colors hover:bg-gray-50">
        <contents.SoundOnIcon {...args} />
      </button>
      <button className="rounded-full border p-3 transition-colors hover:bg-gray-50">
        <contents.SoundOffIcon {...args} />
      </button>
    </div>
  ),
};

export const ViewToggle: Story = {
  args: {
    size: '1.5rem',
    fill: '#374151',
  },
  render: (args) => (
    <div className="flex min-h-[200px] items-center justify-center gap-4">
      <div className="flex rounded-lg border">
        <button className="border-r bg-blue-50 p-2 transition-colors hover:bg-blue-100">
          <contents.view.GridIcon {...args} fill="#3b82f6" />
        </button>
        <button className="p-2 transition-colors hover:bg-gray-50">
          <contents.view.ListIcon {...args} />
        </button>
      </div>

      <div className="flex rounded-lg border">
        <button className="p-2 transition-colors hover:bg-gray-50">
          <contents.eye.EyeIcon {...args} />
        </button>
        <button className="border-l p-2 transition-colors hover:bg-gray-50">
          <contents.eye.SlashIcon {...args} />
        </button>
      </div>
    </div>
  ),
};
