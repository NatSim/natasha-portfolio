declare module '*.png' {
    const value: string;
    export default value;
  }

 // src/declarations.d.ts
declare module './src/common/ThemeContext.jsx' {
    // Define the types for ThemeContext if needed, or use `any` to allow any type
    export const ThemeProvider: any;
    export const useTheme: any;
  }
  