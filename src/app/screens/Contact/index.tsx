import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import perfil from "@/assets/vivianiapcruz.png";

const Contact = () => {
    return (
        <div id="contacts" className="min-h-screen bg-white flex flex-col items-center md:flex-row md:justify-center px-6 py-12 md:px-20">
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
                <Image
                    src={perfil}
                    alt="Foto de Viviani Cruz"
                    priority
                    className="rounded-lg shadow-md"
                />
            </div>

            <div className="md:w-1/2 flex flex-col items-start">
                <h1 className="text-[#A64522] mb-6 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                    Vamos conversar?
                </h1>
                <hr className="w-full border-[#A64522] mb-6" />
                <h2 className="text-xl md:text-2xl text-black font-medium drop-shadow-md mb-10">
                    Será um prazer te atender e pensar coletivamente nas melhores soluções para a sua realidade.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    <div className="md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md bg-[#C4CBF2] hover:shadow-lg transition">
                        <Mail className="text-[#A64522]" />
                        <div>
                            <span className="font-semibold">E-mail:</span>{" "}
                            <a href="mailto:vcruz.alimentafros@gmail.com" className="underline hover:text-[#A64522] transition-colors">
                                vcruz.alimentafros@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md bg-[#C4CBF2] hover:shadow-lg transition">
                        <Phone className="text-[#A64522]" />
                        <div>
                            <span className="font-semibold">WhatsApp:</span>{" "}
                            <a href="https://wa.me/+5511995549911" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A64522] transition-colors">
                                (11) 99554-9911
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md bg-[#C4CBF2] hover:shadow-lg transition">
                        <Instagram className="text-[#A64522]" />
                        <div>
                            <span className="font-semibold">Instagram:</span>{" "}
                            <a href="https://www.instagram.com/alimentafros/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A64522] transition-colors">
                                @alimentafros
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex items-center gap-4 p-6 rounded-2xl shadow-md bg-[#C4CBF2] hover:shadow-lg transition">
                        <Linkedin className="text-[#A64522]" />
                        <div>
                            <span className="font-semibold">LinkedIn:</span>{" "}
                            <a href="https://www.linkedin.com/in/viviani-cruz/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A64522] transition-colors">
                                Viviani Cruz
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
