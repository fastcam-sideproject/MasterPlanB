import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-5 text-neutral-50">

      <div className="flex items-start justify-between p-9 text-label-small-desktop">
        <div>
          <div className="flex gap-4 px-4 items-center">
            <Image width={20} height={20} src="/icons/category/art-design.svg" alt="카테고리 이미지" />
            <span className="text-label-medium-desktop">Master Plan B</span>
          </div>
          <p>
            <span className="relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-neutral-300 px-4">
              상호
            </span> <span className="px-4">마스터플랜비</span><br />
            <span className="relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-neutral-300 px-4">
              대표자 명
            </span><span className="px-4">김시환</span><br />
            <span className="relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-neutral-300 px-4">
              사업자 등록번호
            </span> <span className="px-4">580 - 46 - 01046</span><br />
            <span className="relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[1px] after:bg-neutral-300 px-4">
              사업자 소재지
            </span> <span className="px-4">Seoul, Gangnam District, Teheran-ro, 231, Centerfield</span><br />
          </p>
        </div>

        <div className="grid grid-cols-[1fr_1px_1fr_1px_1fr] justify-items-center gap-4 px-4">
          <div>개인정보처리방침</div>
          <div className="bg-neutral-30 w-full h-full"></div>
          <div>이용약관</div>
          <div className="bg-neutral-30 w-full h-full"></div>
          <div>결제정보</div>
        </div>

        <div>
          <div>고객센터</div>
          <div>masterplanb@gmail.com</div>
        </div>
      </div>

    </footer>
  );
}