# 설치된 UI 컴포넌트 목록

이 프로젝트에는 **35개의 shadcn/ui 컴포넌트**가 설치되어 있습니다. 모든 컴포넌트는 Radix UI를 기반으로 하며 Tailwind CSS로 스타일링되어 있습니다.

## 📦 설치된 컴포넌트들

### 기본 컴포넌트

- **Button** - 다양한 스타일의 버튼 (기본, 보조, 아웃라인, 고스트, 위험)
- **Input** - 텍스트 입력 필드
- **Label** - 폼 레이블
- **Textarea** - 다중 행 텍스트 입력

### 레이아웃 컴포넌트

- **Card** - 콘텐츠 카드 (Header, Content, Footer)
- **Separator** - 구분선
- **AspectRatio** - 가로세로 비율 유지
- **ScrollArea** - 스크롤 가능한 영역

### 네비게이션

- **Tabs** - 탭 인터페이스
- **NavigationMenu** - 네비게이션 메뉴
- **Pagination** - 페이지네이션
- **Menubar** - 메뉴바

### 폼 컴포넌트

- **Form** - 폼 관리 (React Hook Form 연동)
- **Select** - 드롭다운 선택
- **Checkbox** - 체크박스
- **RadioGroup** - 라디오 버튼 그룹
- **Switch** - 토글 스위치
- **Slider** - 범위 슬라이더
- **Calendar** - 날짜 선택기

### 표시 컴포넌트

- **Badge** - 상태 표시 뱃지
- **Avatar** - 사용자 아바타
- **Progress** - 진행률 표시
- **Skeleton** - 로딩 스켈레톤

### 오버레이 컴포넌트

- **Dialog** - 모달 다이얼로그
- **Sheet** - 사이드 시트
- **Popover** - 팝오버
- **HoverCard** - 호버 카드
- **Tooltip** - 툴팁

### 인터랙션 컴포넌트

- **DropdownMenu** - 드롭다운 메뉴
- **Command** - 커맨드 팔레트
- **Alert** - 알림 메시지
- **Toggle** - 토글 버튼
- **Collapsible** - 접기/펼치기
- **Accordion** - 아코디언

### 데이터 표시

- **Table** - 데이터 테이블

### 알림

- **Sonner** - 토스트 알림 (toast의 개선된 버전)

## 🚀 사용법

### 개별 컴포넌트 import

\`\`\`tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
\`\`\`

### 통합 index 파일 사용

\`\`\`tsx
import { Button, Card, CardContent } from '@/components/ui'
\`\`\`

## 📁 폴더 구조

\`\`\`
components/
├── ui/
│ ├── accordion.tsx
│ ├── alert.tsx
│ ├── aspect-ratio.tsx
│ ├── avatar.tsx
│ ├── badge.tsx
│ ├── button.tsx
│ ├── calendar.tsx
│ ├── card.tsx
│ ├── checkbox.tsx
│ ├── collapsible.tsx
│ ├── command.tsx
│ ├── dialog.tsx
│ ├── dropdown-menu.tsx
│ ├── form.tsx
│ ├── hover-card.tsx
│ ├── index.ts # 모든 컴포넌트 export
│ ├── input.tsx
│ ├── label.tsx
│ ├── menubar.tsx
│ ├── navigation-menu.tsx
│ ├── pagination.tsx
│ ├── popover.tsx
│ ├── progress.tsx
│ ├── radio-group.tsx
│ ├── scroll-area.tsx
│ ├── select.tsx
│ ├── separator.tsx
│ ├── sheet.tsx
│ ├── skeleton.tsx
│ ├── slider.tsx
│ ├── sonner.tsx
│ ├── switch.tsx
│ ├── table.tsx
│ ├── tabs.tsx
│ ├── textarea.tsx
│ ├── toggle.tsx
│ └── tooltip.tsx
├── ui-showcase.tsx # 컴포넌트 데모
└── ...
\`\`\`

## 🎨 스타일링

- **스타일**: New York 스타일 적용
- **테마**: Neutral 베이스 컬러
- **CSS 변수**: 활성화
- **아이콘**: Lucide React

## 📖 참고사항

1. 모든 컴포넌트는 TypeScript로 타입이 정의되어 있습니다
2. Tailwind CSS를 사용하여 쉽게 커스터마이징 가능합니다
3. React Server Components(RSC)를 지원합니다
4. 접근성(a11y)을 고려하여 제작되었습니다

## 🔗 추가 리소스

- [shadcn/ui 공식 문서](https://ui.shadcn.com/)
- [Radix UI 문서](https://www.radix-ui.com/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
