import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center lg:px-20">
      <main className="max-w-[1200px] w-full px-4 fade-up top-0">
        <div className="hero bg-gray-50 rounded-4xl px-8 py-8 border border-gray-200">
          <p className="animate-pulse inline-block bg-white px-4 py-2 rounded-full font-bold text-sm text-gray-600 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
            <FontAwesomeIcon icon={faCircleUser} /> Welcome to Profolio
          </p>
          <Image src="/profile.jpg" alt="image" width={200} height={200} loading="eager" priority className="object-cover rounded-full mx-auto items-center justify-center w-[250px] h-[250px] xl:w-[200px] xl:h-[200px] my-6 xl:my-0 border border-gray-200 shadow-[0_1px_12px_rgba(0,0,0,0.06)] xl:absolute top-10 right-20" />
          <h1 className="text-4xl font-bold text-sky-800 mt-4">Chonlaphat <span className="text-sky-400">Aemnont</span></h1>
          <p className="text-gray-400 mt-2">Website นี้สร้างมาเพื่อแนะนำตัวและแสดงผลงานกับโปรเจคที่เคยทำ</p>
          <p className="text-gray-400 xl:my-0 my-2">ผมยังเขียนโปรแกรมไม่ค่อยเก่งมากนักแต่จะเรียนรู้และพัฒนาฝีมือไปเรื่อยๆ เพื่ออนาคตที่รออยู่</p>
          <div className="flex gap-2 mt-6">
            <Link href="/about" className="text-gray-500 bg-gray-100 px-5 py-3 border border-gray-200 rounded-xl hover:bg-gray-200 hover:text-gray-800 duration-200">เกี่ยวกับผม <FontAwesomeIcon icon={faArrowRightLong} /></Link>
            <Link href="/project" className="text-white px-5 py-3 rounded-xl hover:from-sky-600 hover:to-sky-400 shadow-[0_1px_12px_rgba(0,0,0,0.06)] bg-linear-45 from-sky-500 to-sky-300">ผลงาน <FontAwesomeIcon icon={faArrowRightLong} /></Link>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 p-4">
        <p className="text-gray-500 text-sm">&copy; 2026 Chonlaphat. All rights reserved.</p>
      </footer>
    </div>
  );
}