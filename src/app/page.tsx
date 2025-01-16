import Footer from "@/src/components/Footer";
import Image from "next/image";
import FileSvg from "@/src/image/file.svg";

const PageApp = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-5 h-5">
            <Image src={FileSvg} alt="file icon" layout="fill" />
          </div>
          [產業與企業人才資料庫] 隱私權政策 (備份)
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default PageApp;
