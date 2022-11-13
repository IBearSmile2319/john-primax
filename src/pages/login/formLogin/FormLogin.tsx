import React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation } from "react-router-dom";
import InputPrimax from "../../../components/InputPrimax";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReducer";
import { login } from "../../../store/userSlice/user.thunks";
import FormHeader from "../FormHeader";

interface dataForm {
  email: string;
  password: string;
}

const FormLogin = () => {
  let location = useLocation()
  let from = location.state?.from?.pathname || '/'
  const dispatch = useAppDispatch();

  const {
    loggedIn,
  } = useAppSelector(state => state.user)

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(FormProductValidate)
  });
  const onSubmit = (data: any) => {
    // console.log(data);
    //   "email": "jhon.espino@gmailcom",
    // "password": "123456jh"
    dispatch(login(data.email, data.password));
  };
  return (
    <>
    {loggedIn ? <Navigate to={from} /> : null}
      <FormHeader
        title="¡Bienvenido!"
        description="Inicie sesión para continuar."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <InputPrimax
          label="Contraseña"
          name="password"
          register={register}
          placeholder="Ingrese su contraseña"
          errors={errors}
          type="text"
          required={true}
          disabled={false}
        />
        <button className="btn-form">Ingresar</button>
        <div className="recover-password-link">
          <Link to="recover-password">
            <i className="icon-lock"></i>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
