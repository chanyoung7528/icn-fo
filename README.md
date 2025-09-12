# ICN-FO - FSD 아키텍처 프로젝트 ✨

Next.js 15 + App Router와 FSD(Feature-Sliced Design) 아키텍처로 구성된 현대적인 웹 애플리케이션입니다.

## 🏗️ 아키텍처 구조

```
icn-fo/
├── app/              # Next.js App Router (라우팅)
│   ├── layout.tsx    # 루트 레이아웃
│   ├── page.tsx      # 홈페이지
│   └── providers.tsx # 전역 프로바이더
├── widgets/          # 복합 UI 블록
│   └── home/         # 홈페이지 위젯
├── features/         # 비즈니스 기능 (준비됨)
├── entities/         # 비즈니스 엔티티 (준비됨)
└── shared/           # 공통 리소스
    ├── ui/           # 35개 UI 컴포넌트
    ├── lib/          # 유틸리티 함수
    ├── config/       # 설정 파일
    └── assets/       # 스타일, 이미지
```

## 🎯 주요 특징

- **FSD 아키텍처**: 확장성과 유지보수성을 고려한 구조
- **Next.js 15 + App Router**: 최신 React 19와 함께
- **35개 UI 컴포넌트**: shadcn/ui + Radix UI 기반
- **TypeScript**: 완전한 타입 안정성
- **Tailwind CSS**: 유틸리티 퍼스트 스타일링
- **React Query**: 서버 상태 관리 준비됨

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build
```

### 개발 서버

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📦 설치된 UI 컴포넌트

총 **35개의 Radix UI 기반 컴포넌트**가 포함되어 있습니다:

### 기본 컴포넌트

- Button, Input, Label, Textarea
- Card, Badge, Avatar, Alert

### 폼 컴포넌트

- Form, Select, Checkbox, Switch
- RadioGroup, Slider, Calendar

### 레이아웃 컴포넌트

- Separator, Tabs, Accordion
- Sheet, Dialog, Popover

### 네비게이션

- NavigationMenu, Menubar, Pagination
- DropdownMenu, Command

### 기타

- Table, Progress, Skeleton, Tooltip
- ScrollArea, AspectRatio, Toggle

## 🔗 Import 예시

```typescript
// FSD 레이어별 import
import { Button, Card, Input } from "@/shared/ui";
import { HomePage } from "@/widgets/home";
import { useAuth } from "@/features/auth"; // 준비됨
import { User } from "@/entities/user"; // 준비됨
```

## 📚 문서

- [FSD 아키텍처 가이드](./shared/config/fsd.md)
- [마이그레이션 문서](./FSD-MIGRATION.md)
- [컴포넌트 목록](./COMPONENTS.md)

## 🛠️ 개발 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui + Radix UI
- **State Management**: React Query (Tanstack Query)
- **Package Manager**: pnpm
- **Architecture**: FSD (Feature-Sliced Design)

## 🎯 다음 단계

FSD 구조를 활용하여 다음 기능들을 개발할 수 있습니다:

1. **features/auth** - 로그인, 회원가입 기능
2. **features/dashboard** - 대시보드 기능
3. **entities/user** - 사용자 관련 비즈니스 로직
4. **shared/api** - API 클라이언트 추가

## 📋 Git 컨벤션

### 커밋 메시지 형식

```
<타입>(<범위>): <제목>

<본문>

<하단>
```

### 커밋 타입

| 타입       | 설명                                   | 예시                                        |
| ---------- | -------------------------------------- | ------------------------------------------- |
| `feat`     | 새로운 기능 추가                       | `feat(auth): 로그인 기능 구현`              |
| `fix`      | 버그 수정                              | `fix(ui): 체크박스 스타일 오류 수정`        |
| `docs`     | 문서 수정                              | `docs: README에 설치 가이드 추가`           |
| `style`    | 코드 스타일 변경 (포매팅, 세미콜론 등) | `style(shared): Prettier 적용`              |
| `refactor` | 코드 리팩토링                          | `refactor(widgets): 홈페이지 컴포넌트 분리` |
| `perf`     | 성능 개선                              | `perf(ui): 이미지 최적화`                   |
| `test`     | 테스트 추가/수정                       | `test(features): 인증 유닛 테스트 추가`     |
| `chore`    | 빌드, 설정 변경                        | `chore: Tailwind CSS v4 설정`               |
| `ci`       | CI/CD 설정                             | `ci: GitHub Actions 워크플로우 추가`        |

### FSD 레이어별 범위

| 범위       | 설명                    | 예시                                |
| ---------- | ----------------------- | ----------------------------------- |
| `app`      | Next.js App Router 관련 | `feat(app): 루트 레이아웃 수정`     |
| `widgets`  | 복합 UI 블록            | `feat(widgets): 대시보드 위젯 추가` |
| `features` | 비즈니스 기능           | `feat(features): 사용자 인증 기능`  |
| `entities` | 비즈니스 엔티티         | `feat(entities): User 모델 추가`    |
| `shared`   | 공통 리소스             | `fix(shared): utils 함수 버그 수정` |
| `ui`       | UI 컴포넌트             | `feat(ui): Dialog 컴포넌트 추가`    |

### 브랜치 네이밍

```
<타입>/<이슈번호>-<간단한-설명>
```

**예시:**

- `feat/123-user-authentication`
- `fix/456-checkbox-styling`
- `refactor/789-fsd-structure`
- `chore/update-dependencies`

### 브랜치 타입

- `feat/` - 새로운 기능
- `fix/` - 버그 수정
- `refactor/` - 리팩토링
- `chore/` - 기타 작업
- `hotfix/` - 긴급 수정

### 커밋 예시

#### 좋은 예시

```bash
# 기능 추가
feat(features): 사용자 로그인 기능 구현

- JWT 토큰 기반 인증 구현
- 로그인 폼 유효성 검사 추가
- 로그인 실패 시 에러 메시지 표시

Resolves: #123

# 버그 수정
fix(ui): Checkbox 컴포넌트 스타일 오류 수정

Tailwind CSS v4 색상 변수 누락으로 인한 스타일 미적용 문제 해결

Fixes: #456

# 리팩토링
refactor(widgets): 홈페이지 컴포넌트 구조 개선

- UI 로직을 별도 함수로 분리
- Props 타입 정의 개선
- 컴포넌트 재사용성 향상
```

#### ❌ 나쁜 예시

```bash
# 너무 간단하고 불명확
fix: 버그 수정

# 타입 누락
체크박스 스타일 수정

# 범위가 모호
feat: 새로운 기능 추가
```

### Pull Request 규칙

#### PR 제목 형식

```
[타입] 작업 내용 요약 (#이슈번호)
```

#### PR 템플릿

```markdown
## 📋 작업 내용

- [ ] 작업 1
- [ ] 작업 2

## 🧪 테스트

- [ ] 로컬 테스트 완료
- [ ] 빌드 오류 없음

## 📸 스크린샷 (UI 변경 시)

<!-- 스크린샷 첨부 -->

## 🔗 관련 이슈

Closes #123
```

## 📄 라이센스

MIT License

---
