import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen w-full flex flex-col px-6 py-12 md:px-20 bg-white" id="contacts">
            <h1 className="text-[#A64522] mb-6 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                Vamos conversar?
            </h1>
            <hr className="border-[#A64522] mb-6" />

            <h2 className="text-xl md:text-2xl text-black font-medium drop-shadow-md mb-10">
                Será um prazer te atender e pensar coletivamente nas melhores soluções para a sua realidade.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-800 text-lg md:text-xl">
                {/* E-mail */}
                <div className="flex items-center gap-4 p-6 border rounded-2xl shadow-md bg-zinc-50 hover:shadow-lg transition">
                    <Mail className="text-[#A64522]" />
                    <div>
                        <span className="font-semibold">E-mail:</span>{" "}
                        <a href="mailto:viviani_030@hotmail.com" className="underline hover:text-[#A64522] transition-colors">
                            viviani_030@hotmail.com
                        </a>
                    </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 p-6 border rounded-2xl shadow-md bg-zinc-50 hover:shadow-lg transition">
                    <Phone className="text-[#A64522]" />
                    <div>
                        <span className="font-semibold">WhatsApp:</span>{" "}
                        <a href="https://wa.me/+5511995549911" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A64522] transition-colors">
                            (11) 99554-9911
                        </a>
                    </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4 p-6 border rounded-2xl shadow-md bg-zinc-50 hover:shadow-lg transition">
                    <Instagram className="text-[#A64522]" />
                    <div>
                        <span className="font-semibold">Instagram:</span>{" "}
                        <a href="https://www.instagram.com/alimentafros/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#A64522] transition-colors">
                            @alimentafros
                        </a>
                    </div>
                </div>

                {/* Linkedin */}
                <div className="flex items-center gap-4 p-6 border rounded-2xl shadow-md bg-zinc-50 hover:shadow-lg transition">
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
    );
};

export default Contact;
