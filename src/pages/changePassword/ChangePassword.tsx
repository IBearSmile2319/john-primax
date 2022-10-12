import React from 'react'
import './ChangePassword.css'
import Logo from '../../assets/svg/logo.svg'
import { useForm } from 'react-hook-form'
import FormHeader from '../login/FormHeader'
import InputPrimax from '../../components/InputPrimax'
const ChangePassword = () => {
  const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
    // resolver: yupResolver(FormProductValidate)
  })
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <div className="changepassword-container">
      <div className="login-content changepassword-content">
        <div className="login-content-logo">
          <img src={
            Logo
          } alt="" />
        </div>
        <div className="login-content-form">
          <FormHeader
            title="Nueva contraseña"
            description="Cambiar contraseña."
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
           <InputPrimax
              label="Nueva contraseña"
              name="name"
              register={register}
              placeholder="Ingrese su nueva contraseña"
              errors={errors}
              type="text"
              required={true}
              disabled={false}
            />
            <InputPrimax
              label="Confirmar contraseña"
              name="name"
              register={register}
              placeholder="Ingrese su contraseña"
              errors={errors}
              type="text"
              required={true}
              disabled={false}
            />
            <button
              className='btn-form'
            >
              Cambiar contraseña
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword