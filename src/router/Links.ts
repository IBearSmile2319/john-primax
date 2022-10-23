import Bills from "../pages/admin/bills/Bills";
import PettyCash from "../pages/admin/bills/pettycash/PettyCash";
import AnnualManagement from "../pages/admin/budgets/annualmanagement/AnnualManagement";
import Budgets from "../pages/admin/budgets/Budgets";
import Maintenance from "../pages/admin/maintenance/Maintenance";
import Providers from "../pages/admin/maintenance/providers/Providers";

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
                name: 'proveedores',
                path: '',
                element: Providers,
            },
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
            }
        ]
    }
];


export default Links;