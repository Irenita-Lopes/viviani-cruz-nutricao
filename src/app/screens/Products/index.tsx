import Image from "next/image";
import ebook from "@/assets/ebook.png";

const Synopsis = () => {
  return (
    <div className="md:pl-15 lg:pl-25 md:pr-5 lg:pr-10 mt-[-5vh] z-0 md:mt-10 w-full md:w-1/2 bg-[#F2B705] flex flex-col items-center justify-center text-xl ">
      <h1 className="mt-20  md:mt-0 text-3xl lg:text-5xl font-bold text-[#A64522] text-center">
        O que alimenta corpos pretos?
      </h1>
      <hr className="md:mt-6 w-3/4 border-1 border-[#A64522] mb-1" />

      <p className="mt-5 px-5 text-justify text-base md:text-[1.1rem] text-zinc-800 leading-relaxed">
        Este e-book foi criado com o propósito de reconectar corpos, mentes e histórias à sabedoria ancestral da alimentação afrocentrada.
        A partir de saberes tradicionais, experiências comunitárias e referências culturais, buscamos mostrar como a comida, quando cultivada com afeto, respeito e consciência, é um instrumento de preservação da população negra e de suas identidades.
        Este material é um convite ao autocuidado enraizado na ancestralidade, no equilíbrio e na resistência dos povos africanos e afro-brasileiros. Fomentamos o entendimento de que comer bem é um ato político e de cura coletiva.
      </p>

      <a
        href="https://wa.me/+5511995549911"
        target="_blank"
        rel="noopener noreferrer"
        className="my-6 bg-[#A64522] hover:bg-[#F24C27] text-white font-bold py-2 px-4 rounded-xl"
      >
        Garanta o seu
      </a>
    </div>
  );
};

const Cover = () => {
  return (
    <section className="flex justify-center w-screen md:w-[50vw] min-h-[70vh] z-1">
      <div
        className="
        bg-[#C4CBF2]
        md:my-20 
        w-[96%] 
        md:w-[100%] 
        md:mr-[-150px]
        md:p-4
        flex 
        flex-col 
        items-center 
        justify-center 
        text-xl
      "
      >
        <h1 className="text-[#A64522] my-6 font-extrabold text-4xl md:text-5xl drop-shadow-lg text-center">
          Nutrição com 4Ps
        </h1>
        <hr className="w-3/4 border-1 border-[#A64522] mb-1" />

        <Image
          className="m-0 md:m-10 p-0 w-auto h-[350px] md:h-[600px] object-cover  "
          src={ebook}
          alt="foto de livro com ilustração de mulher negra cercada de frutas como mamão, abacaxi e laranja"
        />
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <div
      id="products"
      className="scroll-mt-14 relative min-h-[80vh] w-full flex flex-col md:flex-row "
    >
      <Cover />
      <Synopsis />
    </div>
  );
};

export default Products;