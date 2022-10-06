import React from 'react'
import { useForm } from 'react-hook-form'
import InputPrimax from '../../../components/InputPrimax'
import FormHeader from '../FormHeader'

const FormLogin = () => {
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
        // resolver: yupResolver(FormProductValidate)
    })
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <>
            <FormHeader
                title="¡Bienvenido!"
                description="Inicie sesión para continuar."
            />
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <InputPrimax
                    label="Correo"
                    name="name"
                    register={register}
                    placeholder="Ingrese su correo"
                    errors={errors}
                    type="text"
                    required={true}
                    disabled={false}
                />
                <InputPrimax
                    label="Contraseña"
                    name="name"
                    register={register}
                    placeholder="Ingrese su contraseña"
                    errors={errors}
                    type="text"
                    required={true}
                    disabled={false}
                />
            </form>
        </>
    )
}

export default FormLogin