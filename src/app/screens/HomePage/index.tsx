import sorrisos from "@/assets/sorrisos.png";

const HomePage = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
                style={{ backgroundImage: `url(${sorrisos.src})` }}
            />

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#A64522] drop-shadow-lg">
                    AlimentAfros
                </h1>
                <h2 className="mt-4 text-xl md:text-2xl text-black drop-shadow-md">
                    Alimentação como ato de cura e resistência
                </h2>
            </div>
        </div>
    );
};

export default HomePage;
