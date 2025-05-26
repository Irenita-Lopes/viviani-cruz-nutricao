import alimentafros from "@/assets/alimentafros.png";
import ServicesCard from "@/components/ServicesCard";

export default function Solcution() {
    return (
        <div className="px-4 py-10 md:py-20 md:px-16 text-start bg-[#59551c] min-h-screen" id="services">
            <h1 className="text-white mb-4 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                Serviços 
            </h1>
            <hr className="border-white border-2 mb-6" />
            <section className="mt-4 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                <ServicesCard
                    title="Consultoria (não clínica)"
                    to="https://aulas.universodanmatema.com.br/"
                    src={alimentafros}
                    alt="Pessoas negras segurando frutas e verduras"
                    description="Acompanhamento nutricional afetivo e personalizado, com atendimentos presenciais."
                    target="_blank"
                />
                <ServicesCard
                    title="Consultoria Online (não clínica)"
                    to="https://danmatema.mmpmateriaismatematicos.com.br/"
                    src={alimentafros}
                    alt="Pessoas negras segurando frutas e verduras"
                    description="Acompanhamento nutricional afetivo e personalizado, com atendimentos via chamada de vídeo."
                    target="_blank"
                />
                <ServicesCard
                    title="Palestras, Oficinas e Cursos"
                    to="curso-alfabetizacao-matematica"
                    src={alimentafros}
                    alt="Pessoas negras segurando frutas e verduras"
                    description="Educação alimentar afrocentrada e antirracista."
                />
                <ServicesCard
                    title="Projetos Colaborativos"
                    to="https://alimentafros.com.br/consultoria-escolas/"
                    src={alimentafros}
                    alt="Pessoas negras segurando frutas e verduras"
                    description="Promoção da equidade racial através de parcerias com ONGs, escolas e movimentos sociais."
                    target="_blank"
                />
            </section>
        </div>
    );
}
