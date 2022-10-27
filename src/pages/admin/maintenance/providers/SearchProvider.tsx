import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputPrimax from "../../../../components/InputPrimax";
import SelectPrimax from "../../../../components/SelectPrimax/SelectPrimax";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
interface IOptions {
    value: number;
    label: string;
}
const data: IOptions[] = [
    {
        value: 1,
        label: "RUC",
    },
    {
        value: 2,
        label: "N° Telefónico",
    },
];

interface IProps {
    onSearch: (data: any) => void;
    onReset: () => void;
}
const SearchProvider = ({ onSearch, onReset }: IProps) => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(
            yup.object().shape({
                search: yup.string().required('Campo requerido'),
            })
        )
    });

    const onSubmit: SubmitHandler<any> = (data) => {
        onSearch(data);
    };
    const onClear = () => {
        setValue('search', '');
        setValue('option', 1);
        onReset();
    };
    return (
        <div className="filter-content">
            <div className="form-filter">
                <form 
                    className="form-filter"
                    onSubmit={handleSubmit(onSubmit)}>
                    <SelectPrimax
                        label="Criterio de búsqueda"
                        values={data}
                        {...register("option")}
                        labelClass="label-filter"
                    />
                    <InputPrimax
                        label="Número"
                        name="search"
                        register={register}
                        placeholder="Text"
                        errors={errors}
                        type="text"
                        required={true}
                        disabled={false}
                        labelClass="label-filter"
                        inputClass="input-filter"
                    />
                    <button type="submit" className="btn-filter">
                        <i className="icon-filter"></i>
                        Buscar
                    </button>
                </form>
                <button className="btn-filter reset"
                    onClick={onClear}
                >
                    <i className="icon-reset"></i>
                    Limpiar
                </button>
            </div>
            <div className="filter-buttons">
                <button type="submit" className="btn-filter underline">
                    <i className="icon-publish"></i>
                    Importar registro
                </button>
                <button type="submit" className="btn-filter underline">
                    <i className="icon-add"></i>
                    Nuevo registro
                </button>
                <button type="submit" className="btn-filter underline">
                    <i className="icon-excel"></i>
                    Descargar excel
                </button>
            </div>
        </div>
    );
};

export default SearchProvider;
