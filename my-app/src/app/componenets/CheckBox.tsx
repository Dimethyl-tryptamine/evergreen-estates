"use client";
import { use, useState } from "react";


type CheckBoxProps = {
    width?: string;
    height?: string;
    text?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({width = "5", height = "5", text, onChange}) => {

    const [checked, setChecked] = useState(false);

        const HandleChange = () => {

            setChecked((prev) => !prev)
            console.log(checked)

        }

        
    return (
        <label className="grid grid-cols-1">
            <input type="checkbox" className={`border rounded min-w-${width}  w-${width} h-${height} min-h-${height} checked:bg-[#228000]  accent-[#228000]`}/>
            <span>{text}</span>
        </label>
    );
}

export default CheckBox;

