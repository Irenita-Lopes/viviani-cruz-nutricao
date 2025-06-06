"use client";
import Link from "next/link";
import { useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`${isOpen ? "h-screen" : "h-auto"} fixed md:h-auto top-0 pr-10 bg-white z-50 w-full text-black flex flex-col md:flex-row align-center items-center p-4`}
        >
            <div className="flex justify-center md:justify-start items-center relative w-full md:w-auto p-4 md:p-0">
                {isOpen ? <GrClose
                    className="cursor-pointer absolute right-4 md:hidden"
                    onClick={toggleSidebar} /> :
                    <GrMenu
                        className="cursor-pointer absolute right-4 md:hidden"
                        onClick={toggleSidebar}
                    />}
            </div>
            <nav className="w-[100%] h-[100%] text-[18px] md:h-auto flex flex-col md:flex-row align-center items-center justify-center md:justify-end gap-10">

                <Link
                    className={`text-[#a64522] hover:text-[#F24C27] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Inicio
                </Link>

                <Link
                    className={`text-[#a64522] hover:text-[#F24C27] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#about"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Sobre
                </Link>

                <Link
                    className={`text-[#a64522] hover:text-[#F24C27] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#services"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Serviços
                </Link>

                <Link
                    className={`text-[#a64522] hover:text-[#F24C27] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#products"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Produtos
                </Link>

                {/* <Link
                    className={`text-[#a64522] hover:text-[#F24C27] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#testimonials"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Depoimentos
                </Link> */}

                <Link
                    className={`text-[#a64522] hover:text-[#F24C27] font-bold font-default ${!isOpen ? "hidden md:block" : ""}`}
                    href={"/#contacts"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Contatos
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;