// {
//     "status": 1,
//     "description": "Transaction Sucessfully",
//     "objModel": [
//       {
//         "id": 1,
//         "serialDigit": "Ltr/Num",
//         "correlativeDigit": "Ltr/Num",
//         "igv": 18,
//         "sessionAttempts": 20,
//         "timeToChangePassword": 15,
//         "supportNumber": "989965845",
//         "inactivityTime": 20,
//         "classification": "Testing",
//         "notificationTime": 20,
//         "providerCost": 12.5,
//         "exchangeRateValue": 3.5
//       }
//     ]
//   }

export interface ISystemParametersInitialState {
    systemParameters: ISystemParametersObjModel[];
    selectedSystemParameters: ISystemParametersObjModel | null;
    isLoading: boolean;
    error: string;
}

export interface ISystemParametersRootObject {
    status: number;
    description: string;
    objModel: ISystemParametersObjModel[];
}

export interface ISystemParametersObjModel {
    id: number;
    serialDigit: string;
    correlativeDigit: string;
    igv: number;
    sessionAttempts: number;
    timeToChangePassword: number;
    supportNumber: string;
    inactivityTime: number;
    classification: string;
    notificationTime: number;
    providerCost: number;
    exchangeRateValue: number;
}

// post and put