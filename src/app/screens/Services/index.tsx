import alimentafros from "@/assets/alimentafros.png";
import ServicesCard from "@/components/ServicesCard";

export default function Solcution() {


    return (
        <div className="px-4 py-10 md:py-20 md:px-16 text-start bg-white min-h-screen" id="services">
            <h1 className="text-[#A64522] mb-4 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                Serviços 
            </h1>
            <hr className="text-[#A64522]" />
            <section className="mt-4 flex flex-col md:flex-row justify-center items-center p-4 gap-4 md:gap-15">
                <ServicesCard
                    title="Reset Viva"
                    to="https://aulas.universodanmatema.com.br/"
                    src={alimentafros}
                    alt="Pessaos negras segurando frutas e verduras"
                    description="Acompanhamento nutricional afetivo e personalizado para a comunidade negra"
                    target="_blank"
                />
                <ServicesCard
                    title=" Consultoria Online"
                    to="https://danmatema.mmpmateriaismatematicos.com.br/"
                      src={alimentafros}
                     alt="Pessaos negras segurando frutas e verduras"
                    description="Avaliação e plano alimentar individualizado via chamada de vídeo"
                    target="_blank"
                />
                <ServicesCard
                    title=" Palestras e Oficinas"
                    to="curso-alfabetizacao-matematica"
                      src={alimentafros}
                     alt="Pessaos negras segurando frutas e verduras"
                    description="Paletras e oficinas sobre alimentação afrocentrada e segurança alimentar"
                />
                <ServicesCard
                    title=" Consultoria para Escolas"
                    to="https://alimentafros.com.br/consultoria-escolas/"
                    src={alimentafros}
                    alt="Pessaos negras segurando frutas e verduras"
                    description="Consultoria para escolas com foco nas necessidades da comunidade escolar"
                    target="_blank"
                />
            
            </section>
        </div>
    );
}
