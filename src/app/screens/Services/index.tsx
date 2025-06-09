"use client";
import quiabo from "@/assets/pessoa_cortando_quiabo.png";
import amendoim from "@/assets/pessoa_descascando_amendoim.png"
import feijao from "@/assets/debulhando_feijao.png";
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
                    <h2 className="text-2xl font-bold mb-4">1- Consultoria em UANs e Cardápios Institucionais</h2>
                    <ul className="mb-4">
                        <li>Elaboração, revisão e diversificação de cardápios coletivos.</li>
                        <li>Treinamentos de equipes de cozinha sobre boas práticas.</li>
                        <li>Inclusão de alimentos afro brasileiros nas refeições de espaços escolares,</li>
                        <li> creches, hospitais, projetos sociais, ongs e afins.</li>
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
                    <h2 className="text-zinc-800 text-2xl font-bold mb-4">2- Mentorias e Acompanhamento Educativo</h2>
                    <ul className="mb-4 text-zinc-800">
                        <li>Ajudo pessoas a entender melhor sua alimentação.</li>
                        <li>Auxílio na organização de rotina alimentar, compras e planejamento de refeições. </li>
                        <li>Encontros educativos  e motivacionais, check-ins, dicas e apoio contínuo.</li>
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
                    <h2 className="text-zinc-800 text-2xl font-bold mb-4">3- Produção de Conteúdos e Materiais Educativos</h2>
                    <ul className="text-zinc-800 mb-4">
                        <li>Cartilhas e posts sobre alimentação e saúde da população negra.</li>
                        <li>Conteúdos sobre autocuidado, alimentação e cultura alimentar afrocentrada.</li>
                        <li>Materiais para escolas e educadores sobre educação alimentar antirracista.</li>
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
                    <h2 className="text-zinc-800 text-2xl font-bold mb-4"> Palestras e Oficinas em Educação Alimentar</h2>
                    <ul className="text-zinc-800 mb-4">
                        <li>Segurança alimentar e nutricional.</li>
                        <li>Racismo nutricional e alimentação afrocentrada.</li>
                        <li>Comer com afeto, identidade e cultura.</li>
                        <li>Prevenção de doenças crônicas por meio da alimentação.</li>
                    </ul>
                </div>
            </Modal>
        );
    }

    return (
        <div className="scroll-mt-14 px-4 py-10 md:py-20 md:px-16 text-start bg-[#C4CBF2] min-h-screen" id="services">
            <h1 className="text-[#A64522] mb-4 font-extrabold text-4xl md:text-5xl drop-shadow-lg">
                Serviços
            </h1>
            <hr className="border-[#A64522] border-1 mb-6" />
            <section className="text-zinc-800 mt-4 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 text-center">
                <ServicesCard
                    title="1- Consultoria em UANs e Cardápios Institucionais"
                    onClick={() => setShowModalConsultoria(true)}
                    src={quiabo}
                    alt="Pessoa negra cortando quiabo sentada em um banco de madeira com recipientes apoiados em seu colo"
                    description="Destina-se a instituições que oferecem refeições coletivas."
                />
                <ServicesCard
                    title="2- Mentorias e Acompanhamento Educativo"
                    onClick={() => setShowModalConsultoriaOnline(true)}
                    src={amendoim}
                    alt="Pessoa negra descascando amedoim sentada em um banco de madeira com recipientes apoiados em seu colo"
                    description="Sem prescrição de dietas, encontros online quinzenais."

                />
                <ServicesCard
                    title="3- Produção de Conteúdos e Materiais Educativos"
                    onClick={() => setShowModalPalestras(true)}
                    src={bolinho}
                    alt="Pessoa negra fazendo bolinhos de feijão com a mão"
                    description="Para palestras, parcerias e divulgação."
                />
                <ServicesCard
                    title="4- Palestras e Oficinas em Educação Alimentar"
                    onClick={() => setShowModalProjetos(true)}
                    src={feijao}
                    alt="Pessoa negra debulhando feijão sentada em um banco de madeira com recipientes apoiados em seu colo"
                    description= "Condução de palestras, rodas de conversa e oficinas educativas em escolas, empresas, projetos sociais, coletivos, instituições públicas e privada."

                />
            </section>
            <ModalConsultoria />
            <ModalConsultoriaOnline />
            <ModalPalestras />
            <ModalProjetos />
        </div>
    );
}
