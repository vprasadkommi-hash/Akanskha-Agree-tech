import { useRef, useCallback, useEffect } from "react"
import { Box, Typography, Stack, IconButton } from "@mui/material"
import ContactDialogButton from "./ContactDialogButton"
import { useTranslation } from "react-i18next"
import { resources } from "../i18n"
import { PiTreeThin, PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import visionBg from "../assets/visionbg.png"

type Scheme = {
  key: string
  icon: string
}

const schemes: Scheme[] = [
  { key: "pmKisan", icon: "💰" },
  { key: "fasalBima", icon: "🛡️" },
  { key: "kcc", icon: "💳" },
  { key: "soilHealth", icon: "🌱" },
  { key: "sustainableAgriculture", icon: "🌍" },
  { key: "atmaNirbhar", icon: "🚜" },
]

export default function GovtSchemes() {
  const { i18n } = useTranslation()
  const lang = i18n.language === "te" ? "te" : "en"
  const content = resources[lang].translation.govtSchemes
  const scrollRef = useRef<HTMLDivElement>(null)
  const isJumping = useRef(false)

  // Triplicate schemes for seamless infinite scroll
  const loopSchemes = [...schemes, ...schemes, ...schemes]
  const getCardStep = useCallback(() => {
    const container = scrollRef.current
    if (!container) return 320
    const card = container.querySelector("[data-scheme-card]")
    const cardWidth = card ? (card as HTMLElement).offsetWidth : 300
    const styles = getComputedStyle(container)
    const gap = parseFloat(styles.gap) || 24
    return cardWidth + gap
  }, [])

  const getSingleSetWidth = useCallback(() => {
    return getCardStep() * schemes.length
  }, [getCardStep])

  // Center scroll position to the middle set on mount
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    container.scrollLeft = getSingleSetWidth()
  }, [getSingleSetWidth])

  const handleScroll = useCallback(() => {
    const container = scrollRef.current
    if (!container || isJumping.current) return
    const singleSet = getSingleSetWidth()
    // If scrolled into the first (prepend) set, jump forward by one set
    if (container.scrollLeft < singleSet * 0.5) {
      isJumping.current = true
      container.scrollLeft += singleSet
      requestAnimationFrame(() => { isJumping.current = false })
    }
    // If scrolled into the third (append) set, jump back by one set
    else if (container.scrollLeft > singleSet * 1.5) {
      isJumping.current = true
      container.scrollLeft -= singleSet
      requestAnimationFrame(() => { isJumping.current = false })
    }
  }, [getSingleSetWidth])

  const scrollByCard = (dir: 1 | -1) => {
    const container = scrollRef.current
    if (!container) return
    container.scrollBy({ left: dir * getCardStep(), behavior: "smooth" })
  }

  return (
    <Box id="govt-schemes" sx={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #e8f5e3 0%, #d4ebd0 40%, #c8e6c3 70%, #d4ebd0 100%)", py: { xs: 7, md: 9 }, px: { xs: 2.5, sm: 4, md: 5 } }}>
      <Box sx={{ position: "absolute", inset: 0, backgroundImage: `url(${visionBg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 }} />
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(232,245,227,0.4) 0%, rgba(212,235,208,0.2) 50%, rgba(232,245,227,0.4) 100%)" }} />

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1280, mx: "auto" }}>
        <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 1.4, py: 0.7, borderRadius: 999, bgcolor: "rgba(42,111,55,0)", border: "1px solid rgba(42,111,55,0.22)", boxShadow: "0 6px 16px rgba(42,111,55,0.08)" }}>
            <Box sx={{ width: 4, height: 6, borderRadius: 999, bgcolor: "#2a6f37" }} />
            <PiTreeThin style={{ color: "#2a6f37", fontSize: "0.85rem" }} />
            <Typography sx={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2a6f37" }}>{content.badge}</Typography>
          </Box>

          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" }, lineHeight: 1.15, letterSpacing: { xs: "-0.8px", md: "-1.6px" }, color: "#122215" }}>
            {content.title}
          </Typography>

          <Typography sx={{ color: "rgba(18,34,21,0.72)", fontSize: { xs: "0.85rem", md: "0.8rem" }, lineHeight: 1.7, maxWidth: 640 }}>
            {content.subtitle}
          </Typography>
        </Stack>

        <Box sx={{ position: "relative" }}>
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: { xs: 2, md: 3 },
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              pb: 2,
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onScroll={handleScroll}
          >
          {loopSchemes.map((scheme, i) => {
            const data = content.schemes[scheme.key as keyof typeof content.schemes]
            return (
              <Box
                key={`${scheme.key}-${i}`}
                data-scheme-card
                sx={{
                  position: "relative",
                  flexShrink: 0,
                  width: { xs: "75%", sm: 280, md: 300 },
                  scrollSnapAlign: "start",
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  background: "linear-gradient(145deg, #faf1e7 30%, rgb(237, 255, 241) 55%, #f7eadb8e 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.09)",
                  boxShadow: "0 10px 28px rgba(20,50,25,0.08)",
                  transition: "transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease",
                  "&:hover": {
                    transform: "translateY(0px)",
                    boxShadow: "0 18px 44px rgba(42,111,55,0.16)",
                    borderColor: "rgba(42,111,55,0.28)",
                  },
                }}
              >
                <Stack spacing={1.2} sx={{ alignItems: "center", textAlign: "center" }}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, minWidth: 48, borderRadius: 2, bgcolor: "rgba(42,111,55,0)", border: "1px solid rgba(42,111,55,0)", fontSize: "1.5rem" }}>
                    {scheme.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 800, fontSize: { xs: "0.9rem", md: "1rem" }, color: "#16241c", lineHeight: 1.2, minHeight: "2.4em" }}>
                    {data.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.75rem", color: "rgba(18,34,21,0.68)", lineHeight: 1.5 }}>
                    {data.desc}
                  </Typography>
                  {/* <Stack spacing={1.2}>
                    <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: "rgba(123,194,76,0.08)", border: "1px solid rgba(123,194,76,0.18)" }}>
                     
                      <Stack direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
                        
                        <Typography sx={{ fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2a6f37", minWidth: 60 }}>
                          {content.labels.benefit}
                        </Typography>
                        <Typography sx={{ fontSize: "0.7rem", fontWeight: 600, color: "#16241c", lineHeight: 1.4 }}>
                          {data.benefit}
                        </Typography>
                      </Stack>
                    </Box>

                    <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: "rgba(255,132,0,0.06)", border: "1px solid rgba(255,132,0,0.16)" }}>
                      <Stack direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
                        <Typography sx={{ fontSize: "0.5rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#c66f00", minWidth: 60 }}>
                          {content.labels.eligibility}
                        </Typography>
                        <Typography sx={{ fontSize: "0.7rem", fontWeight: 600, color: "#16241c", lineHeight: 1.4 }}>
                          {data.eligibility}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack> */}
                </Stack>
              </Box>
            )
          })}
          </Box>

          <IconButton
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
            sx={{
              position: "absolute",
              left: { xs: -8, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#ffffff",
              boxShadow: "0 4px 16px rgba(20,50,25,0.16)",
              width: 40,
              height: 40,
              zIndex: 2,
              display: { xs: "flex", sm: "flex" },
              "&:hover": { bgcolor: "#f6faf3" },
            }}
          >
            <PiCaretLeftBold style={{ fontSize: "1.1rem", color: "#2a6f37" }} />
          </IconButton>
          <IconButton
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
            sx={{
              position: "absolute",
              right: { xs: -8, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#ffffff",
              boxShadow: "0 4px 16px rgba(20,50,25,0.16)",
              width: 40,
              height: 40,
              zIndex: 2,
              display: { xs: "flex", sm: "flex" },
              "&:hover": { bgcolor: "#f6faf3" },
            }}
          >
            <PiCaretRightBold style={{ fontSize: "1.1rem", color: "#2a6f37" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            mt: { xs: 5, md: 6 },
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: "linear-gradient(135deg, #2a6f37 0%, #1a4a23 100%)",
            boxShadow: "0 20px 50px rgba(42,111,55,0.25)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box sx={{ position: "absolute", right: -40, top: -40, width: 200, height: 200, borderRadius: "50%", bgcolor: "rgba(123,194,76,0.08)", pointerEvents: "none" }} />
          <Box sx={{ position: "absolute", left: -30, bottom: -30, width: 150, height: 150, borderRadius: "50%", bgcolor: "rgba(255,132,0,0.06)", pointerEvents: "none" }} />

          <Box sx={{ position: "relative", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", gap: { xs: 2.5, md: 4 } }}>
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Typography sx={{ fontWeight: 900, fontSize: { xs: "1.2rem", md: "1.5rem" }, color: "#ffffff", lineHeight: 1.2, mb: 1 }}>
                {content.ctaTitle}
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.78rem", md: "0.82rem" }, color: "rgba(255,255,255,0.78)", lineHeight: 1.6, maxWidth: 560 }}>
                {content.ctaSubtitle}
              </Typography>
            </Box>

            <ContactDialogButton
              variant="contained"
              size="large"
              sx={{
                flexShrink: 0,
                px: { xs: 3, md: 5 },
                py: { xs: 1.2, md: 1.4 },
                borderRadius: 999,
                textTransform: "none",
                fontWeight: 800,
                fontSize: { xs: "0.82rem", md: "0.9rem" },
                bgcolor: "#ff8400",
                color: "#ffffff",
                boxShadow: "0 12px 28px rgba(255,132,0,0.35)",
                "&:hover": { bgcolor: "#e67600", boxShadow: "0 14px 32px rgba(255,132,0,0.4)" },
              }}
            >
              {content.ctaButton}
            </ContactDialogButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
