import Bills from "../pages/admin/bills/Bills";
import PettyCash from "../pages/admin/bills/pettycash/PettyCash";
import PurchaseOrders from "../pages/admin/bills/PurchaseOrders/PurchaseOrders";
import AnnualManagement from "../pages/admin/budgets/annualmanagement/AnnualManagement";
import Budgets from "../pages/admin/budgets/Budgets";
import DocumentRegistration from "../pages/admin/maintenance/DocumentRegistration/DocumentRegistration";
import Items from "../pages/admin/maintenance/Items/Items";
import Maintenance from "../pages/admin/maintenance/Maintenance";
import MaterialsManagement from "../pages/admin/maintenance/MaterialsManagement/MaterialsManagement";
import Providers from "../pages/admin/maintenance/providers/Providers";
import RegistrationOfConcepts from "../pages/admin/maintenance/RegistrationOfConcepts/RegistrationOfConcepts";
import UserOperation from "../pages/admin/maintenance/UserOperations/UserOperation";
import OperationManagement from "../pages/admin/maintenance/OperationManagement/OperationManagement";

export interface ILink {
    name: string;
    path: string;
    element: React.ComponentType<any>;
    subElement?: React.ComponentType<any> | any;
    icon?: string;
    iconActive?: string;
    subMenu?: ILink[];
}

const Links: ILink[] = [
    {
        name: 'mantenimiento',
        path: 'mantenimiento',
        element: Maintenance,
        subElement: Providers,
        icon: "icon-dns-primary",
        iconActive: "icon-dns-secondary",
        subMenu: [
            {
                name: 'Proveedores',
                path: '',
                element: Providers,
            },
            {
                name: 'Registro de conceptos',
                path: 'registro-conceptos',
                element: RegistrationOfConcepts
            },
            {
                name: "Registro de documentos",
                path: "registro-documentos",
                element: DocumentRegistration
            },
            {
                name: "Partidas",
                path: "partidas",
                element: Items
            },
            {
                name: "Administración de materiales",
                path: "administracion-materiales",
                element: MaterialsManagement
            },
            {
                name: "Operaciones por usuario",
                path: "operaciones-usuario",
                element: UserOperation
            },
            {
                name: "gestion de operaciones",
                path: "gestion-operaciones",
                element: OperationManagement
            }

        ]
    },
    {
        name: 'Presupuestos',
        path: 'presupuestos',
        element: Budgets,
        subElement: AnnualManagement,
        icon: "icon-account-balance-primary",
        iconActive: "icon-account-balance-secondary",
        subMenu: [
            {
                name: 'Gestión de presupuesto anual',
                path: '',
                element: AnnualManagement,
            }
        ]
    },
    {
        name: 'gastos',
        path: 'gastos',
        element: Bills,
        subElement: PettyCash,
        icon: "icon-bills-primary",
        iconActive: "icon-bills-secondary",
        subMenu: [
            {
                name: 'Caja chica',
                path: '',
                element: PettyCash,
            },
            {
                name: "Ordenes de compra",
                path: "ordenes-compra",
                element: PurchaseOrders
            }
        ]
    }
];


export default Links;