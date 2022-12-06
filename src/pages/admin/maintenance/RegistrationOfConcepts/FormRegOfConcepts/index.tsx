import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ModalCustom from "../../../../../components/ModalCustom";
import * as yup from "yup";
import InputPrimax from "../../../../../components/InputPrimax";
import { IRegOfConceptsObjModel } from "../../../../../store/registrationOfConcepts/regOfConcepts.interface";
import { useAppDispatch } from "../../../../../hooks/useReducer";
import {
  postRegisterOfConceptsThunk,
  putRegisterOfConceptsThunk,
} from "../../../../../store/registrationOfConcepts/regOfConcepts.thunk";
interface IProps {
  title: string;
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  dataSelected?: IRegOfConceptsObjModel | null;
}
const FormRegOfConcepts = ({
  open,
  handleOk,
  handleCancel,
  title,
  dataSelected,
}: IProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        code: yup.string().required("Campo requerido"),
        description: yup.string().required("Campo requerido"),
      })
    ),
  });

  useEffect(() => {
    if (dataSelected) {
      setValue("code", dataSelected.code);
      setValue("description", dataSelected.description);
    }
  }, [dataSelected]);

  const onSubmit: SubmitHandler<any> = (data) => {
    if ((dataSelected as IRegOfConceptsObjModel).id) {
      dispatch(
        putRegisterOfConceptsThunk({
          id: (dataSelected as IRegOfConceptsObjModel).id,
          code: data.code,
          description: data.description,
          state: true,
          updateDate: new Date()
        })
      ).then(() => {
        handleOk();
      });

    } else {
      dispatch(
        postRegisterOfConceptsThunk({
          code: data.code,
          description: data.description,
          state: true,
        })
      ).then(() => {
        handleOk();
      });
    }
  };

  return (
    <ModalCustom
      title={title}
      open={open}
      handleOk={handleOk}
      handleCancel={handleCancel}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputPrimax
          label="Código"
          name="code"
          register={register}
          placeholder="Introduzca el código"
          errors={errors}
          type="text"
          required={true}
          disabled={false}
          labelClass="label-filter"
          inputClass="input-filter"
          maxLength={8}

        />
        <InputPrimax
          label="Descripción"
          name="description"
          register={register}
          placeholder="Introduzca la descripción"
          errors={errors}
          type="text"
          required={true}
          disabled={false}
          labelClass="label-filter"
          inputClass="input-filter"
        />
        <button className="btn-form" type="submit">
          Guardar
        </button>
      </form>
    </ModalCustom>
  );
};

export default FormRegOfConcepts;
