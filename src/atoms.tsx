import { atom } from "recoil";

export const locationNameState = atom({
  key: "locationName",
  default: "",
});

export const locationNameAppearState = atom({
  key: "locationNameAppear",
  default: false,
});
