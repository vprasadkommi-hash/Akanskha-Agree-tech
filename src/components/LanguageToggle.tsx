import { useTranslation } from "react-i18next"
import { Button } from "@mui/material"
import { Languages } from "lucide-react"

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const targetLang = i18n.language === "te" ? "en" : "te"
  const label = targetLang === "en" ? "English" : "తెలుగు"

  return (
    <Button
      size="small"
      startIcon={<Languages size={18} />}
      onClick={() => i18n.changeLanguage(targetLang)}
      sx={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 1300,
        px: 2,
        py: 0.5,
        fontSize: "0.85rem",
        fontWeight: 600,
        borderRadius: "50px",
        bgcolor: (t) => t.palette.hero.toggleBg,
        backdropFilter: "blur(8px)",
        color: "text.secondary",
        textTransform: "none",
        "&:hover": {
          bgcolor: (t) => t.palette.hero.toggleBg,
          filter: "brightness(0.95)",
        },
      }}
    >
      {label}
    </Button>
  )
}
