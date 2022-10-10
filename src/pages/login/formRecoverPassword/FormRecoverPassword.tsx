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
            <div className="info-recovery">
                <p>
                    Ingrese tu correo y te enviaremos un enlace para cambiar tu contraseña.
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <InputPrimax
                    label="Correo"
                    name="email"
                    register={register}
                    placeholder="Ingrese su correo"
                    errors={errors}
                    type="text"
                    required={true}
                    disabled={false}
                />
                <button
                    className='btn-form'
                >
                    Enviar
                </button>

            </form>
        </>
    )
}

export default FormRecoverPassword
