import React from 'react';
export interface IDefaultButton {
    children?: React.ReactNode;
    title: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
}
const DefaultButton: React.FC<IDefaultButton> = ({
    children,
    title,
    onClick,
    className,
    type,
    disabled,
}) => {
    return (
        <button
            onClick={onClick}
            hidden={disabled}
            className={className ?? "bg-yellow_d hover:bg-yellow_d text-white font-bold py-2 px-4 rounded-xl"} type={type}>
            <div className="flex items-center justify-center">
                {children}
                {title}
            </div>
        </button>
    );
}

export default DefaultButton;