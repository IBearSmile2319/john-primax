import React from 'react'
import { useForm } from 'react-hook-form'
import InputPrimax from '../../../components/InputPrimax'
import FormHeader from '../FormHeader'

const FormRecoverPassword = () => {
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
        // resolver: yupResolver(FormProductValidate)
    })
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <>
            <FormHeader
                title="Restablecer contraseña"
                description="Cambie su contraseña"
            />
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <InputPrimax
                    label="Nombre del Producto"
                    name="name"
                    register={register}
                    placeholder=""
                    errors={errors}
                    type="text"
                    required={true}
                    disabled={false}
                />

            </form>
        </>
    )
}

export default FormRecoverPassword
