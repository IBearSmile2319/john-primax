import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import InputPrimax from "../../../../../components/InputPrimax";
import ModalCustom from "../../../../../components/ModalCustom";
import SelectPrimax from "../../../../../components/SelectPrimax/SelectPrimax";
import { useAppDispatch } from "../../../../../hooks/useReducer";
import { IOperationManagementObjModel } from "../../../../../store/operationManagement/operationManagement.interface";
import { IPurchaseOrdersObjModel } from "../../../../../store/purchaseOrders/purchaseOrders.interface";
import {
  postPurchaseOrdersThunk,
  putPurchaseOrdersThunk,
} from "../../../../../store/purchaseOrders/purchaseOrders.thunk";
interface IProps {
  title: string;
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  dataSelected?: IPurchaseOrdersObjModel | null;
  listOperationCode: IOperationManagementObjModel[];
}

const FormPurchaseOrders = ({
  open,
  handleOk,
  handleCancel,
  title,
  dataSelected,
  listOperationCode,
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
        operationCode: yup.string().required("Campo requerido"),
        purchaseAmount: yup.number().required("Campo requerido"),
        documentNumber: yup.string().required("Campo requerido"),
      })
    ),
  });
  useEffect(() => {
    if (dataSelected) {
      setValue("operationCode", dataSelected.operationCode);
      setValue("purchaseAmount", dataSelected.purchaseAmount);
      setValue("documentNumber", dataSelected.documentNumber);
    }
  }, [dataSelected]);

  const onSubmit: SubmitHandler<any> = (data) => {
    if ((dataSelected as IPurchaseOrdersObjModel).id) {
      dispatch(
        putPurchaseOrdersThunk({
          id: (dataSelected as IPurchaseOrdersObjModel).id,
          operationCode: Number(
            listOperationCode.find(
              (item) => item.description === data.operationCode
            )?.id
          ),
          purchaseAmount: Number(data.purchaseAmount),
          documentNumber: data.documentNumber,
          state: true,
          registrationDate: new Date(),
        })
      ).then(() => {
        handleOk();
      });
    } else {
      dispatch(
        postPurchaseOrdersThunk({
          operationCode: Number(
            listOperationCode.find(
              (item) => item.description === data.operationCode
            )?.id
          ),
          purchaseAmount: Number(data.purchaseAmount),
          documentNumber: data.documentNumber,
          state: true,
          registrationDate: new Date(),
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
        <SelectPrimax
          label="Código de operación"
          values={listOperationCode.map((item) => item.description)}
          {...register("operationCode")}
          labelClass="label-filter"
        />
        <InputPrimax
          label="Monto de compra"
          name="purchaseAmount"
          register={register}
          placeholder="Introduzca el monto de compra"
          errors={errors}
          type="text"
          required={true}
          disabled={false}
          labelClass="label-filter"
          inputClass="input-filter"
          maxLength={8}
        />
        <InputPrimax
          label="Número de documento"
          name="documentNumber"
          register={register}
          placeholder="Introduzca el número de documento"
          errors={errors}
          type="text"
          required={true}
          disabled={false}
          labelClass="label-filter"
          inputClass="input-filter"
          maxLength={8}
        />
        <button className="btn-form" type="submit">
          Guardar
        </button>
      </form>
    </ModalCustom>
  );
};

export default FormPurchaseOrders;
