import Image from "next/image";
import ebook from "@/assets/ebook.png";
import DefaultButton from "@/components/DefaultButton";

const Products = () => {
  return (
    <div
      className="min-h-[80vh] md:h-[80vh] w-full flex flex-col md:flex-row justify-end md:p-10 relative"
      id="products"
    >
      <div
        className="bg-[#F2B705] my-12 md:my-20 w-[80%] md:w-[50%] h-[45%] md:h-[77%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-10 md:translate-x-0 md:top-1/4 flex flex-col items-center justify-center text-xl"
      >
        <h1 className="text-[#A64522] mb-6 font-extrabold text-4xl md:text-5xl drop-shadow-lg text-center">
          Nutrição com 4Ps
        </h1>
        <hr className="w-3/4 border-1 border-[#A64522] mb-1" />

        <Image
          className="w-auto h-full object-cover"
          src={ebook}
          alt="foto de livro com ilustração de mulher negra cercada de frutas como mamão, abacaxi e laranja"
        />
      </div>

      <div className="gap-6 md:pl-35 md:pr-10 mt-[50px] md:mt-0 md:h-full w-full md:w-1/2 bg-[#6F7302] flex flex-col items-center justify-center text-xl">
        <h1 className="mt-20 md:mt-0 text-3xl md:text-4xl font-bold text-[#F2B705] leading-snug">
          O que alimenta corpos pretos?
        </h1>
        <p className="text-justify text-base md:text-lg text-amber-50 leading-relaxed">
          Este eBook foi criado com o propósito de reconectar corpos, mentes e histórias à sabedoria ancestral da alimentação afrocentrada.
          A partir de saberes tradicionais, experiências comunitárias e referências culturais, buscamos mostrar como a comida, quando cultivada com afeto, respeito e consciência, é um instrumento de preservação da população negra e de suas identidades.
          Este material é um convite ao autocuidado enraizado na ancestralidade, no equilíbrio e na resistência dos povos africanos e afro-brasileiros. Fomentamos o entendimento de que comer bem é um ato político e de cura coletiva.
        </p>

        <a
          href="https://wa.me/+5511995549911"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-[#A64522] hover:bg-[#F24C27] text-white font-bold py-2 px-4 rounded-xl"
        >
          Garanta o seu
        </a>

      </div>

    </div>
  );
};

export default Products;
