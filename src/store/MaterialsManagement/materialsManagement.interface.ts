export interface IMaterialManagementInitialState {
    materialsManagement: IMaterialManagementObjModel[];
    isLoading: boolean;
    error: string;
}

export interface IMaterialManagementRootObject {
  status: number;
  description: string;
  objModel: IMaterialManagementObjModel[];
}

export interface IMaterialManagementObjModel {
  id: number;
  description: string;
  idItems: number;
  price: number;
  bill: string;
  updateDate: string;
  state: boolean;
}
