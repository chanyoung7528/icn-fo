# FSD (Feature-Sliced Design) 아키텍처

이 프로젝트는 FSD(Feature-Sliced Design) 아키텍처를 따릅니다.

## 🏗️ 레이어 구조

### 1. **app** - 애플리케이션 초기화 (Next.js App Router)

```
app/
├── layout.tsx        # 루트 레이아웃 설정
├── page.tsx         # 홈페이지 라우트
├── providers.tsx    # 전역 프로바이더 (React Query, Theme 등)
├── loading.tsx      # 로딩 UI
└── not-found.tsx    # 404 페이지
```

### 2. **widgets** - 복합 UI 블록

```
widgets/
├── home/
│   ├── index.ts     # 홈페이지 export
│   └── ui.tsx       # 홈페이지 UI 컴포넌트
└── [widget]/        # 기타 복합 UI 블록들
```

### 3. **features** - 비즈니스 기능

```
features/
├── auth/            # 인증 기능
├── dashboard/       # 대시보드 기능
└── [feature]/       # 기타 기능들
```

### 4. **entities** - 비즈니스 엔티티

```
entities/
├── user/           # 사용자 엔티티
├── product/        # 제품 엔티티
└── [entity]/       # 기타 엔티티들
```

### 5. **shared** - 공통 리소스

```
shared/
├── ui/             # 재사용 가능한 UI 컴포넌트 (35개)
├── lib/            # 유틸리티 함수들
├── config/         # 설정 파일들
├── assets/         # 정적 자산 (스타일, 이미지 등)
└── api/            # API 클라이언트
```

## 📐 세그먼트 구조

각 슬라이스는 다음 세그먼트들로 구성될 수 있습니다:

- **ui/** - React 컴포넌트
- **model/** - 비즈니스 로직, 상태 관리
- **api/** - API 호출 및 데이터 페칭
- **lib/** - 유틸리티 함수
- **config/** - 설정
- **types/** - TypeScript 타입 정의

## 🔗 Import 규칙

### 절대 경로 alias

```typescript
// FSD 레이어별 alias
import { Button } from "@/shared/ui/button";
import { HomePage } from "@/widgets/home";
import { useAuth } from "@/features/auth";
import { User } from "@/entities/user";
```

### 의존성 규칙

상위 레이어는 하위 레이어를 import할 수 있지만, 그 반대는 불가능합니다:

```
app -> widgets -> features -> entities -> shared
```

예시:

- ✅ `widgets`에서 `features`, `entities`, `shared` import 가능
- ✅ `features`에서 `entities`, `shared` import 가능
- ❌ `shared`에서 `features` import 불가
- ❌ `entities`에서 `features` import 불가

## 🎯 FSD 장점

1. **예측 가능성**: 일관된 구조로 코드를 쉽게 찾을 수 있음
2. **확장성**: 새로운 기능을 추가하기 쉬움
3. **유지보수성**: 명확한 책임 분리
4. **재사용성**: 공통 컴포넌트와 로직의 체계적인 관리
5. **팀 협업**: 표준화된 구조로 팀원 간 협업 향상

## 📚 참고 자료

- [Feature-Sliced Design 공식 문서](https://feature-sliced.design/)
- [FSD GitHub](https://github.com/feature-sliced/documentation)
