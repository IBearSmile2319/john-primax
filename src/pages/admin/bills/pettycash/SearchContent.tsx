import React from 'react'
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import InputPrimax from '../../../../components/InputPrimax';
import SelectPrimax from '../../../../components/SelectPrimax/SelectPrimax'
const SearchContent = () => {
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
        // resolver: yupResolver(FormProductValidate)
    })
    return (
        <div className="filter-content">
            <form className="form-filter">
                <SelectPrimax
                    label='Criterio de búsqueda'
                    values={['RUC', 'Razón social', 'Nro. de documento']}
                    {...register('option')}
                    onChange={(e) => console.log(e.target.value)}
                    labelClass='label-filter'
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
                <button
                    type="submit"
                    className='btn-filter'
                >
                    <i className="icon-filter"></i>
                    Buscar
                </button>
                <button
                    type="submit"
                    className='btn-filter reset'
                >
                    <i className="icon-reset"></i>
                    Limpiar
                </button>
            </form>
            <div className="filter-buttons">
                <button
                    type="submit"
                    className='btn-filter underline'
                >
                    <i className="icon-publish"></i>
                    Importar registro
                </button>
                <button
                    type="submit"
                    className='btn-filter underline'
                >
                    <i className="icon-add"></i>
                    Nuevo registro
                </button>
                <button
                    type="submit"
                    className='btn-filter underline'
                >
                    <i className="icon-excel"></i>
                    Descargar excel
                </button>
            </div>
        </div>
    )
}

export default SearchContent