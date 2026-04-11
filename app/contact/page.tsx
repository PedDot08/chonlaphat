import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import DiscordStatus from "../component/DiscordStatus";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col xl:pt-25 pt-20 lg:px-10">
            <main className="max-w-[1200px] w-full px-4 fade-up mx-auto">
                <h1 className="font-bold text-2xl bg-white px-6 text-gray-600 py-3 shadow-[0px_1px_12px_rgba(0,0,0,0.06)] rounded-full">CONTACT</h1>
                <div className="xl:grid grid-cols-3 gap-2">
                    <div className="w-full xl:w-full mt-2 border border-gray-100 rounded-2xl bg-white px-5 py-4">
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <FontAwesomeIcon icon={faAt} className="text-sky-500 p-2 bg-sky-100 rounded-md" />
                            EMAIL
                        </p>
                        <a href="mailto:petchtv.am@gmail.com" className="hover:text-gray-400 transition-all duration-200" target="_blank">
                            <p className="mt-2 text-xl">petchtv.am@gmail.com</p>
                        </a>
                    </div>
                    <div className="w-full xl:w-full mt-2 border border-gray-100 rounded-2xl bg-white px-5 py-4">
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <FontAwesomeIcon icon={faFacebook} className="text-sky-500 p-2 bg-sky-100 rounded-md" />
                            FACEBOOK
                        </p>
                        <a href="https://www.facebook.com/petch.chonlaphat" className="hover:text-gray-400 transition-all duration-200" target="_blank">
                            <p className="mt-2 text-xl">Petch Chonlaphat</p>
                        </a>
                    </div>
                    <div className="w-full xl:w-full mt-2 border border-gray-100 rounded-2xl bg-white px-5 py-4">
                        <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                            <FontAwesomeIcon icon={faInstagram} className="text-sky-500 p-2 bg-sky-100 rounded-md" />
                            INSTAGRAM
                        </p>
                        <a href="https://instagram.com/_.xzrprat" className="hover:text-gray-400 transition-all duration-200" target="_blank">
                            <p className="mt-2 text-xl">_.xzrprat</p>
                        </a>
                    </div>
                </div>
                <DiscordStatus />
            </main>
            <footer className="absolute bottom-0 p-4 text-center right-0 left-0">
                <p className="text-gray-500 text-sm">&copy; 2026 Chonlaphat. All rights reserved.</p>
            </footer>
        </div>
    );
}