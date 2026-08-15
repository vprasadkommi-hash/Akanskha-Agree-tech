import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Box, Typography, Stack } from "@mui/material"
import { resources } from "../i18n"
import visionBg from "../assets/visionbg.webp"

const values = [
  { icon: "🌾", key: "farmerFirst" },
  { icon: "🤖", key: "technology" },
  { icon: "🤝", key: "community" },
]

const floatingLeaves = [
  { left: "4%", top: "20%", size: "1.6rem", duration: 9, delay: 0, drift: 14 },
  { left: "9%", top: "62%", size: "1.1rem", duration: 11, delay: 1.4, drift: -10 },
  { left: "93%", top: "24%", size: "1.4rem", duration: 10, delay: 0.8, drift: -12 },
  { left: "89%", top: "64%", size: "1.15rem", duration: 8, delay: 2.1, drift: 10 },
]

export default function OurVision() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === "te" ? "te" : "en"
  const quotes = resources[lang].translation.vision.quotes
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length)
    }, 6000)
    return () => clearInterval(id)
  }, [quotes.length])

  const activeQuote = quotes[index % quotes.length]

  return (
    <Box
      id="vision"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${visionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f7f6ee",
        py: { xs: 8, md: 10 },
        px: { xs: 2.5, sm: 4, md: 5 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 10%, rgba(255,255,255,0.55) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 75%, rgba(255,222,150,0.16) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {floatingLeaves.map((leaf, i) => (
        <Box
          key={i}
          aria-hidden
          sx={{
            position: "absolute",
            left: leaf.left,
            top: leaf.top,
            fontSize: leaf.size,
            opacity: 0.32,
            pointerEvents: "none",
            zIndex: 0,
            animation: `visionLeafFloat ${leaf.duration}s ease-in-out ${leaf.delay}s infinite`,
            "@keyframes visionLeafFloat": {
              "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
              "50%": { transform: `translate(${leaf.drift}px, -22px) rotate(12deg)` },
            },
          }}
        >
          🍃
        </Box>
      ))}

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1200, mx: "auto", width: "100%" }}>
        <Stack spacing={2.25} sx={{ alignItems: "center", textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              px: 2,
              py: 0.85,
              borderRadius: "50px",
              bgcolor: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(93,158,80,0.28)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 8px 24px rgba(60,110,50,0.08)",
            }}
          >
            <Typography sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3d6b3f" }}>
              🌿 {t("vision.badge")}
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.1rem", sm: "3rem", md: "3.9rem", lg: "4rem" },
              lineHeight: 1.15,
              letterSpacing: { xs: "-1px", md: "-2.5px" },
            }}
          >
            <Box component="span" sx={{ display: "block", color: "#16241c" }}>
              {t("vision.heading.line1")}
            </Box>
            <Box
              component="span"
              sx={{
                display: "block",
                backgroundImage: "linear-gradient(90deg, #3d6b3f 0%, #86c653 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {t("vision.heading.line2")}
            </Box>
          </Typography>

          <Box sx={{ width: 56, height: 3, borderRadius: 3, backgroundImage: "linear-gradient(90deg, transparent, #7fc24d, transparent)" }} />

          <Typography sx={{ fontSize: { xs: "0.95rem", md: "0.9rem" }, lineHeight: 1.6, maxWidth: 600, color: "rgba(28,45,30,0.68)" }}>
            {t("vision.subtitle")}
          </Typography>
        </Stack>

        <Box
          sx={{
            position: "relative",
            maxWidth: 900,
            minHeight: { xs: "auto", md: 170 },
            mx: "auto",
            px: { xs: 3, sm: 5, md: 7 },
            py: { xs: 2.5, md: 2.75 },
            borderRadius: "28px",
            bgcolor: "rgba(255,255,255,0.4)",
            backgroundImage: "linear-gradient(135deg, rgba(240,250,232,0.55) 0%, rgba(210,235,190,0.3) 100%)",
            border: "1px solid rgba(255,255,255,0.65)",
            backdropFilter: "blur(22px)",
            boxShadow: "0 30px 80px rgba(50,90,40,0.16)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            aria-hidden
            sx={{ position: "absolute", top: { xs: 4, md: 8 }, left: { xs: 12, md: 22 }, fontSize: { xs: "2.2rem", md: "3.2rem" }, fontWeight: 800, color: "rgba(61,107,63,0.2)", lineHeight: 1, fontFamily: "Georgia, serif" }}
          >
            &ldquo;
          </Typography>
          <Typography
            aria-hidden
            sx={{ position: "absolute", bottom: { xs: -6, md: -4 }, right: { xs: 12, md: 22 }, fontSize: { xs: "2.2rem", md: "3.2rem" }, fontWeight: 800, color: "rgba(61,107,63,0.2)", lineHeight: 1, fontFamily: "Georgia, serif" }}
          >
            &rdquo;
          </Typography>

          <Typography
            key={`quote-${index}`}
            sx={{
              position: "relative",
              zIndex: 1,
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 600,
              lineHeight: 1.5,
              color: "#1c2e1e",
              maxWidth: 740,
              animation: "visionFadeIn 700ms ease",
              "@keyframes visionFadeIn": {
                "0%": { opacity: 0, transform: "translateY(8px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            {activeQuote.text}
          </Typography>

          <Typography
            key={`author-${index}`}
            sx={{
              position: "relative",
              zIndex: 1,
              mt: { xs: 0.85, md: 1 },
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "#3d6b3f",
              animation: "visionFadeIn 700ms ease 150ms both",
            }}
          >
            — {activeQuote.author}
          </Typography>

          <Stack direction="row" spacing={0.75} sx={{ position: "relative", zIndex: 1, mt: { xs: 1.5, md: 1.75 } }}>
            {quotes.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: i === index ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  bgcolor: i === index ? "#3d6b3f" : "rgba(61,107,63,0.25)",
                  transition: "all 350ms ease",
                }}
              />
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", sm: "grid" },
            gridTemplateColumns: { sm: "repeat(3, 1fr)" },
            gap: { xs: 2, md: 2.5 },
            mt: { xs: 4, md: 5 },
            justifyItems: { sm: "center" },
            overflowX: { xs: "auto", sm: "visible" },
            scrollSnapType: { xs: "x mandatory", sm: "none" },
            WebkitOverflowScrolling: "touch",
            pb: { xs: 1.5, sm: 0 },
            "&::-webkit-scrollbar": { display: { xs: "none", sm: "block" } },
            "&": { scrollbarWidth: { xs: "none", sm: "auto" } },
          }}
        >
          {values.map((value) => (
            <Box
              key={value.key}
              sx={{
                textAlign: "center",
                flexShrink: { xs: 0, sm: 0 },
                width: { xs: "78%", sm: "100%" },
                maxWidth: 320,
                scrollSnapAlign: { xs: "center", sm: "none" },
                p: { xs: 2, md: 2.25 },
                borderRadius: "18px",
                bgcolor: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 30px rgba(60,100,40,0.07)",
                transition: "transform 280ms ease, box-shadow 280ms ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 18px 44px rgba(70,140,60,0.2)",
                },
              }}
            >
              <Box sx={{ fontSize: "1.2rem", mb: 0.5 }}>{value.icon}</Box>
              <Typography sx={{ fontWeight: 700, fontSize: "0.78rem", color: "#16241c", mb: 0.3 }}>
                {t(`vision.values.${value.key}.title`)}
              </Typography>
              <Typography sx={{ fontSize: "0.66rem", lineHeight: 1.4, color: "rgba(28,45,30,0.62)" }}>
                {t(`vision.values.${value.key}.desc`)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
