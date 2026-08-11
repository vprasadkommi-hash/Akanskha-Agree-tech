import { useTranslation } from "react-i18next"
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material"
import { Mail, Languages } from "lucide-react"
import logo from "../assets/logo.jpeg"

const quickLinks = [
  ["nav.home", "#home"],
  ["nav.services", "#services"],
  ["nav.howItWorks", "#how-it-works"],
  ["nav.about", "#about"],
  ["nav.contact", "#contact"],
] as const

const serviceLinks = [
  "services.categories.landPreparation",
  "services.categories.cropCare",
  "services.categories.irrigationWater",
  "services.categories.harvesting",
  "services.categories.govtFinance",
  "services.categories.workforce",
] as const

export default function Footer() {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "te" ? "en" : "te")
  }

  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "common.white" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
              <Box
                component="img"
                src={logo}
                alt={t("brand")}
                sx={{ width: 42, height: 42, objectFit: "contain", borderRadius: 999 }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                {t("brand")}
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.78)", maxWidth: 320, mb: 3 }}
            >
              {t("footer.tagline")}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.6)", display: "block" }}
            >
              {t("footer.madeInIndia")}
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              {t("footer.quickLinks")}
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map(([labelKey, href]) => (
                <Button
                  key={labelKey}
                  component="a"
                  href={href}
                  sx={{
                    justifyContent: "flex-start",
                    px: 0,
                    py: 0.25,
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    textTransform: "none",
                    lineHeight: 1.5,
                    minWidth: 0,
                    "&:hover": { color: "common.white", bgcolor: "transparent" },
                  }}
                >
                  {t(labelKey)}
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              {t("footer.serviceCategories")}
            </Typography>
            <Stack spacing={1}>
              {serviceLinks.map((key) => (
                <Typography
                  key={key}
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.78)" }}
                >
                  {t(key)}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              {t("footer.contactUs")}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", color: "rgba(255,255,255,0.78)", mb: 2 }}
            >
              <Mail size={18} />
              <Typography variant="body2">{t("footer.supportEmail")}</Typography>
            </Stack>
            <Button
              size="small"
              startIcon={<Languages size={16} />}
              onClick={toggleLang}
              sx={{
                color: "common.white",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "50px",
                textTransform: "none",
                px: 2,
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              {i18n.language === "te" ? "తెలుగు" : "English"}
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            mt: 5,
            pt: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
            {`© ${new Date().getFullYear()} ${t("brand")}. ${t("footer.rights")}`}
          </Typography>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)" }}>
            {t("footer.madeInIndia")}
          </Typography>
        </Box>
        
      </Container>
    </Box>
  )
}
