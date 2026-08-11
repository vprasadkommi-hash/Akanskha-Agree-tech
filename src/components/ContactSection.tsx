import { Box, Container, Stack, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Leaf, Phone, Mail, MapPin, Sprout, Smartphone, Users } from "lucide-react"
import handphone from "../assets/handphone.png"

interface ContactSectionProps {
  inDialog?: boolean
}

export default function ContactSection({ inDialog = false }: ContactSectionProps) {
  const { t } = useTranslation()

  const contactCards = [
    {
      icon: <Phone size={22} />,
      label: t("contact.callUs"),
      value: t("contact.phone"),
      sub: t("contact.hours"),
    },
    {
      icon: <Mail size={22} />,
      label: t("contact.emailUs"),
      value: t("contact.email"),
      sub: t("contact.replyTime"),
    },
    {
      icon: <MapPin size={22} />,
      label: t("contact.addressTitle"),
      value: t("contact.addressLine1"),
      sub: t("contact.addressLine2"),
    },
  ]

  const features = [
    { icon: <Leaf size={20} />, key: "farmers" },
    { icon: <Sprout size={20} />, key: "sustainable" },
    { icon: <Smartphone size={20} />, key: "smart" },
    { icon: <Users size={20} />, key: "communities" },
  ]

  return (
    <Box
      id={inDialog ? undefined : "contact"}
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#f7f6ee",
        backgroundImage: "linear-gradient(180deg, #fcfcf7 0%, #f1f6ea 100%)",
        py: inDialog ? { xs: 2, md: 3 } : { xs: 6, md: 10 },
        px: { xs: 2.5, sm: 4, md: 5 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Top area */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          sx={{ alignItems: "center" }}
        >
          <Stack
            spacing={2.5}
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                px: 2,
                py: 0.75,
                borderRadius: "50px",
                bgcolor: "rgba(61,107,63,0.08)",
                border: "1px solid rgba(61,107,63,0.18)",
                color: "#3d6b3f",
                fontWeight: 700,
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <Leaf size={14} />
              {t("contact.prelaunch")}
            </Box>

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                color: "#3d6b3f",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              <Box sx={{ width: 24, height: 1, bgcolor: "#3d6b3f" }} />
              <Leaf size={14} />
              {t("contact.kicker")}
              <Box sx={{ width: 24, height: 1, bgcolor: "#3d6b3f" }} />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "2.1rem", sm: "3rem", md: "3.5rem" },
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#16241c",
                maxWidth: 540,
              }}
            >
              {t("contact.title")}
            </Typography>

            <Box
              sx={{
                width: 64,
                height: 3,
                borderRadius: 3,
                bgcolor: "#c88724",
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: "0.92rem", md: "1rem" },
                lineHeight: 1.7,
                color: "rgba(28,45,30,0.72)",
                maxWidth: 480,
              }}
            >
              {t("contact.subtitle")}
            </Typography>
          </Stack>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={handphone}
              alt={t("contact.phoneAlt")}
              sx={{
                width: { xs: 220, sm: 280, md: 340 },
                maxWidth: "100%",
                height: "auto",
                filter: "drop-shadow(0 24px 48px rgba(42,80,30,0.18))",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -10,
                right: { xs: -10, md: 20 },
                px: 2,
                py: 0.75,
                borderRadius: "50px",
                bgcolor: "#3d6b3f",
                color: "#fff",
                fontSize: "0.65rem",
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.2,
                boxShadow: "0 8px 24px rgba(61,107,63,0.25)",
              }}
            >
              {t("contact.floatingTag")}
              <br />
              {t("contact.floatingTagLine")}
            </Box>
          </Box>
        </Stack>

        {/* Contact cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 2, md: 3 },
          }}
        >
          {contactCards.map((card) => (
            <Box
              key={card.label}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: "24px",
                bgcolor: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.85)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 14px 40px rgba(50,90,40,0.06)",
                transition: "transform 250ms ease, box-shadow 250ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 50px rgba(50,90,40,0.12)",
                },
              }}
            >
              <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    minWidth: 44,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#3d6b3f",
                    color: "#fff",
                  }}
                >
                  {card.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#16241c", mb: 0.3 }}>
                    {card.label}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "0.92rem", md: "1rem" }, fontWeight: 700, color: "#16241c", mb: 0.3 }}>
                    {card.value}
                  </Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "rgba(28,45,30,0.62)" }}>
                    {card.sub}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Box>

        {/* CTA demo card */}
        {/* <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "28px",
            bgcolor: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(255,255,255,0.8)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 24px 60px rgba(50,90,40,0.1)",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 3, md: 5 },
          }}
        >
          <Box
            component="img"
            src={handphone}
            alt={t("contact.phoneAlt")}
            sx={{
              width: { xs: 160, md: 220 },
              height: "auto",
              flexShrink: 0,
              filter: "drop-shadow(0 18px 36px rgba(42,80,30,0.16))",
            }}
          />
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, fontWeight: 800, color: "#16241c", mb: 1 }}>
              {t("contact.demoTitle")}
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.85rem", md: "0.92rem" }, color: "rgba(28,45,30,0.68)", maxWidth: 460, mb: 2.5, mx: { xs: "auto", md: 0 } }}>
              {t("contact.demoSubtitle")}
            </Typography>
            <Button
              component="a"
              href={`mailto:${t("contact.email")}`}
              variant="contained"
              size="large"
              sx={{
                px: { xs: 3, md: 4 },
                py: 1.2,
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 800,
                fontSize: { xs: "0.85rem", md: "0.95rem" },
                bgcolor: "#2a6f37",
                backgroundImage: "linear-gradient(90deg, #2a6f37, #4a8f4c)",
                color: "#fff",
                boxShadow: "0 12px 28px rgba(42,111,55,0.3)",
                "&:hover": { bgcolor: "#1f5a29" },
              }}
            >
              {t("contact.requestDemo")}
            </Button>
          </Box>
        </Box> */}

        {/* Feature icons */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: { xs: 2, md: 3 },
            pt: { xs: 2, md: 3 },
          }}
        >
          {features.map((feature) => (
            <Box
              key={feature.key}
              sx={{
                textAlign: "center",
                p: { xs: 2, md: 2.5 },
                borderRadius: "20px",
                bgcolor: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.75)",
                transition: "transform 250ms ease",
                "&:hover": { transform: "translateY(-3px)" },
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  mx: "auto",
                  mb: 1.2,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(61,107,63,0.08)",
                  color: "#3d6b3f",
                }}
              >
                {feature.icon}
              </Box>
              <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#16241c" }}>
                {t(`contact.features.${feature.key}`)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Decorative bottom hills */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 80, md: 120 },
          pointerEvents: "none",
          opacity: 0.18,
          backgroundImage:
            "radial-gradient(ellipse 80% 100% at 20% 100%, #3d6b3f 0%, transparent 70%), radial-gradient(ellipse 90% 100% at 80% 100%, #5a8d5c 0%, transparent 65%)",
        }}
      />
    </Box>
  )
}
