"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InfoIcon, CheckCircleIcon } from "lucide-react";

export default function UIShowcase() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-primary-50">
          UI 컴포넌트 쇼케이스
        </h1>
        <p className="text-muted-foreground">
          설치된 Radix UI 컴포넌트들을 확인해보세요
        </p>
      </div>

      <Separator />

      {/* 버튼 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-brand-80">버튼 컴포넌트</CardTitle>
          <CardDescription>다양한 버튼 스타일들</CardDescription>
        </CardHeader>
        <CardContent className="space-x-2">
          <Button>기본 버튼</Button>
          <Button variant="secondary">보조 버튼</Button>
          <Button variant="outline">아웃라인 버튼</Button>
          <Button variant="ghost">고스트 버튼</Button>
          <Button variant="destructive">위험 버튼</Button>
        </CardContent>
      </Card>

      {/* 폼 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>폼 컴포넌트</CardTitle>
          <CardDescription>입력 필드와 선택 요소들</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">이메일</Label>
            <Input type="email" id="email" placeholder="이메일을 입력하세요" />
          </div>

          <div className="space-y-2">
            <Label>카테고리 선택</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="카테고리를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">프론트엔드</SelectItem>
                <SelectItem value="backend">백엔드</SelectItem>
                <SelectItem value="design">디자인</SelectItem>
                <SelectItem value="devops">데브옵스</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">약관에 동의합니다</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="notifications" />
            <Label htmlFor="notifications">알림 받기</Label>
          </div>
        </CardContent>
      </Card>

      {/* 표시 컴포넌트들 */}
      <Card>
        <CardHeader>
          <CardTitle>표시 컴포넌트</CardTitle>
          <CardDescription>아바타, 뱃지, 프로그레스</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">사용자 이름</p>
              <p className="text-sm text-muted-foreground">user@example.com</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <Badge>새로운</Badge>
            <Badge variant="secondary">인기</Badge>
            <Badge variant="outline">프리미엄</Badge>
            <Badge variant="destructive">중요</Badge>
          </div>

          <div className="space-y-2">
            <Label>진행률</Label>
            <Progress value={75} className="w-[60%]" />
          </div>
        </CardContent>
      </Card>

      {/* 알림 및 드롭다운 */}
      <Card>
        <CardHeader>
          <CardTitle>인터랙션 컴포넌트</CardTitle>
          <CardDescription>알림, 드롭다운 메뉴</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>정보!</AlertTitle>
            <AlertDescription>
              이것은 정보성 알림 메시지입니다.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <CheckCircleIcon className="h-4 w-4" />
            <AlertTitle>경고!</AlertTitle>
            <AlertDescription>중요한 경고 메시지입니다.</AlertDescription>
          </Alert>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">메뉴 열기</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>내 계정</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>프로필</DropdownMenuItem>
              <DropdownMenuItem>설정</DropdownMenuItem>
              <DropdownMenuItem>도움말</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>로그아웃</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>

      {/* 탭 컴포넌트 */}
      <Card>
        <CardHeader>
          <CardTitle>탭 컴포넌트</CardTitle>
          <CardDescription>콘텐츠를 탭으로 구성하기</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">계정</TabsTrigger>
              <TabsTrigger value="password">비밀번호</TabsTrigger>
              <TabsTrigger value="settings">설정</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="text-sm text-muted-foreground">
                계정 관련 설정을 여기서 변경할 수 있습니다.
              </p>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-sm text-muted-foreground">
                비밀번호를 변경하려면 여기를 사용하세요.
              </p>
            </TabsContent>
            <TabsContent value="settings">
              <p className="text-sm text-muted-foreground">
                일반 설정을 관리할 수 있습니다.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
