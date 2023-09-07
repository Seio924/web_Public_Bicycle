import { atom, selector, useSetRecoilState } from "recoil";

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

export const bicycleIdState = atom({
  key: "bicycleId",
  default: "",
});

export const locationNameState = atom({
  key: "locationName",
  default: "",
});

export const locationNameAppearState = atom({
  key: "locationNameAppear",
  default: false,
});

export const bicycleInfoState = atom<Ibicycle[]>({
  key: "bicycleInfo",
  default: [],
});

export const localBicycleInfoState = atom<Ibicycle[]>({
  key: "localBicycleInfo",
  default: [],
});

export const bicycleInfoSelector = selector({
  key: "bicycleInfoSelector",
  get: ({ get }) => {
    const bicycleInfos = get(bicycleInfoState);
    const locationN = get(locationNameState);
    const result = bicycleInfos?.filter(
      (loc: Ibicycle) => loc.STA_LOC === locationN
    );

    return result;
  },
});

export const localBicycleInfoSelector = selector({
  key: "localBicycleInfoSelector",
  get: ({ get }) => {
    const bicycleInfo = get(localBicycleInfoState);
    const bicycleId: string = get(bicycleIdState);
    const result = bicycleInfo?.filter(
      (loc: Ibicycle) => loc.RENT_ID === bicycleId
    );

    return result;
  },
});
