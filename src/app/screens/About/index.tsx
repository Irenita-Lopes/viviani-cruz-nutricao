import Image from "next/image";
import perfil from "@/assets/Viviani-fundtransparente.png";

const About = () => {
    return (
        <section className="min-h-screen px-4 py-10 md:py-20 md:px-16 flex flex-col md:flex-row items-center gap-10" id="about">
            <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-[#A64522] mb-4 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                    Viviani Cruz
                </h1>
                <hr className="text-[#A64522]" />
                <h2 className="text-xl md:text-2xl mt-10 text-[#A64522] font-medium drop-shadow-md">
                    Técnica em Nutrição e Dietética, pesquisadora em saúde da população negra e fundadora da AlimentAfros
                </h2>
                <p className="mt-10 text-lg md:text-xl text-justify text-zinc-800 leading-relaxed drop-shadow-sm">
                    Sou apaixonada por alimentar corpos, histórias e afetos. Com formação técnica em Nutrição e Dietética e experiência em Unidades de Alimentação e Nutrição, hoje atuo com foco na nutrição da população negra, promovendo saúde com acolhimento, identidade e ancestralidade.
                </p>
                <p className="mt-6 text-lg md:text-xl text-justify text-zinc-800 leading-relaxed drop-shadow-sm">
                    Acredito que comer bem é um ato político e de autocuidado, e minha missão é tornar o cuidado nutricional mais acessível, respeitoso e potente para pessoas pretas.
                </p>
            </div>

            <figure className="w-full md:w-1/2 flex justify-center">
                <Image
                    className="w-full h-auto max-w-sm md:max-w-md object-contain"
                    src={perfil}
                    alt="Foto de Viviani Cruz"
                    priority
                />
            </figure>
        </section>
    );
};

export default About;
