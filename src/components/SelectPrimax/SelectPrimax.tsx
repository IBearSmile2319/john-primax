import React, { forwardRef } from 'react'
import './styleSelectPrimax.css'
interface Props {
    name: string;
    label: string;
    values: any[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
    labelClass?: string;
}


const SelectPrimax = forwardRef<
    HTMLSelectElement,
    Props
>(({ name, label, values, onChange, onBlur, labelClass }, ref) => (
        <div className="selectPrimax">
            <label className={`selectPrimax__label ${labelClass}`} >{label}</label>
            <select
                name={name}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
            >
                {values.map((value, index) =>
                    <option key={index} value={value}>{value}</option>
                )}
            </select>
        </div>
    )
)

export default SelectPrimax;
