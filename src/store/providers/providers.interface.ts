
export interface IProviderInitialState {
    providers: IProviderObjModel[],
    isLoading: boolean,
    error: string
}


export interface IProviderRootObject {
  status: number;
  description: string;
  objModel: IProviderObjModel[];
}

export interface IProviderObjModel {
  id: number;
  ruc: string;
  businessName: string;
  department: string;
  province: string;
  district: string;
  direction: string;
  personInCharge: string;
  phone: string;
  cellPhone: string;
  taxpayerStatus: string;
  state: boolean;
  registrationDate: string;
}
