'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Category from '@/components/Category/Category';

import NumberPagination from '@/components/NumberPagination';
import { CertificateTable } from '@/lib/common/CertificateTable';
import SearchBar from '@/components/SearchBar/SearchBar';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { NumberInput } from '@/lib/common/NumberInput';
=======
>>>>>>> 3802175 (feature: SearchBar 컴포넌트 추가)
=======
import { NumberInput } from '@/lib/common/NumberInput';
>>>>>>> 95554a4 (feat: NumberInput 컴포넌트 추가)
=======
import { NumberInput } from '@/lib/common/NumberInput';
=======
>>>>>>> 8be9b4a (feature: SearchBar 컴포넌트 추가)
>>>>>>> 228252a (feature: SearchBar 컴포넌트 추가)

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h1 className="text-display-desktop md:text-display-mobile font-extrabold">제목</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">홈</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/components">하위 페이지</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="bg-neutral-10 border shadow-1 stroke-normal rounded-10 font-semibold">
        안녕하세요 마스터 플랜 비 입니다
        <Button variant="third" size="md" disabled>
          비활성화 버튼
        </Button>
        <Button
          variant="third"
          size="md"
          className="text-body-large-desktop font-[400] w-[26px] h-[26px] p-2 text-center border-none overflow-hidden border-neutral-10 bg-neutral-0 text-neutral-85"
        >
          활성화 버튼
        </Button>
      </main>
      <NumberPagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
      <CertificateTable />
      <div className="w-px h-6 bg-neutral-30" />
      <Category />
<<<<<<< HEAD
      <div className="flex items-center justify-center">
        <NumberInput min={0} max={100} defaultValue={0} />
      </div>
=======
>>>>>>> 3802175 (feature: SearchBar 컴포넌트 추가)
      <SearchBar type="main" />
      <SearchBar type="default" />
      <div className="flex items-center justify-center">
        <NumberInput min={0} max={100} defaultValue={0} />
      </div>
      <SearchBar type="main" />
      <SearchBar type="default" />
    </>
  );
}
