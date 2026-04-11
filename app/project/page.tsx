import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
    return(
        <div className="min-h-screen flex flex-col xl:pt-25 pt-20 lg:px-10">
            {/* <h1 className="text-5xl font-bold text-gray-400 fade-up">Comming soon...</h1> */}

            <main className="max-w-[1200px] w-full px-4 fade-up mx-auto">

                <h1 className="font-bold text-2xl bg-white px-6 text-gray-600 py-3 shadow-[0px_1px_12px_rgba(0,0,0,0.06)] rounded-full">PROJECT</h1>

                <div className="lg:grid grid-cols-3 mt-5">

                    <div className="bg-white rounded-xl overflow-hidden shadow-[0px_1px_12px_rgba(0,0,0,0.06)]">
                        <div className="relative">
                            <img src="/project_01.png" alt="image" className="w-full h-[250px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent bg-black/20" />
                            <p className="text-[12px] absolute top-2 right-2 px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">coming soon...</p>
                        </div>
                        <div className="px-6 py-3">
                            <h1 className="text-xl font-bold">Satrichaiyaphum School</h1>
                            <p className="text-gray-300 text-sm mb-2">เว็บไซต์ของโรงเรียนสตรีชัยภูมิ</p>
                            <p className="text-gray-500 text-sm">เว็บไซต์ Design ใหม่ปรับเปลี่ยนรูปแบบให้ใช้ง่ายขึ้นและรองรับทุกหน้าจอเนื่องจากรูปแบบเก่าใช้ยาก</p>
                            <div className="flex gap-2 text-sm mt-2">
                                <p className="flex gap-1 items-center border border-gray-200 px-2 py-1 text-[11px] text-gray-500 bg-gray-50 rounded-full"><FontAwesomeIcon icon={faCircle} className="text-[5px]"/> Next.js</p>
                                <p className="flex gap-1 items-center border border-gray-200 px-2 py-1 text-[11px] text-gray-500 bg-gray-50 rounded-full"><FontAwesomeIcon icon={faCircle} className="text-[5px]"/> Node.js</p>
                                <p className="flex gap-1 items-center border border-gray-200 px-2 py-1 text-[11px] text-gray-500 bg-gray-50 rounded-full"><FontAwesomeIcon icon={faCircle} className="text-[5px]"/> MongoDB</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </main>

            <footer className="absolute bottom-0 p-4 right-0 left-0 text-center">
                <p className="text-gray-500 text-sm">&copy; 2026 Chonlaphat. All rights reserved.</p>
            </footer>
        </div>
    );
}