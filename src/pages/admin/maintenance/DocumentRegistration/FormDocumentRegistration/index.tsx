import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import InputPrimax from "../../../../../components/InputPrimax";
import ModalCustom from "../../../../../components/ModalCustom";
import SelectPrimax from "../../../../../components/SelectPrimax/SelectPrimax";
import { useAppDispatch } from "../../../../../hooks/useReducer";
import { IDocumentRegistrationObjModel } from "../../../../../store/documentRegistration/documentRegistration.interface";
import {
  postDocumentRegistrationThunk,
  putDocumentRegistrationThunk,
} from "../../../../../store/documentRegistration/documentRegistration.thunk";
import { ISystemParametersObjModel } from "../../../../../store/systemParameters/systemParameter.interface";
interface IProps {
  title: string;
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  dataSelected?: IDocumentRegistrationObjModel | null | undefined;
  listSystemParameters: ISystemParametersObjModel[];
}
const FormDocumentRegistration = ({ open, handleOk, handleCancel, title, dataSelected, listSystemParameters }: IProps) => {
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
        typeOfTax: yup.string().required("Campo requerido"),
        affectionValue: yup.number().required("Campo requerido"),
        validRucs: yup.string().required("Campo requerido"),
        serialDigit: yup.string().required("Campo requerido"),
        correlativeDigit: yup.string().required("Campo requerido"),
        observation: yup.string().required("Campo requerido"),
      })
    ),
  });

  useEffect(() => {
    if (dataSelected) {
      setValue("code", dataSelected.code);
      setValue("description", dataSelected.description);
      setValue("typeOfTax", dataSelected.typeOfTax);
      setValue("affectionValue", dataSelected.affectionValue);
      setValue("validRucs", dataSelected.validRucs);
      setValue("serialDigit", dataSelected.serial);
      setValue("correlativeDigit", dataSelected.correlative);
      setValue("observation", dataSelected.observation);
    }
  }, [dataSelected]);

  const onSubmit: SubmitHandler<any> = (data) => {
    if ((dataSelected as IDocumentRegistrationObjModel).id) {
      dispatch(
        putDocumentRegistrationThunk({
          id: (dataSelected as IDocumentRegistrationObjModel)?.id,
          code: data.code,
          description: data.description,
          typeOfTax: data.typeOfTax,
          affectionValue: data.affectionValue,
          validRucs: data.validRucs,
          serialDigit: Number(listSystemParameters.find((item) => item.serialDigit === data.serialDigit)?.id),
          correlativeDigit: Number(listSystemParameters.find((item) => item.correlativeDigit === data.correlativeDigit)?.id),
          observation: data.observation,
          state: true,
        })
      ).then((res) => {
        handleOk();
      });
    } else {
      dispatch(
        postDocumentRegistrationThunk({
          code: data.code,
          description: data.description,
          typeOfTax: data.typeOfTax,
          affectionValue: data.affectionValue,
          validRucs: data.validRucs,
          serialDigit: Number(listSystemParameters.find((item) => item.serialDigit === data.serialDigit)?.id),
          correlativeDigit: Number(listSystemParameters.find((item) => item.correlativeDigit === data.correlativeDigit)?.id),
          observation: data.observation,
          state: true,
        })
      ).then((res) => {
        handleOk();
      });
    }
  };

  return (
    <ModalCustom title={title} open={open} handleOk={handleOk} handleCancel={handleCancel} footer={null}>
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
        <InputPrimax
          label="Tipo de impuesto"
          name="typeOfTax"
          register={register}
          placeholder="Introduzca el tipo de impuesto"
          errors={errors}
          type="text"
          required={true}
          disabled={false}
          labelClass="label-filter"
          inputClass="input-filter"
        />
        <InputPrimax
          label="Valor afecto"
          name="affectionValue"
          register={register}
          placeholder="Introduzca el valor afecto"
          errors={errors}
          type="text"
          required={true}
          disabled={false}
          labelClass="label-filter"
          inputClass="input-filter"
        />
        <InputPrimax
          label="RUCs válidos"
          name="validRucs"
          register={register}
          placeholder="Introduzca los RUCs válidos"
          errors={errors}
          type="text"
          required={true}
          disabled={false}
          labelClass="label-filter"
          inputClass="input-filter"
        />
        <SelectPrimax
          label="Dígito de serie"
          values={listSystemParameters.map((item) => item.serialDigit) || []}
          {...register("serialDigit")}
          labelClass="label-filter"
        />
        <SelectPrimax
          label="Dígito de correlativo"
          values={listSystemParameters.map((item) => item.correlativeDigit) || []}
          {...register("correlativeDigit")}
          labelClass="label-filter"
        />

        <InputPrimax
          label="Observación"
          name="observation"
          register={register}
          placeholder="Introduzca la observación"
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

export default FormDocumentRegistration;
