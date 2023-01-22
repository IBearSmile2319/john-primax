// *************************************************************************************************
//                        USER PATHS
// *************************************************************************************************

export const GET_TOKEN = "/token";
export const REFRESH_TOKEN = `${GET_TOKEN}/refreshToken`;


// *************************************************************************************************
//                        PROVIDERS PATHS
// *************************************************************************************************

export const GET_PROVIDERS = "/Providers";
export const GET_EXPORTE_PROVIDERS = `${GET_PROVIDERS}/Export`;

// *************************************************************************************************
//                        REGISTER OF COMCEPTS PATHS
// *************************************************************************************************

export const GET_REGISTER_OF_CONCEPTS = "/RegistrationOfConcepts";
export const POST_REGISTER_OF_CONCEPTS = `${GET_REGISTER_OF_CONCEPTS}`;
export const PUT_REGISTER_OF_CONCEPTS = `${GET_REGISTER_OF_CONCEPTS}`;
export const DELETE_REGISTER_OF_CONCEPTS = `${GET_REGISTER_OF_CONCEPTS}/delete/:id`;
export const GET_EXPORTE_REGISTER_OF_CONCEPTS = `${GET_REGISTER_OF_CONCEPTS}/Export`;

// *************************************************************************************************
//                        PURCHASE ORDERS PATHS
// *************************************************************************************************
export const GET_PURCHASE_ORDERS = "/PurchaseOrders";
export const POST_PURCHASE_ORDERS = `${GET_PURCHASE_ORDERS}`;
export const PUT_PURCHASE_ORDERS = `${GET_PURCHASE_ORDERS}`;
export const DELETE_PURCHASE_ORDERS = `${GET_PURCHASE_ORDERS}/delete/:id`;
export const GET_EXPORTE_PURCHASE_ORDERS = `${GET_PURCHASE_ORDERS}/Export`;

// *************************************************************************************************
                    //  OPERATION MANAGEMENT (se usa en el post de purchase orders
// *************************************************************************************************
export const GET_OPERATION_MANAGEMENT = "/OperationManagement";
// falta

// *************************************************************************************************
//                      USER OPERATIONS
// *************************************************************************************************
export const GET_USER_OPERATIONS = "/UserOperations";
// falta

// *************************************************************************************************
//                      MATERIALS MANAGEMENT 
// *************************************************************************************************
export const GET_MATERIALS_MANAGEMENT = "/MaterialsManagement";
// falta

// *************************************************************************************************
//                      ITEMS 
// *************************************************************************************************
export const GET_ITEMS = "/Items";
// falta

// *************************************************************************************************
//                      DOCUMENT REGISTRATION falta datos
// *************************************************************************************************
export const GET_DOCUMENT_REGISTRATION = "/DocumentRegistration";
export const GET_EXPORTE_DOCUMENT_REGISTRATION = `${GET_DOCUMENT_REGISTRATION}/Export`;
// falta

// *************************************************************************************************
//                 SYSTEM PARAMETERS     
// *************************************************************************************************

export const GET_SYSTEM_PARAMETERS = "/SystemParameters";
// falta