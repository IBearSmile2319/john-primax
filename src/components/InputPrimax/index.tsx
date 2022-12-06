import { EyeInvisibleOutlined, EyeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import './InputPrimax.css'
interface FormHeaderProps {
    register: any
    required: boolean
    label: string
    name: string
    placeholder: string
    errors: any
    type: string
    labelClass?: string
    labelExtra?: string
    disabled?: boolean
    inputClass?: string
    maxLength?: number
}
const InputPrimax = (
    {
        register,
        required,
        label,
        name,
        placeholder,
        errors,
        type,
        labelClass,
        labelExtra,
        disabled = false,
        inputClass,
        maxLength
    }: FormHeaderProps, props: any
) => {
    const [typeInput, setTypeInput] = useState<string>(type)
    return (
        <div className="inputPrimax">
            <label className={`inputPrimax-label ${labelClass}`}>
                {label}
                {labelExtra}
            </label>
            <div className={`inputPrimax-input ${inputClass} `}>
                <input
                    disabled={disabled}
                    {...register(name, { required: required ? required : false })}
                    placeholder={placeholder}
                    type={typeInput}
                    maxLength={maxLength}
                />
                {type === 'password' && (
                    <div className="inputPrimax-icon">
                        {
                            typeInput === 'password' ? (
                                <EyeOutlined className="icon" onClick={() => setTypeInput('text')} />
                            ) : (
                                <EyeInvisibleOutlined className="icon" onClick={() => setTypeInput('password')} />
                            )
                        }
                    </div>
                )}
            </div>
            {errors ? errors[name] && <span className="inputPrimax__msg-error"><InfoCircleOutlined /> {errors[name].message?.includes("number") ? "Solo se permiten numeros!" : errors[name].message}</span> : null}
        </div>
    )
}

export default InputPrimax