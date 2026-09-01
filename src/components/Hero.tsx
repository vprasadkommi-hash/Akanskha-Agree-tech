import { useTranslation } from "react-i18next"
import { Box, Typography, Stack, Button } from "@mui/material"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import wheatBg from "../assets/wheat-hero-bg.jpg"
import heroVideo from "../assets/farm-hero.mp4"

export default function Hero() {
  const { i18n } = useTranslation()
  const isTe = i18n.language === "te"

  const handleScrollDown = () => {
    const el = document.getElementById("legacy") || document.getElementById("problems") || document.getElementById("services")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" })
    }
  }

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        bgcolor: "#07170c",
      }}
    >
      {/* Background Visual: Video with fallback Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          poster={wheatBg}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "saturate(0.9) contrast(0.95)",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          <source src={heroVideo} type="video/quicktime" />
        </Box>
        <Box
          component="img"
          src={wheatBg}
          alt="Lush Wheat Field"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "saturate(0.82) contrast(0.92)",
          }}
        />
      </Box>

      {/* Atmospheric Soft Gradient Overlays */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: {
            xs: "linear-gradient(180deg, rgba(10, 18, 12, 0.65) 0%, rgba(10, 18, 12, 0.38) 40%, rgba(10, 18, 12, 0.72) 100%)",
            md: "linear-gradient(90deg, rgba(10, 18, 12, 0.72) 0%, rgba(10, 18, 12, 0.44) 42%, rgba(10, 18, 12, 0.12) 75%, transparent 100%)",
          },
          zIndex: 1,
        }}
      />

      {/* Hero Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1440,
          width: "100%",
          mx: "auto",
          px: { xs: 3, sm: 4, md: 6, lg: 8 },
          pt: { xs: 16, sm: 18, md: 22 },
          pb: { xs: 6, md: 8 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: 680 } }}>
          {/* Main Headline with Serif Italic Accent */}
          <Typography
            component="h1"
            sx={{
              color: "#ffffff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "2.6rem", sm: "3.6rem", md: "4.4rem", lg: "4.8rem" },
              fontWeight: 700,
              lineHeight: { xs: 1.1, md: 1.06 },
              letterSpacing: "-0.03em",
              textShadow: "0 4px 24px rgba(0,0,0,0.45)",
              mb: { xs: 2.2, md: 2.8 },
            }}
          >
            {isTe ? (
              <>
                స్మార్ట్ వ్యవసాయం <br />
                <Box
                  component="span"
                  className="font-serif-italic"
                  sx={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: { xs: "3.2rem", sm: "4.2rem", md: "5.1rem", lg: "5.6rem" },
                    color: "#d9f99d",
                    display: "inline-block",
                  }}
                >
                  భవిష్యత్ తరం కోసం
                </Box>
              </>
            ) : (
              <>
                Smart Farming for <br />
                <Box
                  component="span"
                  className="font-serif-italic"
                  sx={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: { xs: "3.2rem", sm: "4.3rem", md: "5.2rem", lg: "5.7rem" },
                    color: "#ffffff",
                    display: "inline-block",
                  }}
                >
                  Future Generations
                </Box>
              </>
            )}
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.88)",
              fontSize: { xs: "0.92rem", sm: "1.02rem", md: "1.08rem" },
              lineHeight: 1.6,
              maxWidth: 520,
              fontWeight: 400,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              mb: { xs: 3.5, md: 4.5 },
            }}
          >
            {isTe
              ? "వేగం, పారదర్శకత మరియు రోజువారీ నిర్వహణ కోసం రూపొందించబడిన ఒకే సురక్షిత డిజిటల్ వేదికపై మీ పొలాన్ని పర్యవేక్షించండి మరియు వృద్ధి చేయండి."
              : "Seed, monitor and track your farm on a single secure platform built for speed, clarity, and everyday financial control."}
          </Typography>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ alignItems: { xs: "stretch", sm: "center" } }}
          >
            {/* Primary Action Button (Lime Pill) */}
            <Button
              component="a"
              href="https://www.akankshaagreetech.in/"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<ArrowUpRight size={18} strokeWidth={2.4} />}
              sx={{
                borderRadius: "999px",
                px: 3.2,
                py: 1.4,
                bgcolor: "#9cdb50",
                color: "#0d2611",
                fontSize: "0.92rem",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0 8px 24px rgba(156, 219, 80, 0.28)",
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "#aee668",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 30px rgba(156, 219, 80, 0.38)",
                },
              }}
            >
              {isTe ? "వ్యవసాయం ప్రారంభించండి" : "Start Farming"}
            </Button>

            {/* Secondary Action Button (Frosted Glass Pill) */}
            <Button
              component="a"
              href="#services"
              variant="outlined"
              sx={{
                borderRadius: "999px",
                px: 3,
                py: 1.35,
                bgcolor: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                color: "#ffffff",
                fontSize: "0.92rem",
                fontWeight: 600,
                textTransform: "none",
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.22)",
                  borderColor: "rgba(255, 255, 255, 0.6)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {isTe ? "రైతులను కలవండి" : "Meet the Farmers"}
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Hero Bottom Bar: Scroll Indicator & Social Proof Rating */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1440,
          width: "100%",
          mx: "auto",
          px: { xs: 3, sm: 4, md: 6, lg: 8 },
          pb: { xs: 3.5, md: 4.5 },
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Bottom-left: Scroll Indicator */}
          <Stack
            direction="row"
            spacing={1}
            onClick={handleScrollDown}
            sx={{
              cursor: "pointer",
              alignItems: "center",
              color: "rgba(255, 255, 255, 0.75)",
              transition: "all 0.2s ease",
              "&:hover": {
                color: "#ffffff",
                transform: "translateY(2px)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.74rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              SCROLL
            </Typography>
            <ChevronDown size={16} strokeWidth={2.4} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
