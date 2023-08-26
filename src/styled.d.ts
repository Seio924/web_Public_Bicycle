import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    accentColor: string;
    outlineColor: string;
    textColor: string;
  }
}
