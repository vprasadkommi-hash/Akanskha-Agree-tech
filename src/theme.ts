import { createTheme, alpha } from "@mui/material/styles"
import type { ThemeOptions } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    hero: {
      overlay: string
      textShadow: string
      textShadowLight: string
      textShadowStrong: string
      headlineColor: string
      buttonShadow: string
      toggleBg: string
      outlineBorder: string
      outlineHoverBg: string
    }
  }
  interface PaletteOptions {
    hero?: {
      overlay?: string
      textShadow?: string
      textShadowLight?: string
      textShadowStrong?: string
      headlineColor?: string
      buttonShadow?: string
      toggleBg?: string
      outlineBorder?: string
      outlineHoverBg?: string
    }
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#3d6b3f",
      light: "#5a8d5c",
      dark: "#2a4a2b",
    },
    secondary: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#666666",
    },
    hero: {
      overlay: `linear-gradient(90deg, rgba(8,10,8,0.65) 0%, rgba(10,18,12,0.55) 20%, rgba(15,30,18,0.35) 40%, rgba(0,0,0,0.08) 70%, transparent 100%)`,
      textShadow: `0 2px 12px ${alpha("#000000", 0.5)}`,
      textShadowLight: `0 1px 10px ${alpha("#000000", 0.5)}`,
      textShadowStrong: `0 2px 24px ${alpha("#000000", 0.7)}`,
      headlineColor: alpha("#ffffff", 0.9),
      buttonShadow: `0 14px 40px ${alpha("#f59e0b", 0.3)}`,
      toggleBg: alpha("#ffffff", 0.9),
      outlineBorder: alpha("#ffffff", 0.6),
      outlineHoverBg: alpha("#ffffff", 0.1),
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
}

const theme = createTheme(themeOptions)

export default theme
