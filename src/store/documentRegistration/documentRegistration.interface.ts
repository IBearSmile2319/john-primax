	


export interface IDocumentRegistrationInitialState {
    documentRegistration: IDocumentRegistrationObjModel[];
    selectedDocumentRegistration: IDocumentRegistrationObjModel | null;
    isLoading: boolean;
    error: string;
}

export interface IDocumentRegistrationRootObject {
    status: number;
    description: string;
    objModel: IDocumentRegistrationObjModel[];
}

export interface IDocumentRegistrationObjModel {
    id: number;
    code: string;
    description: string;
    typeOfTax: string;
    affectionValue: number;
    validRucs: string;
    serial: string;
    correlative: string;
    observation: string;
    state: boolean;
    updateDate: string;
}

// post and put

export interface IPostDocumentRegistration {
    id?: number;
    code: string;
    description: string;
    typeOfTax: string;
    affectionValue: number;
    validRucs: string;
    serialDigit: number;
    correlativeDigit: number;
    observation: string;
    state: boolean;
}
