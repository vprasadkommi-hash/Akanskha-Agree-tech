import { Box, Container, Typography, Stack } from "@mui/material"
import { useTranslation } from "react-i18next"

const partners = [
  { name: "CHASE", symbol: "⬡" },
  { name: "JOHN DEERE", symbol: "" },
  { name: "Leader", symbol: "⚡" },
  { name: "Kubota", symbol: "" },
  { name: "GLEANER", symbol: "" },
  { name: "MAHINDRA AGRI", symbol: "" },
]

export default function PartnerBrands() {
  const { i18n } = useTranslation()
  const isTe = i18n.language === "te"

  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        borderTop: "1px solid #edf2ee",
        borderBottom: "1px solid #edf2ee",
        py: { xs: 3, md: 3.5 },
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2.5, md: 4 }}
          sx={{
            alignItems: { xs: "center", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#64748b",
              fontSize: { xs: "0.78rem", md: "0.82rem" },
              fontWeight: 600,
              lineHeight: 1.35,
              maxWidth: { xs: "100%", md: 170 },
              textAlign: { xs: "center", md: "left" },
              letterSpacing: "-0.01em",
            }}
          >
            {isTe
              ? "భారతదేశవ్యాప్తంగా వేలాది రైతులు & భాగస్వాముల విశ్వసనీయ వేదిక"
              : "Trusted by thousand companies in the world"}
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 3, sm: 4, md: 5 }}
            sx={{
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-end" },
              flexWrap: "wrap",
              rowGap: 2,
              flex: 1,
            }}
          >
            {partners.map((p) => (
              <Typography
                key={p.name}
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.18rem" },
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  color: "#94a3b8",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  transition: "all 0.2s ease",
                  cursor: "default",
                  "&:hover": {
                    color: "#1e293b",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                {p.name}
                {p.symbol && (
                  <Box component="span" sx={{ fontSize: "0.85em", opacity: 0.85 }}>
                    {p.symbol}
                  </Box>
                )}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
