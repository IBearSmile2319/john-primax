import React from 'react'
interface FormHeaderProps {
    title: string
    description: string
}
const FormHeader = ({
    title,
    description
}: FormHeaderProps) => {
    return (
        <>
            <div className="login-content-form-title">
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
            </div>
        </>
    )
}

export default FormHeader
