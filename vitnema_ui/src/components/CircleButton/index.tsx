import React from 'react';
import './button.scss';
import { FaPlay, FaPlus, FaThumbsUp, FaAngleDown } from 'react-icons/fa6';

interface ButtonProps {
    label: string;
    type: "play" | "add" | "like" | "info";
    disabled?: boolean;
    action: () => void;
}

const CircleButton: React.FC<ButtonProps> = ({ label, disabled = false, type = "play", action }) => {
    return (
        <button className="button" onClick={action} disabled={disabled}>
            {type === "play" && <FaPlay />}
            {type === "add" && <FaPlus />}
            {type === "like" && <FaThumbsUp />}
            {type === "info" && <FaAngleDown />}
        </button>
    );
};

export default CircleButton;