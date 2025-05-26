const Products = () => {
  return (
    <div
      className="min-h-[80vh] md:h-[80vh] w-[100vw] flex flex-col md:flex-row justify-end md:p-10 relative"
      id="products"
    >
      <div
        className="bg-[#A64522] my-4 md:m-20 w-[80%] md:w-[50%] h-[45%] md:h-[77%] absolute top-0 
                   left-1/2 -translate-x-1/2 
                   md:left-10 md:translate-x-0 shadow-lg text-white flex items-center justify-center text-xl"
      >
        pipipi
      </div>

      <div className=" md:pl-35 md:pr-10 mt-[50px] md:mt-0 md:h-full w-full md:w-1/2 bg-[#F2B705] flex flex-col items-center justify-center text-xl">
         <h1 className="mt-20 md:mt-0 text-3xl md:text-4xl font-bold text-[#A64522] leading-snug">
          O que alimenta corpos pretos?
        </h1>
        <p className="text-justify text-base md:text-lg text-[#4A2E1D] leading-relaxed">
          Este eBook foi criado com o propósito de reconectar corpos, mentes e histórias à sabedoria ancestral da alimentação afrocentrada.
          A partir de saberes tradicionais, experiências comunitárias e referências culturais, buscamos mostrar como a comida, quando cultivada com afeto, respeito e consciência, pode ser um instrumento poderoso de prevenção e combate a doenças.
          Este material é um convite ao autocuidado enraizado na ancestralidade, no equilíbrio e na resistência dos povos africanos e afro-brasileiros. Comer bem é também um ato político e de cura coletiva.
        </p>
      </div>
    </div>
  );
};

export default Products;
