export interface DataTypeProvider {
  key: React.Key;
  ruc: string;
  description: string;
  telefono: string;
  direccion: string;
  contacto: string;
  estado: string;
}

export const dataProvider: DataTypeProvider[] = [
    {
      key: "1",
      ruc: "1005849582",
      description: "VELA CAHUACHI LILI ADILIA",
      telefono: "5533529",
      direccion: "MZA.C7, LT.10, URB. EX ZONA COMERCIAL VENTANILLA - CALLAO",
      contacto: "VELA CAHUACHI LILI ADILIA",
      estado: "ALTA",
    },
    {
      key: "2",
      ruc: "1043760787",
      description: "10437607872",
      telefono: "01-3609184",
      direccion:
        "AV. LA PLAYA MZ.U5, LT.16 A.H LICENCIADOS DE VENTANILLA - VENTANILLA - CALLA0",
      contacto: "GONZALES VERA ENRRIQUE",
      estado: "ALTA",
    },
    {
      key: "3",
      ruc: "10430216282",
      description: "BUSINESS HOUSE",
      telefono: "NINGUNO",
      direccion: "AV. JOSE DE SAN MARTIN MZA G. LTE 07 - PARACAS - PISCO - ICA",
      contacto: "CAMPOS QUISPE ANDRES",

      estado: "BAJA",
    },
    {
      key: "4",
      ruc: "10058495820",

      description: "VELA CAHUACHI LILI ADILIA",
      telefono: "5533529",

      direccion: "MZA.C7, LT.10, URB. EX ZONA COMERCIAL VENTANILLA - CALLAO",
      contacto: "VELA CAHUACHI LILI ADILIA",
      estado: "ALTA",
    },
    {
      key: "5",
      ruc: "1047573508",
      description: "BOTICAS Y VIDA",
      telefono: "-",
      direccion: "-",
      contacto: "-",
      estado: "ALTA",
    },
    {
      key: "6",
      ruc: "10475735086",
      description: "BOTICAS Y VIDA",
      telefono: "-",
      direccion: "-",
      contacto: "-",
      estado: "ALTA",
    },
    {
      key: "7",
      ruc: "10239594463",

      description: "10239594463 - SALAS VALENCIA VICTOR WILFREDO",
      telefono: "NINGUNO",
      direccion: "CAL.BELEN NRO. 537 CENTRO HISTORICO CUSCO - CUSCO - CUSCO",
      contacto: "NINGUNO",
      estado: "ALTA",
    },
    {
      key: "8",
      ruc: "10426218301",
      description: "10426218301 - HUAMAN LLAMOCCA LUCILA",
      telefono: "NINGUNO",
      direccion:
        "NRO. SN C.C. PHIRY (PIE D PSTA DESV KM82,PREG MIGUEL BOCANGL)CUSCO - URUBAMBA -",
      contacto: "NINGUNO",
      estado: "ALTA",
    },
    {
      key: "9",
      ruc: "20546292658",
      description: "20546292658 - GSP TRUJILLO S.A.C.",
      telefono: "NINGUNO",
      direccion:
        "CAL.FRANCISCO BOLOGNESI NRO. 561 URB. CENTRO HISTORICO TRUJILLO (FRANCISCO BOLOG",
      contacto: "NINGUNO",
      estado: "ALTA",
    },
    {
      key: "10",
      ruc: "20545735700",
      description: "A&B SALINAS S.A.C.",
      telefono: "ninguno",
      direccion:
        "AV. EMANCIPACION NRO. 646 INT. 127 URB. LIMA CERCADO LIMA - LIMA",
      contacto: "ninguno",
      estado: "ALTA",
    },
  ];