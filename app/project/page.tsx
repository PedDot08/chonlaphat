import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
    return(
        <div className="min-h-screen flex flex-col xl:pt-25 pt-20 lg:px-10">
            {/* <h1 className="text-5xl font-bold text-gray-400 fade-up">Comming soon...</h1> */}

            <main className="max-w-[1200px] w-full px-4 fade-up mx-auto">

                <h1 className="font-bold text-2xl bg-white px-6 text-gray-600 py-3 shadow-[0px_1px_12px_rgba(0,0,0,0.06)] rounded-full">PROJECT</h1>
                <p className="py-5 px-6 text-red-500 font-bold">*** ทั้งหมดนี้เป็นเพียงการออกแบบและวางระบบคราวๆไว้แต่ยังไม่สามารถนำมาใช้จริงได้ ***</p>

                <div className="lg:grid grid-cols-3 mt-2 gap-5">

                    <div className="bg-white rounded-xl overflow-hidden shadow-[0px_1px_12px_rgba(0,0,0,0.06)] mb-5">
                        <div className="relative">
                            <img src="/image (1).png" alt="image" className="w-full h-[250px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent bg-black/20" />
                            <p className="text-[12px] absolute top-2 right-2 px-2 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">Not Active</p>
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

                    <div className="bg-white rounded-xl overflow-hidden shadow-[0px_1px_12px_rgba(0,0,0,0.06)] mb-5">
                        <div className="relative">
                            <img src="/image (2).png" alt="image" className="w-full h-[250px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent bg-black/20" />
                            <p className="text-[12px] absolute top-2 right-2 px-2 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">Not Active</p>
                        </div>
                        <div className="px-6 py-3">
                            <h1 className="text-xl font-bold">MeeGit</h1>
                            <p className="text-gray-300 text-sm mb-2">แจ้งข่าวสารการแข่งขันหรือกิจกรรม และหาเพื่อนร่วมแข่งขัน</p>
                            <p className="text-gray-500 text-sm">เว็บไซต์นี้ผมสร้างขึ้นมาเพื่อเอาไว้ให้นักเรียนภายในโรงเรียนหรือนอกโรงเรียนมาร่วมกันแชร์หรือหาการแข่งขันต่างๆ เพื่อนำมาใส่ใน Portfoilo</p>
                            <div className="flex gap-2 text-sm mt-2">
                                <p className="flex gap-1 items-center border border-gray-200 px-2 py-1 text-[11px] text-gray-500 bg-gray-50 rounded-full"><FontAwesomeIcon icon={faCircle} className="text-[5px]"/> Next.js</p>
                                <p className="flex gap-1 items-center border border-gray-200 px-2 py-1 text-[11px] text-gray-500 bg-gray-50 rounded-full"><FontAwesomeIcon icon={faCircle} className="text-[5px]"/> Node.js</p>
                                <p className="flex gap-1 items-center border border-gray-200 px-2 py-1 text-[11px] text-gray-500 bg-gray-50 rounded-full"><FontAwesomeIcon icon={faCircle} className="text-[5px]"/> MongoDB</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-[0px_1px_12px_rgba(0,0,0,0.06)] mb-5">
                        <div className="relative">
                            <img src="/image (3).png" alt="image" className="w-full h-[250px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent bg-black/20" />
                            <p className="text-[12px] absolute top-2 right-2 px-2 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">Not Active</p>
                        </div>
                        <div className="px-6 py-3">
                            <h1 className="text-xl font-bold">IMZ Team</h1>
                            <p className="text-gray-300 text-sm mb-2">เว็บไซต์ Community เกม minecraft</p>
                            <p className="text-gray-500 text-sm">สำหรับประชาสัมพันธ์ข่าวสารหรือกิจกรรมต่างๆของ Team</p>
                            <div className="flex gap-2 text-sm mt-2">
                                <p className="flex gap-1 items-center border border-gray-200 px-2 py-1 text-[11px] text-gray-500 bg-gray-50 rounded-full"><FontAwesomeIcon icon={faCircle} className="text-[5px]"/> Next.js</p>
                                <p className="flex gap-1 items-center border border-gray-200 px-2 py-1 text-[11px] text-gray-500 bg-gray-50 rounded-full"><FontAwesomeIcon icon={faCircle} className="text-[5px]"/> Node.js</p>
                                <p className="flex gap-1 items-center border border-gray-200 px-2 py-1 text-[11px] text-gray-500 bg-gray-50 rounded-full"><FontAwesomeIcon icon={faCircle} className="text-[5px]"/> MongoDB</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </main>

            <footer className="lg:absolute lg:bottom-0 p-4 lg:right-0 lg:left-0 text-center">
                <p className="text-gray-500 text-sm">&copy; 2026 Chonlaphat. All rights reserved.</p>
            </footer>
        </div>
    );
}
