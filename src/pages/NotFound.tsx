import { Box, Container, Typography, Button, Stack } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link as RouterLink } from "react-router-dom"
import { Home, Compass } from "lucide-react"

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <Box
      component="main"
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#07170c",
        backgroundImage:
          "radial-gradient(ellipse at 50% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 70%), radial-gradient(ellipse at 80% 80%, rgba(148, 212, 75, 0.08) 0%, transparent 60%)",
        color: "#ffffff",
        py: { xs: 12, md: 16 },
        px: 3,
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={3} alignItems="center">
          <Box
            sx={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              bgcolor: "rgba(34, 197, 94, 0.12)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4ade80",
              boxShadow: "0 8px 30px rgba(34, 197, 94, 0.2)",
            }}
          >
            <Compass size={44} />
          </Box>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
              fontWeight: 800,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {t("notFound.title", "404 - Page Not Found")}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.72)",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.6,
              maxWidth: 460,
            }}
          >
            {t(
              "notFound.subtitle",
              "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            )}
          </Typography>

          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            startIcon={<Home size={18} />}
            sx={{
              mt: 2,
              borderRadius: "999px",
              px: 3.5,
              py: 1.3,
              bgcolor: "#4ade80",
              color: "#07170c",
              fontSize: "0.92rem",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0 8px 24px rgba(74, 222, 128, 0.3)",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: "#6ee7b7",
                transform: "translateY(-2px)",
                boxShadow: "0 12px 30px rgba(74, 222, 128, 0.4)",
              },
            }}
          >
            {t("notFound.button", "Back to Home")}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
