import React, { useEffect } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    className = "",
}) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        if (isOpen) document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleBackgroundClick = () => onClose();

    const stop = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={handleBackgroundClick}
        >
            <div className="absolute inset-0 bg-black/50" />
            <div
                className={`relative z-10 w-fit max-w-[90vw] max-h-[90vh] overflow-auto rounded-lg bg-white shadow-lg ${className}`}
                onClick={stop}
            >
                <button
                    onClick={onClose}
                    className="absolute right-3 top-1 text-3xl font-bold text-red-700 hover:text-[#F24C27] cursor-pointer"
                    aria-label="Fechar"
                >
                    &times;
                </button>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;