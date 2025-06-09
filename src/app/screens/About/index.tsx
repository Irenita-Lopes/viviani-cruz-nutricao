import Image from "next/image";
import perfil from "@/assets/vivianicruzsorrindo.png";

const About = () => {
    return (
        <section className="min-h-screen px-4 py-10 md:py-20 md:px-16 flex flex-col md:flex-row items-center gap-10 scroll-mt-14" 
        id="about">
            <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-[#A64522] mb-4 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                    Viviani Cruz
                </h1>
                <hr className="text-[#A64522]" />

                <p className="mt-3 text-lg md:text-xl text-justify text-zinc-800 leading-relaxed drop-shadow-sm">
                    Olá! Sou Viviani Cruz, mulher preta nascida no interior de SP e apaixonada pela relação entre alimentação, afeto, saúde e ancestralidade. graças à essa paixão hoje tenho formação técnica em Nutrição e Dietética, sou bacharela em Saúde Coletiva pela Universidade Federal do Paraná (UFPR), e idealizei o projeto AlimentAfros com o propósito de ampliar o acesso da população negra a práticas alimentares que sejam acolhedoras, educativas e culturalmente conectadas.
                </p>
                <p className="mt-2 text-lg md:text-xl text-justify text-zinc-800 leading-relaxed drop-shadow-sm">
                    Atuo com promoção da saúde e prevenção de doenças, educação alimentar e nutricional, desenvolvimento de conteúdos, oficinas, palestras, consultoria para projetos sociais e instituições, principalmente com foco na população negra. Tendo um olhar ampliado da Saúde Coletiva, compreendo a alimentação para além dos nutrientes, como um ato político, histórico e afetivo, profundamente atravessado pelas desigualdades sociais e raciais.
                </p>
                <p className="mt-2 text-lg md:text-xl text-justify text-zinc-800 leading-relaxed drop-shadow-sm">
                    Minha trajetória também se alimenta das vivências como a experiência transformadora que vivi em Maputo, Moçambique, onde me encantei com os sabores, cores e práticas alimentares carregadas de história e ancestralidade. Lá aprendi que a alimentação é linguagem: cada prato carregava histórias de resistência, memórias de mulheres negras e a riqueza da diáspora africana. Essa conexão com a culinária africana reafirmou em mim o desejo de construir um caminho que respeita nossas raízes, valoriza nossos corpos e fortalece nossa identidade alimentar.
                    Por isso, trabalho unindo ciência, cuidado e afeto, com base na realidade social, econômica e cultural de quem atendo.
                    Através da AlimentAfros, construo pontes entre saberes técnicos, vivências pessoais e o cuidado coletivo.
                </p>

                <h2 className="text-xl md:text-2xl mt-3 text-[#A64522] font-medium drop-shadow-md">

                    Aqui, a nutrição é preta, potente, política e pra você.

                </h2>
            </div>

            <figure className="w-full md:w-1/2 flex justify-center">
                <Image
                    className="md:w-2/3 mb-8 md:mb-0 flex justify-center items-center"
                    src={perfil}
                    alt="Foto de Viviani Cruz"
                    priority
                />
            </figure>
        </section>
    );
};

export default About;
