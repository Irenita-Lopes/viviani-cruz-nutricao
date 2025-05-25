import Image, { StaticImageData } from "next/image";
import DefaultButton from "../DefaultButton";
import { RiSearchLine } from "react-icons/ri";

export interface IServicesCard {
    description: string;
    title: string;
    to: string;
    src: StaticImageData;
    alt: string;
    target?: "_blank" | "_self" | "_parent" | "_top" | "framename" | "none" | undefined
}    
    const ServicesCard: React.FC<IServicesCard> = ({
        description,
        title,
        to,
        src,
        alt,
        target
    }) => {
        return (
            <div className="w-full md:w-[250px] min-h-[400px] shadow-lg flex flex-col justify-between">
                <figure className="w-full h-[250px] flex items-center justify-center">
                    <Image
                        className="w-full h-full object-cover rounded-tr-3xl p-[1px]"
                        src={src}
                        alt={alt}
                        title={title}
                        priority
                    />
                </figure>
                <div className="px-4 py-2 flex flex-col items-center justify-between flex-grow">
                    <strong>
                        {title}
                    </strong>
                    <span className="text-center text-gray-700">
                        {description}
                    </span>
                    <DefaultButton
                        title="Saiba mais"
                        target={target}
                        to={to}
                        className='bg-[#a64522] hover:bg-[#F24C27]  text-white font-bold py-2 px-4 rounded-xl'
                    >
                        <RiSearchLine size={20} />
                    </DefaultButton>
                </div>
            </div>
        );
    }
    export default ServicesCard;