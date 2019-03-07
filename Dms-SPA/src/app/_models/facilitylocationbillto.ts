
export interface FacilityLocationBillTo {

    billToClientID: number;
    billToClientName: string;

    tariffID: number;

    isChassis: boolean;
    isDryBox: boolean;
    isReefer: boolean;
    isGenset: boolean;

    ohChassis: boolean;
    ohDryBox: boolean;
    ohReefer: boolean;
    ohGenset: boolean;

  }
