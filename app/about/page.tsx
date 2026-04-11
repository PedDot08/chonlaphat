import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser, faCakeCandles, faGraduationCap, faEnvelope, faStar, faCircle, faCodeMerge } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col xl:pt-25 pt-20 lg:px-10">
            <main className="max-w-[1200px] w-full px-4 fade-up mx-auto">
                <h1 className="font-bold text-2xl bg-white px-6 text-gray-600 py-3 shadow-[0px_1px_12px_rgba(0,0,0,0.06)] rounded-full">ABOUT ME</h1>
                <div className="xl:absolute right-20 mt-5 xl:mt-0 top-20 w-[300px] h-[300px] items-center justify-center mx-auto xl:w-[650px] xl:h-[650px] rounded-4xl overflow-hidden">
                    <img src="/profile2.jpg" alt="image" className="w-full h-full object-top-left hover:scale-110 duration-200 object-cover shadow-[0px_1px_12px_rgba(0,0,0,0.06)]" />
                </div>
                <div className="rounded-xl mt-5 mx-6 jutify-center items-center xl:w-[900px]">
                    <p className="text-sm text-gray-500">PROFILE <FontAwesomeIcon icon={faCircleUser} /></p>
                    <div className="w-full xl:w-[300px] mt-2 border border-gray-100 rounded-2xl bg-white px-5 py-4">
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <FontAwesomeIcon icon={faUser} className="text-sky-500 p-2 bg-sky-100 rounded-md" />
                            FULL NAME
                        </p>
                        <p className="mt-2 text-xl">Chonalphat Aemnont</p>
                    </div>
                    <div className="w-full xl:w-[300px] mt-2 border border-gray-100 rounded-2xl bg-white px-5 py-4">
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <FontAwesomeIcon icon={faCakeCandles} className="text-sky-500 p-2 bg-sky-100 rounded-md" />
                            AGE
                        </p>
                        <p className="mt-2 text-xl">17 <span className="text-gray-400 text-sm">years old</span></p>
                    </div>
                    <div className="w-full xl:w-[300px] mt-2 border border-gray-100 rounded-2xl bg-white px-5 py-4">
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <FontAwesomeIcon icon={faGraduationCap} className="text-sky-500 p-2 bg-sky-100 rounded-md" />
                            SCHOOL
                        </p>
                        <p className="mt-2 text-xl">Satrichaiyaphum School</p>
                    </div>
                    <div className="w-full xl:w-[300px] mt-2 border border-gray-100 rounded-2xl bg-white px-5 py-4">
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-sky-500 p-2 bg-sky-100 rounded-md" />
                            EMAIL
                        </p>
                        <p className="mt-2 text-xl">petchtv.am@gmail.com</p>
                    </div>
                    <div className="w-full xl:w-[300px] mt-2 border border-gray-100 rounded-2xl bg-white px-5 py-4">
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <FontAwesomeIcon icon={faStar} className="text-sky-500 p-2 bg-sky-100 rounded-md" />
                            My Dream
                        </p>
                        <p className="mt-2 text-sm text-green-500 bg-green-100 border border-green-200 px-4 py-2 rounded-full flex items-center gap-1"><FontAwesomeIcon icon={faCircle} className="animate-ping text-[6px] text-green-500"/>Full-Stack Developer</p>
                        <p className="mt-2 text-sm text-orange-500 bg-orange-100 border border-orange-200 px-4 py-2 rounded-full flex items-center gap-1"><FontAwesomeIcon icon={faCircle} className="animate-ping text-[6px] text-orange-500"/>Software Engineer</p>
                        <p className="mt-2 text-sm text-yellow-500 bg-yellow-100 border border-yellow-200 px-4 py-2 rounded-full flex items-center gap-1"><FontAwesomeIcon icon={faCircle} className="animate-ping text-[6px] text-yellow-500"/>Network Engineer</p>
                    </div>
                </div>
                <h1 className="mt-5 font-bold text-2xl bg-white px-6 text-gray-600 py-3 shadow-[0px_1px_12px_rgba(0,0,0,0.06)] rounded-full"><FontAwesomeIcon icon={faCodeMerge} /> MY SKILL</h1>
                <div className="grid grid-cols-3 md:grid-cols-8 gap-4 w-full px-5 py-4 mt-2">
                    <div className="aspect-square px-3 py-1 overflow-hidden rounded-xl bg-white flex flex-col items-center justify-center">
                        <div className="hover:scale-110 duration-300">
                            <center>
                                <img src="/HTML5.png" alt="logo" className="w-10 h-10" />
                                <p className="text-gray-400 text-center items-center mt-1">HTML</p>
                            </center>
                        </div>
                    </div>
                    <div className="aspect-square px-3 py-1 overflow-hidden rounded-xl bg-white flex flex-col items-center justify-center">
                        <div className="hover:scale-110 duration-300">
                            <center>
                                <img src="/css-3.svg" alt="logo" className="w-10 h-10" />
                                <p className="text-gray-400 text-center items-center mt-1">CSS</p>
                            </center>
                        </div>
                    </div>
                    <div className="aspect-square px-3 py-1 overflow-hidden rounded-xl bg-white flex flex-col items-center justify-center">
                        <div className="hover:scale-110 duration-300">
                            <center>
                                <img src="/javascript.png" alt="logo" className="w-10 h-10 rounded-sm mx-auto" />
                                <p className="text-gray-400 text-center items-center mt-1">Javascript</p>
                            </center>
                        </div>
                    </div>
                    <div className="aspect-square px-3 py-1 overflow-hidden rounded-xl bg-white flex flex-col items-center justify-center">
                        <div className="hover:scale-110 duration-300">
                            <center>
                                <img src="/PHP-logo.png" alt="logo" className="w-15 h-8" />
                                <p className="text-gray-400 text-center items-center mt-1">PHP</p>
                            </center>
                        </div>
                    </div>
                    <div className="aspect-square px-3 py-1 overflow-hidden rounded-xl bg-white flex flex-col items-center justify-center">
                        <div className="hover:scale-110 duration-300">
                            <center>
                                <img src="/nextjs.png" alt="logo" className="w-10 h-10" />
                                <p className="text-gray-400 text-center items-center mt-1">Next.js</p>
                            </center>
                        </div>
                    </div>
                    <div className="aspect-square px-3 py-1 overflow-hidden rounded-xl bg-white flex flex-col items-center justify-center">
                        <div className="hover:scale-110 duration-300">
                            <center>
                                <img src="/tailwind.png" alt="logo" className="w-15 h-8" />
                                <p className="text-gray-400 text-center items-center mt-1">Tailwind</p>
                            </center>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="p-4 text-center">
                <p className="text-gray-500 text-sm">&copy; 2026 Chonlaphat. All rights reserved.</p>
            </footer>
        </div>
    );
}