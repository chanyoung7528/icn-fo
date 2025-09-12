# 아이콘 컴포넌트 사용법 📦

모든 **100개의 Vue 아이콘**이 **TSX(React/TypeScript)**로 성공적으로 변환되었습니다!

## 🏗️ 아이콘 구조

```
shared/assets/icon/
├── category/         # 카테고리 아이콘들 (20개)
├── contents/         # 콘텐츠 관련 아이콘들 (21개)
│   ├── eye/         # 눈 관련 (2개)
│   └── view/        # 뷰 관련 (2개)
├── cs/              # 고객서비스 (3개)
├── dashboard/       # 대시보드 (12개)
├── direction/       # 방향/동작 (16개)
│   └── arrow/       # 화살표 (12개)
├── feedback/        # 피드백 (1개)
├── form/            # 폼 관련 (1개)
├── member/          # 멤버 (2개)
├── menu/            # 메뉴 (3개)
├── mypage/          # 마이페이지 (5개)
├── setting/         # 설정 (1개)
└── [루트 레벨]       # 기타 (3개)
```

## 🎯 사용법

### 1. 개별 아이콘 import

```tsx
// 카테고리 아이콘
import { BabyIcon, BellIcon, CartIcon } from "@/shared/assets/icon/category";

// 콘텐츠 아이콘
import {
  HeartIcon,
  StarIcon,
  BookMarkIcon,
} from "@/shared/assets/icon/contents";

// 방향 아이콘
import { CheckIcon, PlusIcon, MinusIcon } from "@/shared/assets/icon/direction";

function MyComponent() {
  return (
    <div>
      <BabyIcon size="2rem" fill="#333" />
      <HeartIcon size="1.5rem" fill="red" />
      <CheckIcon type="bold" size="1rem" fill="green" />
    </div>
  );
}
```

### 2. 네임스페이스 import

```tsx
// 전체 카테고리 아이콘들을 한 번에
import { category } from "@/shared/assets/icon";

function CategoryMenu() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <category.BabyIcon />
      <category.FashionIcon />
      <category.FoodIcon />
      <category.DrinkIcon />
    </div>
  );
}
```

### 3. 전체 아이콘 import

```tsx
// 모든 아이콘들에 접근
import * as Icons from "@/shared/assets/icon";

function IconShowcase() {
  return (
    <div>
      {/* 카테고리 */}
      <Icons.category.BabyIcon />
      <Icons.category.BellIcon />

      {/* 콘텐츠 */}
      <Icons.contents.HeartIcon />
      <Icons.contents.StarIcon />

      {/* 방향 */}
      <Icons.direction.CheckIcon type="bold" />
      <Icons.direction.arrow.LeftIcon />

      {/* 대시보드 */}
      <Icons.dashboard.WalletIcon />

      {/* 루트 레벨 */}
      <Icons.CautionIcon />
    </div>
  );
}
```

## 🔧 아이콘 Props

모든 아이콘은 다음과 같은 공통 props를 지원합니다:

```tsx
interface IconProps {
  size?: string; // 기본값: "2.4rem"
  fill?: string; // 기본값: "#222"
  type?: "regular" | "bold"; // 일부 아이콘만 지원
}
```

### 예시

```tsx
// 기본 사용
<BabyIcon />

// 크기와 색상 커스터마이징
<BabyIcon size="3rem" fill="#007bff" />

// 타입이 있는 아이콘 (체크, 일부 아이콘만)
<CheckIcon type="bold" size="1.5rem" fill="green" />
```

## 📋 아이콘 목록

### Category (카테고리) - 20개

- `BabyIcon`, `BagIcon`, `BellIcon`, `BodyHairIcon`, `CartIcon`
- `DeleteIcon`, `DrinkIcon`, `FashionIcon`, `FoodIcon`, `HomeIcon`
- `JewelryIcon`, `MakeupIcon`, `MenuIcon`, `PriceIcon`, `QrIcon`
- `SearchIcon`, `SettingIcon`, `SkinCareIcon`, `SportsIcon`, `TvIcon`

### Contents (콘텐츠) - 25개

- `BookMarkIcon`, `CalandarIcon`, `CalandarCheckIcon`, `CameraIcon`, `CardIcon`
- `ClockIcon`, `CrownIcon`, `DeleteIcon`, `DeskIcon`, `DiamondIcon`
- `DownloadIcon`, `EmailIcon`, `EnterIcon`, `EventIcon`, `FilterIcon`
- `HeartIcon`, `InfoIcon`, `LanguageIcon`, `LocationIcon`, `MemberShipIcon`
- `PencilSimpleIcon`, `PhoneIcon`, `PlayIcon`, `QrReceiptIcon`, `ResetIcon`
- `ShareIcon`, `SoundOffIcon`, `SoundOnIcon`, `StarIcon`, `StoerIcon`
- `StopIcon`, `TimeIcon`

### Direction (방향/동작) - 16개

- `CheckIcon`, `MinusIcon`, `PlusIcon`, `SectionIcon`
- **Arrow**: `BottomIcon`, `Bottom2Icon`, `DashLeftIcon`, `DashRightIcon`
- `LeftIcon`, `Left2Icon`, `RightIcon`, `Right2Icon`
- `SmallBottomIcon`, `SmallTopIcon`, `TopIcon`, `Top2Icon`

### Dashboard (대시보드) - 12개

- `BellIcon`, `CancellistIcon`, `CardIcon`, `ChatCenteredTextIcon`
- `ChatsIcon`, `ClipboardTextIcon`, `EventIcon`, `HeadsetIcon`
- `LinkIcon`, `Notice1Icon`, `TimeIcon`, `WalletIcon`

### 기타

- **CS**: `MainInquiryIcon`, `MainMemberShipIcon`, `MainShoppingIcon`
- **Feedback**: `AlarmIcon`
- **Form**: `ClearIcon`
- **Member**: `Join1Icon`, `Join2Icon`
- **Menu**: `AlertIcon`, `CartIcon`, `MyIcon`
- **MyPage**: `FastTrackIcon`, `LoungeIcon`, `ParkingIcon`, `ShowerIcon`, `ValetParkingIcon`
- **Setting**: `InfoCircleIcon`
- **Root**: `CautionIcon`, `FileSearchIcon`, `PadDelIcon`

## 🎨 스타일링 예시

```tsx
// Tailwind CSS와 함께 사용
<div className="flex items-center space-x-2">
  <HeartIcon size="1.25rem" fill="currentColor" />
  <span>좋아요</span>
</div>

// 호버 효과
<button className="hover:text-red-500 transition-colors">
  <HeartIcon size="1.5rem" fill="currentColor" />
</button>

// 다크모드 대응
<BellIcon
  size="2rem"
  fill="var(--foreground)"
  className="text-foreground"
/>
```

## ✨ 장점

1. **100% TypeScript**: 완전한 타입 안정성
2. **Tree-shaking**: 사용한 아이콘만 번들에 포함
3. **일관된 API**: 모든 아이콘이 동일한 props 인터페이스
4. **FSD 호환**: Feature-Sliced Design 구조와 완벽 호환
5. **커스터마이징**: size, fill, type으로 완전 제어
6. **성능 최적화**: SVG 기반으로 가볍고 확장 가능

---

**🎉 이제 100개의 아이콘을 React/TypeScript 프로젝트에서 자유롭게 사용하세요!**
