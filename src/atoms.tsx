import { atom } from "recoil";

export interface Ibicycle {
  STA_LOC: string;
  RENT_ID: string;
  RENT_NO: string;
  RENT_NM: string;
  RENT_ID_NM: string;
  HOLD_NUM: string;
  STA_ADD1: string;
  STA_ADD2: string;
  STA_LAT: string;
  STA_LONG: string;
  START_INDEX: number;
  END_INDEX: number;
  RNUM: string;
}

export const locationNameState = atom({
  key: "locationName",
  default: "",
});

export const locationNameAppearState = atom({
  key: "locationNameAppear",
  default: false,
});

export const localBicycleInfo = atom<Ibicycle[]>({
  key: "localBicycleInfo",
  default: [],
});
