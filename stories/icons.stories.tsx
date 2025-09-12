import * as Icons from '@/shared/assets/icon';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Icons/All Icons',
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

export const AllIcons: Story = {
  args: {
    size: '2.4rem',
    fill: '#222',
  },
  render: (args) => (
    <div className="space-y-8">
      {/* Category Icons */}
      <div>
        <h2 className="text-foreground mb-4 text-2xl font-bold">Category Icons (20개)</h2>
        <div className="grid grid-cols-10 gap-4">
          <div className="flex flex-col items-center p-2">
            <Icons.category.BabyIcon {...args} />
            <span className="mt-1 text-xs">Baby</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.BagIcon {...args} />
            <span className="mt-1 text-xs">Bag</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.BellIcon {...args} />
            <span className="mt-1 text-xs">Bell</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.BodyHairIcon {...args} />
            <span className="mt-1 text-xs">BodyHair</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.CartIcon {...args} />
            <span className="mt-1 text-xs">Cart</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.DeleteIcon {...args} />
            <span className="mt-1 text-xs">Delete</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.DrinkIcon {...args} />
            <span className="mt-1 text-xs">Drink</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.FashionIcon {...args} />
            <span className="mt-1 text-xs">Fashion</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.FoodIcon {...args} />
            <span className="mt-1 text-xs">Food</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.HomeIcon {...args} />
            <span className="mt-1 text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.JewelryIcon {...args} />
            <span className="mt-1 text-xs">Jewelry</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.MakeupIcon {...args} />
            <span className="mt-1 text-xs">Makeup</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.MenuIcon {...args} />
            <span className="mt-1 text-xs">Menu</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.PriceIcon {...args} />
            <span className="mt-1 text-xs">Price</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.QrIcon {...args} />
            <span className="mt-1 text-xs">Qr</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.SearchIcon {...args} />
            <span className="mt-1 text-xs">Search</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.SettingIcon {...args} />
            <span className="mt-1 text-xs">Setting</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.SkinCareIcon {...args} />
            <span className="mt-1 text-xs">SkinCare</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.SportsIcon {...args} />
            <span className="mt-1 text-xs">Sports</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.category.TvIcon {...args} />
            <span className="mt-1 text-xs">Tv</span>
          </div>
        </div>
      </div>

      {/* Contents Icons */}
      <div>
        <h2 className="text-foreground mb-4 text-2xl font-bold">Contents Icons (25개)</h2>
        <div className="grid grid-cols-10 gap-4">
          <div className="flex flex-col items-center p-2">
            <Icons.contents.BookMarkIcon {...args} />
            <span className="mt-1 text-xs">BookMark</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.CalandarIcon {...args} />
            <span className="mt-1 text-xs">Calandar</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.CalandarCheckIcon {...args} />
            <span className="mt-1 text-xs">CalandarCheck</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.CameraIcon {...args} />
            <span className="mt-1 text-xs">Camera</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.CardIcon {...args} />
            <span className="mt-1 text-xs">Card</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.ClockIcon {...args} />
            <span className="mt-1 text-xs">Clock</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.CrownIcon {...args} />
            <span className="mt-1 text-xs">Crown</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.DeleteIcon {...args} />
            <span className="mt-1 text-xs">Delete</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.DeskIcon {...args} />
            <span className="mt-1 text-xs">Desk</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.DiamondIcon {...args} />
            <span className="mt-1 text-xs">Diamond</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.DownloadIcon {...args} />
            <span className="mt-1 text-xs">Download</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.EmailIcon {...args} />
            <span className="mt-1 text-xs">Email</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.EnterIcon {...args} />
            <span className="mt-1 text-xs">Enter</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.EventIcon {...args} />
            <span className="mt-1 text-xs">Event</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.FilterIcon {...args} />
            <span className="mt-1 text-xs">Filter</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.HeartIcon {...args} />
            <span className="mt-1 text-xs">Heart</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.InfoIcon {...args} />
            <span className="mt-1 text-xs">Info</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.LanguageIcon {...args} />
            <span className="mt-1 text-xs">Language</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.LocationIcon {...args} />
            <span className="mt-1 text-xs">Location</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.MemberShipIcon {...args} />
            <span className="mt-1 text-xs">MemberShip</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.PencilSimpleIcon {...args} />
            <span className="mt-1 text-xs">PencilSimple</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.PhoneIcon {...args} />
            <span className="mt-1 text-xs">Phone</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.PlayIcon {...args} />
            <span className="mt-1 text-xs">Play</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.QrReceiptIcon {...args} />
            <span className="mt-1 text-xs">QrReceipt</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.ResetIcon {...args} />
            <span className="mt-1 text-xs">Reset</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.ShareIcon {...args} />
            <span className="mt-1 text-xs">Share</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.SoundOffIcon {...args} />
            <span className="mt-1 text-xs">SoundOff</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.SoundOnIcon {...args} />
            <span className="mt-1 text-xs">SoundOn</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.StarIcon {...args} />
            <span className="mt-1 text-xs">Star</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.StoerIcon {...args} />
            <span className="mt-1 text-xs">Stoer</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.StopIcon {...args} />
            <span className="mt-1 text-xs">Stop</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.contents.TimeIcon {...args} />
            <span className="mt-1 text-xs">Time</span>
          </div>
        </div>
      </div>

      {/* Direction Icons */}
      <div>
        <h2 className="text-foreground mb-4 text-2xl font-bold">Direction Icons (16개)</h2>
        <div className="grid grid-cols-10 gap-4">
          <div className="flex flex-col items-center p-2">
            <Icons.direction.CheckIcon {...args} />
            <span className="mt-1 text-xs">Check</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.MinusIcon {...args} />
            <span className="mt-1 text-xs">Minus</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.PlusIcon {...args} />
            <span className="mt-1 text-xs">Plus</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.SectionIcon {...args} />
            <span className="mt-1 text-xs">Section</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.BottomIcon {...args} />
            <span className="mt-1 text-xs">Bottom</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.Bottom2Icon {...args} />
            <span className="mt-1 text-xs">Bottom2</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.DashLeftIcon {...args} />
            <span className="mt-1 text-xs">DashLeft</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.DashRightIcon {...args} />
            <span className="mt-1 text-xs">DashRight</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.LeftIcon {...args} />
            <span className="mt-1 text-xs">Left</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.Left2Icon {...args} />
            <span className="mt-1 text-xs">Left2</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.RightIcon {...args} />
            <span className="mt-1 text-xs">Right</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.Right2Icon {...args} />
            <span className="mt-1 text-xs">Right2</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.SmallBottomIcon {...args} />
            <span className="mt-1 text-xs">SmallBottom</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.SmallTopIcon {...args} />
            <span className="mt-1 text-xs">SmallTop</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.TopIcon {...args} />
            <span className="mt-1 text-xs">Top</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.direction.arrow.Top2Icon {...args} />
            <span className="mt-1 text-xs">Top2</span>
          </div>
        </div>
      </div>

      {/* Dashboard Icons */}
      <div>
        <h2 className="text-foreground mb-4 text-2xl font-bold">Dashboard Icons (12개)</h2>
        <div className="grid grid-cols-10 gap-4">
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.BellIcon {...args} />
            <span className="mt-1 text-xs">Bell</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.CancellistIcon {...args} />
            <span className="mt-1 text-xs">Cancellist</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.CardIcon {...args} />
            <span className="mt-1 text-xs">Card</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.ChatCenteredTextIcon {...args} />
            <span className="mt-1 text-xs">ChatCenteredText</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.ChatsIcon {...args} />
            <span className="mt-1 text-xs">Chats</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.ClipboardTextIcon {...args} />
            <span className="mt-1 text-xs">ClipboardText</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.EventIcon {...args} />
            <span className="mt-1 text-xs">Event</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.HeadsetIcon {...args} />
            <span className="mt-1 text-xs">Headset</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.LinkIcon {...args} />
            <span className="mt-1 text-xs">Link</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.Notice1Icon {...args} />
            <span className="mt-1 text-xs">Notice1</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.TimeIcon {...args} />
            <span className="mt-1 text-xs">Time</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <Icons.dashboard.WalletIcon {...args} />
            <span className="mt-1 text-xs">Wallet</span>
          </div>
        </div>
      </div>

      {/* Other Icons */}
      <div>
        <h2 className="text-foreground mb-4 text-2xl font-bold">Other Icons</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold">CS (3개)</h3>
            <div className="grid grid-cols-10 gap-4">
              <div className="flex flex-col items-center p-2">
                <Icons.cs.MainInquiryIcon {...args} />
                <span className="mt-1 text-xs">MainInquiry</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.cs.MainMemberShipIcon {...args} />
                <span className="mt-1 text-xs">MainMemberShip</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.cs.MainShoppingIcon {...args} />
                <span className="mt-1 text-xs">MainShopping</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Menu (3개)</h3>
            <div className="grid grid-cols-10 gap-4">
              <div className="flex flex-col items-center p-2">
                <Icons.menu.AlertIcon {...args} />
                <span className="mt-1 text-xs">Alert</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.menu.CartIcon {...args} />
                <span className="mt-1 text-xs">Cart</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.menu.MyIcon {...args} />
                <span className="mt-1 text-xs">My</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">MyPage (5개)</h3>
            <div className="grid grid-cols-10 gap-4">
              <div className="flex flex-col items-center p-2">
                <Icons.mypage.FastTrackIcon {...args} />
                <span className="mt-1 text-xs">FastTrack</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.mypage.LoungeIcon {...args} />
                <span className="mt-1 text-xs">Lounge</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.mypage.ParkingIcon {...args} />
                <span className="mt-1 text-xs">Parking</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.mypage.ShowerIcon {...args} />
                <span className="mt-1 text-xs">Shower</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.mypage.ValetParkingIcon {...args} />
                <span className="mt-1 text-xs">ValetParking</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Root Level (3개)</h3>
            <div className="grid grid-cols-10 gap-4">
              <div className="flex flex-col items-center p-2">
                <Icons.CautionIcon {...args} />
                <span className="mt-1 text-xs">Caution</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.FileSearchIcon {...args} />
                <span className="mt-1 text-xs">FileSearch</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Icons.PadDelIcon {...args} />
                <span className="mt-1 text-xs">PadDel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    size: '3rem',
    fill: '#007bff',
  },
  render: (args) => (
    <div className="flex min-h-[200px] flex-wrap items-center justify-center gap-8">
      <Icons.category.CartIcon {...args} />
      <Icons.contents.StarIcon {...args} />
      <Icons.direction.CheckIcon {...args} />
      <Icons.dashboard.BellIcon {...args} />
      <Icons.category.SearchIcon {...args} />
    </div>
  ),
};
