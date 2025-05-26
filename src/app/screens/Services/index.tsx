import alimentafros from "@/assets/alimentafros.png";
import ServicesCard from "@/components/ServicesCard";

export default function Solcution() {
    return (
        <div className="px-4 py-10 md:py-20 md:px-16 text-start bg-[#A64522] min-h-screen" id="services">
            <h1 className="text-white mb-4 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                Serviços 
            </h1>
            <hr className="border-white border-2 mb-6" />
            <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                <ServicesCard
                    title="Reset Viva"
                    to="https://aulas.universodanmatema.com.br/"
                    src={alimentafros}
                    alt="Pessoas negras segurando frutas e verduras"
                    description="Acompanhamento nutricional afetivo e personalizado para a comunidade negra."
                    target="_blank"
                />
                <ServicesCard
                    title="Consultoria Online"
                    to="https://danmatema.mmpmateriaismatematicos.com.br/"
                    src={alimentafros}
                    alt="Pessoas negras segurando frutas e verduras"
                    description="Avaliação e plano alimentar individualizado via chamada de vídeo."
                    target="_blank"
                />
                <ServicesCard
                    title="Palestras e Oficinas"
                    to="curso-alfabetizacao-matematica"
                    src={alimentafros}
                    alt="Pessoas negras segurando frutas e verduras"
                    description="Compartilhamento de estudos sobre segurança alimentar."
                />
                <ServicesCard
                    title="Consultoria para Escolas"
                    to="https://alimentafros.com.br/consultoria-escolas/"
                    src={alimentafros}
                    alt="Pessoas negras segurando frutas e verduras"
                    description="Atendimento com foco nas necessidades da comunidade escolar."
                    target="_blank"
                />
            </section>
        </div>
    );
}
