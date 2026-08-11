import { Box, Stack, Typography } from "@mui/material"
import ContactDialogButton from "./ContactDialogButton"
import type { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { resources } from "../i18n"
import { LuBrainCircuit } from "react-icons/lu"
import { MdOutlinePhotoCamera } from "react-icons/md"
import { IoShieldCheckmark } from "react-icons/io5"
import { FaLeaf } from "react-icons/fa6"
import BugReportRoundedIcon from "@mui/icons-material/BugReportRounded"
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded"
import GrassRoundedIcon from "@mui/icons-material/GrassRounded"
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded"
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded"
import EmojiNatureRoundedIcon from "@mui/icons-material/EmojiNatureRounded"
import { PiTreeThin } from "react-icons/pi"

import heroRightBg from "../assets/aibg.png"
import phoneImage from "../assets/handphone.png"
import detectPanelBg from "../assets/detectbg.png"
import decoLeafLeft from "../assets/leftleafoverlay.png"
import decoLeafRight from "../assets/rightleafoverlay.png"

type Step = { num: string; icon: ReactNode; key: "capture" | "analysis" | "diagnosis" | "treatment" }
const steps: Step[] = [
  { num: "01", icon: <MdOutlinePhotoCamera size={28} />, key: "capture" },
  { num: "02", icon: <LuBrainCircuit size={28} />, key: "analysis" },
  { num: "03", icon: <IoShieldCheckmark size={28} />, key: "diagnosis" },
  { num: "04", icon: <FaLeaf size={26} />, key: "treatment" },
]

export default function AICropDoctor() {
  const { i18n } = useTranslation()
  const lang = i18n.language === "te" ? "te" : "en"
  const content = resources[lang].translation.aiCropDoctor

  return (
    <Box id="ai-crop-doctor" sx={{ position: "relative", overflow: "hidden", bgcolor: "#ffffff" }}>
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #f6faf3 0%, #ffffff 60%)" }} />
      <Box sx={{ position: "absolute", right: 0, top: 0, bottom: 0, width: { xs: "100%", md: "100%" }, backgroundImage: heroRightBg ? `url(${heroRightBg})` : "none", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", filter: heroRightBg ? "saturate(1)" : "none", opacity: heroRightBg ? 1 : 0.9 }} />

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 4, md: 5 }, pt: { xs: 7, md: 9 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.45fr 1fr" }, columnGap: { xs: 0, md: 6 }, rowGap: 4, alignItems: "center" }}>
          <Box>
            <Stack spacing={2.2}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 1.4, py: 0.7, borderRadius: 999, bgcolor: "rgba(42,111,55,0.08)", border: "1px solid rgba(42,111,55,0.22)", boxShadow: "0 6px 16px rgba(42,111,55,0.08)",width:'250px' }}>
                <Box sx={{ width: 4, height: 6, borderRadius: 999, bgcolor: "#2a6f37" }} />
                <PiTreeThin style={{ color: "#2a6f37", fontSize: "1rem" }} />
                <Typography sx={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2a6f37" }}>{content.badge}</Typography>
              </Box>

              <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" }, lineHeight: 1.15, letterSpacing: { xs: "-0.8px", md: "-1.6px" }, color: "#122215" }}>
                <Box component="span" sx={{ display: "block" }}>{content.heading.before}</Box>
                <Box component="span">{content.heading.your} <Box component="span" sx={{ backgroundImage: "linear-gradient(90deg, #ff8400, #7bc24c)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>{content.heading.ai}</Box> {content.heading.after}</Box>
              </Typography>

              <Typography sx={{ color: "rgba(18,34,21,0.72)", fontSize: { xs: "0.95rem", md: "0.9rem" }, lineHeight: 1.7, maxWidth: 640 }}>
                {content.subtitle}
              </Typography>

              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 4fr))", lg: "repeat(2, minmax(0, 1fr))" }, gap: { xs: 3, md: 1 } }}>
                {steps.map((s) => (
                <Box key={s.num} sx={{ position: "relative", minHeight: 205, pt: { xs: 3.8, md: 2.2 }, px: 2, pb: 2.4, borderRadius: 1, border: "1px solid rgba(18,34,21,0.09)", boxShadow: "0 8px 20px rgba(20,50,25,0.08)", bgcolor: "#ffffff", textAlign: "center", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ position: "absolute", top: 20, left: 16, display: { xs: "flex", md: "none" }, minWidth: 42, height: 40, px: 0.75, borderRadius: 1, alignItems: "center", justifyContent: "left", bgcolor: "rgba(123,194,76,0.13)", color: "#2a6f37", fontSize: "0.9rem", fontWeight: 800 }}>
                      {s.num}
                    </Box>
                    <Box sx={{ position: "absolute", top: -25, left: "50%", transform: "translateX(-50%)", display: { xs: "flex", md: "none" }, width: 70, height: 70, borderRadius: "50%", alignItems: "center", justifyContent: "center", bgcolor: "#ffffff", border: "1px solid rgba(18,34,21,0.12)", boxShadow: "0 4px 12px rgba(20,50,25,0.06)" }}>
                      <Box sx={{ width: 40, height: 40, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", color: "#2a6f37" }}>{s.icon}</Box>
                    </Box>

                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center", gap: 1.5, mb: 1.5 }}>
                      <Box sx={{ minWidth: 34, height: 32, px: 0.6, borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "rgba(123,194,76,0.13)", color: "#2a6f37", fontSize: "0.8rem", fontWeight: 800 }}>
                        {s.num}
                      </Box>
                      <Box sx={{ width: 76, height: 76, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#ffffff", border: "1px solid rgba(18,34,21,0.12)", boxShadow: "0 4px 12px rgba(20,50,25,0.06)" }}>
                        <Box sx={{ width: 46, height: 46, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", color: "#2a6f37", transform: "scale(1.25)" }}>{s.icon}</Box>
                      </Box>
                    </Box>

                    <Stack spacing={1.1} sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                      <Typography sx={{ fontWeight: 800, fontSize: "0.95rem", color: "#16241c", lineHeight: 1.2 }}>{content.steps[s.key].title}</Typography>
                      <Typography sx={{ maxWidth: 195, fontSize: "0.76rem", color: "rgba(18,34,21,0.78)", lineHeight: 1.48 }}>{content.steps[s.key].desc}</Typography>
                    </Stack>
                    {/* {i < steps.length - 1 && (
                      <Box sx={{ display: { xs: "none", md: "flex" }, position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", width: 28, height: 28, alignItems: "center", justifyContent: "center", color: "#ff8400", bgcolor: "#ffffff", borderRadius: "50%", boxShadow: "0 4px 10px rgba(0,0,0,0.06)", zIndex: 2 }}>
                        <RiArrowRightCircleLine size={24} />
                      </Box>
                    )} */}
                  </Box>
                ))}
              </Box>
            </Stack>
          </Box>

          <Box>
            <Box sx={{ position: "relative", minHeight: { xs: "auto", md: 720 }, display: "flex", alignItems: "center", justifyContent: "center", }}>
              {phoneImage ? (
                <Box component="img" src={phoneImage} alt={content.phoneAlt} sx={{ width: { xs: 0, md: 900 }, height: "auto", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))", borderRadius: 1, position: { xs: "absolute", md: "absolute" }, top: { xs: -700, md: 100 }, left: { xs: "40%", md: "auto" }, right: { xs: "auto", md: -200 }, transform: { xs: "translateX(0%)", md: "none" } }} />
              ) : (
                <Box sx={{ width: { xs: 260, md: 320 }, height: { xs: 520, md: 700 }, borderRadius: 6, bgcolor: "rgba(20,60,30,0.06)", border: "2px dashed rgba(42,111,55,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(18,34,21,0.6)", fontWeight: 700 }}>{content.phonePlaceholder}</Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1200, mx: "auto", px: { xs: 2.5, sm: 4, md: 5 }, pt: { xs: 5, md: 6 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ p: { xs: 2, md: 3 }, pr: { md: 10 }, borderRadius: 4, border: "1px solid rgba(42,111,55,0.15)", background: "linear-gradient(180deg, rgba(245,250,240,0.85), rgba(250,253,248,0.7))", boxShadow: "0 14px 40px rgba(40,80,40,0.08)", position: "relative", overflow: "hidden" }}>
          <Box sx={{ position: "absolute", inset: 0, backgroundImage: detectPanelBg ? `url(${detectPanelBg})` : "none", backgroundSize: "cover", backgroundPosition: "center", opacity: detectPanelBg ? 1 : 0.6, pointerEvents: "none" }} />
          <Box sx={{ position: "relative" }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "flex-start", mb: { xs: 1.5, md: 2 }, pl: { md: 1 } }}>
              <Box sx={{ width: 6, height: 6, bgcolor: "#2a6f37", transform: "rotate(45deg)" }} />
              <Typography sx={{ fontWeight: 900, fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#16241c" }}>{content.detectTitle}</Typography>
              <Box sx={{ width: 6, height: 6, bgcolor: "#2a6f37", transform: "rotate(45deg)" }} />
            </Stack>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: { xs: 1.5, md: 2 }, maxWidth: { md: "75%" } }}>
              <DetectColumn icon={<GrassRoundedIcon />} {...content.detection.diseases} />
              <DetectColumn icon={<BugReportRoundedIcon />} {...content.detection.pests} />
              <DetectColumn icon={<OpacityRoundedIcon />} {...content.detection.nutrients} />
              <DetectColumn icon={<EmojiNatureRoundedIcon />} {...content.detection.growth} />
              <DetectColumn icon={<ScienceRoundedIcon />} {...content.detection.soil} />
              <DetectColumn icon={<WarningAmberRoundedIcon />} {...content.detection.stress} />
            </Box>
          </Box>
        </Box>

        <Stack spacing={1} sx={{ alignItems: "center", mt: { xs: 3, md: 4 } }}>
          <ContactDialogButton variant="contained" color="success" size="large" sx={{ px: { xs: 3, md: 5 }, py: { xs: 1.2, md: 1.4 }, borderRadius: 999, textTransform: "none", fontWeight: 800, fontSize: { xs: "0.95rem", md: "1.05rem" }, backgroundImage: "linear-gradient(90deg, #2a6f37, #7bc24c)", boxShadow: "0 12px 28px rgba(64,140,60,0.3)" }}>
            {content.requestDemo}
          </ContactDialogButton>
          {/* <Chip icon={<CheckCircleRoundedIcon />} label="AI-Powered. Farmer Approved." sx={{ bgcolor: "rgba(123,194,76,0.18)", border: "1px solid rgba(123,194,76,0.38)", color: "#2a6f37", fontWeight: 700 }} /> */}
        </Stack>
      </Box>

      <Box sx={{ position: "absolute", left: 0, bottom: 0, width: 160, height: 160, backgroundImage: decoLeafLeft ? `url(${decoLeafLeft})` : "none", backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.85, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", right: 0, bottom: 0, width: 160, height: 160, backgroundImage: decoLeafRight ? `url(${decoLeafRight})` : "none", backgroundSize: "contain", backgroundRepeat: "no-repeat", opacity: 0.85, pointerEvents: "none" }} />
    </Box>
  )
}

function DetectColumn({ title, items, icon }: { title: string; items: string[]; icon: ReactNode }) {
  return (
    <Box>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
        <Box sx={{ width: 40, height: 40, minWidth: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "rgba(42,111,55,0.08)", border: "1px solid rgba(42,111,55,0.18)", color: "#2a6f37", mt: 0.3 }}>{icon}</Box>
        <Box>
          <Typography sx={{ fontWeight: 800, color: "#16241c", fontSize: "0.9rem", mb: 0.8 }}>{title}</Typography>
          <Stack spacing={0.3}>
            {items.map((it) => (
              <Stack key={it} direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
                <Box sx={{ width: 5, height: 5, minWidth: 5, borderRadius: "50%", bgcolor: "#2a6f37" }} />
                <Typography sx={{ fontSize: "0.78rem", color: "rgba(18,34,21,0.72)" }}>{it}</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
