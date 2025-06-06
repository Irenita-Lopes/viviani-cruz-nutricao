"use client";
import quiabo from "@/assets/pessoa_cortando_quiabo.png";
import amendoim from "@/assets/pessoa_descascando_amendoim.png"
import cuscuz from "@/assets/cuscuz.png";
import bolinho from "@/assets/bolinho_feijao.png";
import Modal from "@/components/Modal";
import ServicesCard from "@/components/ServicesCard";
import { useState } from "react";

export default function Solcution() {
    const [showModalConsultoria, setShowModalConsultoria] = useState<boolean>(false);
    const [showModalConsultoriaOnline, setShowModalConsultoriaOnline] = useState<boolean>(false);
    const [showModalPalestras, setShowModalPalestras] = useState<boolean>(false);
    const [showModalProjetos, setShowModalProjetos] = useState<boolean>(false);

    const ModalConsultoria = () => {
        return (
            <Modal
                isOpen={showModalConsultoria}
                onClose={() => setShowModalConsultoria(false)}>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Consultoria (não clínica)</h2>
                    <ul className="mb-4">
                        <li>Cardápios com referências multiculturais</li>
                        <li>Melhoria de práticas alimentares identitárias</li>
                        <li>Promoção da saúde consciente e acessível</li>
                        <li>Para famílias, instituições e projetos sociais</li>
                    </ul>
                </div>
            </Modal>
        );
    }
    const ModalConsultoriaOnline = () => {
        return (
            <Modal
                isOpen={showModalConsultoriaOnline}
                onClose={() => setShowModalConsultoriaOnline(false)}>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Consultoria Online(não clínica)</h2>
                    <ul className="mb-4">
                        <li>(Atendimento via chamada de vídeo)</li>
                        <li>Cardápios com referências multiculturais</li>
                        <li>Melhoria de práticas alimentares identitárias</li>
                        <li>Promoção da saúde consciente e acessível</li>
                        <li>Para famílias, instituições e projetos sociais</li>
                    </ul>
                </div>
            </Modal >
        );
    }
    const ModalPalestras = () => {
        return (
            <Modal
                isOpen={showModalPalestras}
                onClose={() => setShowModalPalestras(false)}>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Palestras, Oficinas e Cursos</h2>
                    <ul className="mb-4">
                        <li>(Educação alimentar afrocentrada e antirracista)</li>
                        <li>Alimentação e cultura afro-brasileira</li>
                        <li>Saúde da população negra e segurança alimentar</li>
                        <li>Combate ao racismo nutricional</li>
                    </ul>
                </div>
            </Modal>
        );
    }
    const ModalProjetos = () => {
        return (
            <Modal
                isOpen={showModalProjetos}
                onClose={() => setShowModalProjetos(false)}>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Projetos Colaborativos</h2>
                    <ul className="mb-4">
                        <li>Ações coletivas em saúde pública</li>
                        <li>Parcerias para equidade racial</li>
                        <li>Com ONGs, escolas e movimentos sociais</li>
                    </ul>
                </div>
            </Modal>
        );
    }

    return (
        <div className="px-4 py-10 md:py-20 md:px-16 text-start bg-[#C4CBF2] min-h-screen" id="services">
            <h1 className="text-[#A64522] mb-4 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                Serviços
            </h1>
            <hr className="border-[#A64522] border-1 mb-6" />
            <section className="mt-4 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                <ServicesCard
                    title="Consultoria (não clínica)"
                    onClick={() => setShowModalConsultoria(true)}
                    src={quiabo}
                    alt="Pessoa negra cortando quiabo"
                    description="Acompanhamento nutricional afetivo e personalizado, com atendimentos presenciais."
                />
                <ServicesCard
                    title="Consultoria Online (não clínica)"
                    onClick={() => setShowModalConsultoriaOnline(true)}
                    src={cuscuz}
                    alt="Pessoa negra colocando água no fubá para preparo de cuscuz"
                    description="Acompanhamento nutricional afetivo e personalizado, com atendimentos via chamada de vídeo."

                />
                <ServicesCard
                    title="Palestras, Oficinas e Cursos"
                    onClick={() => setShowModalPalestras(true)}
                    src={amendoim}
                    alt="Pessoa negra descascando amendoim"
                    description="Educação alimentar afrocentrada e antirracista."
                />
                <ServicesCard
                    title="Projetos Colaborativos"
                    onClick={() => setShowModalProjetos(true)}
                    src={bolinho}
                    alt="Pessoa negra fazendo bolindo de feijão"
                    description="Promoção da equidade racial através de parcerias com ONGs, escolas e movimentos sociais."

                />
            </section>
            <ModalConsultoria />
            <ModalConsultoriaOnline />
            <ModalPalestras />
            <ModalProjetos />
        </div>
    );
}
