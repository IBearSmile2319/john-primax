
export interface IRegOfConceptsInitialState {
    regOfConcepts: IRegOfConceptsObjModel[],
    selectedRegOfConcept: IRegOfConceptsObjModel | null,
    isLoading: boolean,
    error: string
}


export interface IRegOfConceptsRootObject {
  status: number;
  description: string;
  objModel: IRegOfConceptsObjModel[];
}

export interface IRegOfConceptsObjModel {
  id: number;
  code: string;
  description: string;
  state: boolean;
  updateDate: string;
}
