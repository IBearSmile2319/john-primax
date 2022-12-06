export interface IPurchaseOrdersInitialState {
  purchaseOrders: IPurchaseOrdersObjModel[];
  selectedPurchaseOrder: IPurchaseOrdersObjModel | null;
  isLoading: boolean;
  error: string;
}

export interface IPurchaseOrdersRootObject {
  status: number;
  description: string;
  objModel: IPurchaseOrdersObjModel[];
}

export interface IPurchaseOrdersObjModel {
  id: number;
  operationCode: string;
  purchaseAmount: number;
  documentNumber: string;
  registrationDate: string;
  state: boolean;
}
