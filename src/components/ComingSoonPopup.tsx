import { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Chip,
} from "@mui/material"
import {
  X,
  Sparkles,
  Bot,
  ShieldCheck,
  ArrowRight,
  Languages,
  CalendarCheck2,
} from "lucide-react"
import popupLogo from "../assets/popup-logo.jpg"
import GlitchCharReveal from "./GlitchCharReveal"

interface ComingSoonPopupProps {
  initialOpen?: boolean
  isOpen?: boolean
  onClose?: () => void
}

export default function ComingSoonPopup({
  initialOpen = true,
  isOpen,
  onClose,
}: ComingSoonPopupProps) {
  const { i18n } = useTranslation()
  const [internalOpen, setInternalOpen] = useState(initialOpen)
  const isControlled = isOpen !== undefined
  const open = isControlled ? isOpen : internalOpen
  const isTelugu = i18n.language === "te"

  const handleClose = () => {
    setInternalOpen(false)
    if (onClose) {
      onClose()
    }
  }

  const features = [
    {
      icon: <CalendarCheck2 size={18} color="#4ade80" />,
      badge: isTelugu ? "ముఖ్య సేవ" : "Core Service",
      title: isTelugu ? "వ్యవసాయ బుకింగ్ సేవలు" : "Agri Booking Services",
      desc: isTelugu
        ? "డ్రోన్ స్ప్రేయింగ్, ట్రాక్టర్, హార్వెస్టర్ & సాగు యంత్రాల ఆన్‌లైన్ బుకింగ్"
        : "Drone spraying, tractors, harvesters & farm machinery booking",
      highlight: true,
    },
    {
      icon: <Bot size={18} color="#86efac" />,
      badge: isTelugu ? "AI పవర్డ్" : "AI Powered",
      title: isTelugu ? "AI పంట డాక్టర్" : "AI Crop Doctor",
      desc: isTelugu
        ? "స్మార్ట్ ఫోటో స్కానింగ్ ద్వారా తక్షణ వ్యాధి నిర్ధారణ"
        : "Instant photo crop scan & disease diagnosis advisory",
      highlight: false,
    },
    {
      icon: <ShieldCheck size={18} color="#86efac" />,
      badge: isTelugu ? "పథకాలు" : "Schemes",
      title: isTelugu ? "ప్రభుత్వ పథకాలు & మార్కెట్" : "Govt Schemes & Mandi Hub",
      desc: isTelugu
        ? "సబ్సిడీ పథకాలు, లైవ్ మార్కెట్ ధరలు & రైతు సూచనలు"
        : "Subsidies, live market prices & expert farmer advisory",
      highlight: false,
    },
  ]

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      scroll="body"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            transition: "all 0.4s ease",
          },
        },
      }}
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
          overflow: "visible",
          maxWidth: { xs: "calc(100% - 20px)", sm: 460 },
          m: { xs: "10px auto", sm: "auto" },
          animation: "popupEntrance 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          "@keyframes popupEntrance": {
            "0%": {
              opacity: 0,
              transform: "scale(0.93) translateY(18px)",
            },
            "100%": {
              opacity: 1,
              transform: "scale(1) translateY(0)",
            },
          },
        },
      }}
    >
      <DialogContent sx={{ p: 0, overflow: "visible" }}>
        {/* Main Crystal Clear Glossy Glass Card */}
        <Box
          sx={{
            position: "relative",
            borderRadius: { xs: "18px", sm: "24px" },
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(15, 23, 18, 0.48) 60%, rgba(8, 12, 10, 0.62) 100%)",
            backdropFilter: "blur(32px) saturate(190%)",
            WebkitBackdropFilter: "blur(32px) saturate(190%)",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            boxShadow:
              "0 25px 60px -10px rgba(0, 0, 0, 0.75), inset 0 1px 2px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.3)",
            p: { xs: 2, sm: 3 },
            maxHeight: { xs: "calc(100dvh - 28px)", sm: "auto" },
            overflowY: "auto",
            overflowX: "hidden",
            color: "#ffffff",
            /* Sleek slim scrollbar for small screens */
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
            },
          }}
        >
          {/* Specular Glossy Reflection Top Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "45%",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.03) 60%, transparent 100%)",
              pointerEvents: "none",
              borderRadius: { xs: "18px 18px 0 0", sm: "24px 24px 0 0" },
            }}
          />

          {/* Subtle Ambient Specular Light in Top Center */}
          <Box
            sx={{
              position: "absolute",
              top: -50,
              left: "50%",
              transform: "translateX(-50%)",
              width: 260,
              height: 160,
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 75%)",
              filter: "blur(24px)",
              pointerEvents: "none",
            }}
          />

          {/* TOP BAR: Language Switcher Option & Close Button */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              position: "relative",
              zIndex: 10,
              mb: { xs: 1.5, sm: 1.8 },
              pb: { xs: 1, sm: 1.2 },
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            {/* Language Selector Pill */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{
                p: "2px 3px",
                borderRadius: "999px",
                bgcolor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 0.8,
                  pr: 0.2,
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <Languages size={14} />
              </Box>

              <Button
                size="small"
                onClick={() => i18n.changeLanguage("en")}
                sx={{
                  py: 0.25,
                  px: 1.1,
                  minWidth: "auto",
                  borderRadius: "999px",
                  fontSize: { xs: "0.7rem", sm: "0.72rem" },
                  fontWeight: !isTelugu ? 800 : 500,
                  textTransform: "none",
                  bgcolor: !isTelugu ? "rgba(255, 255, 255, 0.95)" : "transparent",
                  color: !isTelugu ? "#0a120e" : "rgba(255, 255, 255, 0.8)",
                  boxShadow: !isTelugu ? "0 2px 8px rgba(0, 0, 0, 0.25)" : "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: !isTelugu ? "#ffffff" : "rgba(255, 255, 255, 0.14)",
                    color: !isTelugu ? "#0a120e" : "#ffffff",
                  },
                }}
              >
                English
              </Button>

              <Button
                size="small"
                onClick={() => i18n.changeLanguage("te")}
                sx={{
                  py: 0.25,
                  px: 1.1,
                  minWidth: "auto",
                  borderRadius: "999px",
                  fontSize: { xs: "0.7rem", sm: "0.72rem" },
                  fontWeight: isTelugu ? 800 : 500,
                  textTransform: "none",
                  bgcolor: isTelugu ? "rgba(255, 255, 255, 0.95)" : "transparent",
                  color: isTelugu ? "#0a120e" : "rgba(255, 255, 255, 0.8)",
                  boxShadow: isTelugu ? "0 2px 8px rgba(0, 0, 0, 0.25)" : "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: isTelugu ? "#ffffff" : "rgba(255, 255, 255, 0.14)",
                    color: isTelugu ? "#0a120e" : "#ffffff",
                  },
                }}
              >
                తెలుగు
              </Button>
            </Stack>

            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              aria-label="close coming soon popup"
              sx={{
                color: "rgba(255, 255, 255, 0.85)",
                bgcolor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                backdropFilter: "blur(10px)",
                width: 32,
                height: 32,
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.22)",
                  color: "#ffffff",
                  transform: "rotate(90deg) scale(1.06)",
                  borderColor: "rgba(255, 255, 255, 0.35)",
                },
              }}
            >
              <X size={16} />
            </IconButton>
          </Stack>

          {/* Modal Content */}
          <Stack
            spacing={{ xs: 1.5, sm: 1.8 }}
            alignItems="center"
            textAlign="center"
            sx={{ position: "relative", zIndex: 2 }}
          >
            {/* Brand Logo & Company Name */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1.5}
            >
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <Box
                  sx={{
                    position: "absolute",
                    inset: -3,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                    animation: "pulseRing 3s infinite ease-in-out",
                    "@keyframes pulseRing": {
                      "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
                      "50%": { transform: "scale(1.12)", opacity: 0.85 },
                    },
                  }}
                />
                <Box
                  component="img"
                  src={popupLogo}
                  alt="AgreeConnect"
                  sx={{
                    width: { xs: 44, sm: 52 },
                    height: { xs: 44, sm: 52 },
                    borderRadius: "50%",
                    objectFit: "cover",
                    bgcolor: "#ffffff",
                    border: "2px solid rgba(255, 255, 255, 0.35)",
                    boxShadow: "0 0 16px rgba(0, 0, 0, 0.5)",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.05rem", sm: "1.25rem" },
                  color: "#ffffff",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  textAlign: "left",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {isTelugu
                  ? "అగ్రీకనెక్ట్"
                  : "AgreeConnect"}
              </Typography>
            </Stack>

            {/* Live Status Chip */}
            <Chip
              icon={
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#4ade80",
                    boxShadow: "0 0 8px #4ade80",
                    animation: "pulseDot 1.8s infinite",
                    "@keyframes pulseDot": {
                      "0%, 100%": { opacity: 1, transform: "scale(1)" },
                      "50%": { opacity: 0.4, transform: "scale(0.8)" },
                    },
                    ml: "4px !important",
                  }}
                />
              }
              label={
                isTelugu
                  ? "ఆన్‌లైన్ బుకింగ్ & ఏఐ ప్లాట్‌ఫారమ్"
                  : "BOOKING SERVICES & AI PLATFORM"
              }
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: { xs: "0.6rem", sm: "0.66rem" },
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                px: 0.3,
                py: 0.1,
                height: "auto",
                "& .MuiChip-label": {
                  px: 0.9,
                  py: 0.3,
                },
              }}
            />

            {/* Typography Header: Coming Soon with Glitch / Scramble Text Animation */}
            <Box sx={{ width: "100%", my: 0.3, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <GlitchCharReveal
                words={isTelugu ? "త్వరలో ప్రారంభం" : "Coming Soon"}
                color="#ffffff"
                tag="h1"
                font={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(1.75rem, 5vw, 2.25rem)",
                  fontWeight: 800,
                  lineHeight: "1.15em",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                }}
                enterAnimation={{
                  mode: "oneLine",
                  restState: "solid",
                  replay: true,
                  position: "above",
                  scrambleIntensity: 85,
                  ease: { type: "tween", duration: 1.8, ease: "easeOut" },
                  flickerEnabled: true,
                  flickerColor: "#4ade80",
                  flickerIntensity: 70,
                  flickerSpeed: 12,
                }}
                hoverAnimation={{
                  type: "wave",
                  lines: "oneLine",
                  radius: 2,
                  collapse: false,
                  collapseTime: 1,
                  glitchChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
                  glitchShuffle: true,
                  flickerEnabled: true,
                  flickerColor: "#4ade80",
                  flickerIntensity: 60,
                  flickerSpeed: 12,
                  waveEase: { type: "tween", duration: 1.2, ease: "linear" },
                  waveShuffleLimitEnabled: false,
                  waveShuffleLimitValue: 10,
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: { xs: "0.78rem", sm: "0.85rem" },
                  lineHeight: 1.4,
                  maxWidth: 380,
                  mx: "auto",
                  mt: 0.8,
                  textShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
                }}
              >
                {isTelugu
                  ? "డ్రోన్ స్ప్రేయింగ్ & సాగు యంత్రాల ఆన్‌లైన్ బుకింగ్ సేవలతో పాటు AI పంట వైద్య సేవలు త్వరలో ప్రారంభం కానున్నాయి."
                  : "On-demand farm booking services & AI crop diagnostics launching soon to empower farmers."}
              </Typography>
            </Box>

            {/* Compact Transparent Features List */}
            <Stack spacing={0.9} sx={{ width: "100%", pt: 0.2 }}>
              {features.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    p: { xs: 1, sm: 1.2 },
                    borderRadius: { xs: "12px", sm: "14px" },
                    bgcolor: item.highlight
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 0.05)",
                    border: item.highlight
                      ? "1px solid rgba(255, 255, 255, 0.25)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(14px)",
                    transition: "all 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1.1, sm: 1.3 },
                    textAlign: "left",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.14)",
                      borderColor: "rgba(255, 255, 255, 0.35)",
                      transform: "translateY(-1.5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 0.7, sm: 0.8 },
                      borderRadius: "10px",
                      bgcolor: item.highlight
                        ? "rgba(255, 255, 255, 0.14)"
                        : "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={0.7}
                      sx={{ mb: 0.2 }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: "0.78rem", sm: "0.84rem" },
                          color: "#ffffff",
                          lineHeight: 1.2,
                        }}
                      >
                        {item.title}
                      </Typography>
                      {item.highlight && (
                        <Box
                          component="span"
                          sx={{
                            fontSize: "0.58rem",
                            fontWeight: 800,
                            color: "#0a140e",
                            bgcolor: "#4ade80",
                            px: 0.7,
                            py: 0.1,
                            borderRadius: "999px",
                            letterSpacing: "0.03em",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.badge}
                        </Box>
                      )}
                    </Stack>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(255, 255, 255, 0.72)",
                        fontSize: { xs: "0.68rem", sm: "0.72rem" },
                        lineHeight: 1.25,
                        display: "block",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* Action Button */}
            <Box sx={{ width: "100%", pt: 0.3 }}>
              <Button
                variant="contained"
                onClick={handleClose}
                fullWidth
                endIcon={<ArrowRight size={16} />}
                sx={{
                  py: { xs: 0.95, sm: 1.05 },
                  px: 2.5,
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 240, 240, 0.9) 100%)",
                  color: "#0a160e",
                  fontWeight: 800,
                  fontSize: { xs: "0.84rem", sm: "0.88rem" },
                  letterSpacing: "0.02em",
                  boxShadow:
                    "0 8px 20px -4px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    background: "#ffffff",
                    transform: "translateY(-1.5px)",
                    boxShadow:
                      "0 12px 25px -4px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 1)",
                  },
                }}
              >
                {isTelugu ? "వెబ్‌సైట్ వీక్షించండి" : "Explore Preview"}
              </Button>
            </Box>

            {/* Footer Trust Note */}
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              justifyContent="center"
            >
              <Sparkles size={11} color="#ffffff" />
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.02em",
                }}
              >
                AgreeConnect • Transforming Agriculture
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
