import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    colors: {
      link: string;
      background: string;
      border:string;
      text: string;
      primary: string;
      button: {
        background: string;
        border:string;
        text: string;
        backgroundHover: string;
        textHover: string;
      };
      skeletonCard:{
        gradient: string;
        background: string;
      }
    };
  }
}
