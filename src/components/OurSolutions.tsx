import { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Box, Typography, Stack, useTheme, useMediaQuery } from "@mui/material"
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaCarouselType } from "embla-carousel"
import "./AgricultureProblems.css"
import directMarketImage from "../assets/solutions/Direct Market Access.png"
import aiWeatherImage from "../assets/solutions/AI-Powered Weather Predictions.png"
import equipmentSharingImage from "../assets/solutions/Equipment Sharing Marketplace.png"
import freeEducationImage from "../assets/solutions/Free Farming Education.png"
import microCreditImage from "../assets/solutions/Micro-Credit - Low Interest Loans.png"
import pestAdvisoryImage from "../assets/solutions/Instant Pest Advisory.png"
import fairPriceImage from "../assets/solutions/Fair Price Guarantees.png"
import soilTestingImage from "../assets/solutions/Soil Testing & Remediation.png"
import irrigationImage from "../assets/solutions/Irrigation Optimization.png"
import laborImage from "../assets/solutions/Labour Marketplace.png"
import mobileAppImage from "../assets/solutions/Mobile App (Hindi - Telugu Support).png"
import scientificStorageImage from "../assets/solutions/Scientific Storage Facilities.png"
import govtSchemesImage from "../assets/solutions/Government Scheme Assistance.png"
import cooperativeImage from "../assets/solutions/Cooperative Formation Support.png"

const solutions = [
  { icon: "🌾", labelKey: "solutions.directMarket", image: directMarketImage },
  { icon: "🌦️", labelKey: "solutions.aiWeather", image: aiWeatherImage },
  { icon: "🚜", labelKey: "solutions.equipmentSharing", image: equipmentSharingImage },
  { icon: "📚", labelKey: "solutions.freeEducation", image: freeEducationImage },
  { icon: "💰", labelKey: "solutions.microCredit", image: microCreditImage },
  { icon: "🐛", labelKey: "solutions.pestAdvisory", image: pestAdvisoryImage },
  { icon: "⚖️", labelKey: "solutions.fairPrice", image: fairPriceImage },
  { icon: "🧪", labelKey: "solutions.soilTesting", image: soilTestingImage },
  { icon: "💧", labelKey: "solutions.irrigation", image: irrigationImage },
  { icon: "👷", labelKey: "solutions.labor", image: laborImage },
  { icon: "📱", labelKey: "solutions.mobileApp", image: mobileAppImage },
  { icon: "🏚️", labelKey: "solutions.scientificStorage", image: scientificStorageImage },
  { icon: "🏛️", labelKey: "solutions.govtSchemes", image: govtSchemesImage },
  { icon: "🤝", labelKey: "solutions.cooperative", image: cooperativeImage },
]

export default function OurSolutions() {
  const { t, i18n } = useTranslation()
  const isTe = i18n.language === "te"

  return (
    <Box id="solutions" sx={{ position: "relative", overflow: "hidden", bgcolor: "#0a160d", py: { xs: 8, md: 11 }, px: { xs: 2.5, sm: 4, md: 6 } }}>
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.1) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(148, 212, 75, 0.05) 0%, transparent 50%)", pointerEvents: "none" }} />
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1360, mx: "auto" }}>
        {/* Two-column header matching reference layout */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2.5, md: 6 }}
          sx={{
            alignItems: { xs: "flex-start", md: "flex-end" },
            justifyContent: "space-between",
            mb: { xs: 4.5, md: 6.5 },
          }}
        >
          <Box sx={{ maxWidth: 640 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.6,
                py: 0.5,
                borderRadius: "999px",
                bgcolor: "rgba(148, 212, 75, 0.1)",
                border: "1px solid rgba(148, 212, 75, 0.25)",
                color: "#9cdb50",
                mb: 2,
              }}
            >
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#9cdb50" }} />
              <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {isTe ? "స్మార్ట్ పరిష్కారాలు" : "Smart Solutions"}
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                color: "#ffffff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
              }}
            >
              {isTe ? "స్మార్ట్ వ్యవసాయ పరిష్కారాలు" : "Smart Farming Solutions"}{" "}
              <Box
                component="span"
                className="font-serif-italic"
                sx={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: { xs: "2.4rem", sm: "3.1rem", md: "3.8rem" },
                  color: "#d4edb2",
                  display: { xs: "inline", sm: "inline-block" },
                }}
              >
                {isTe ? "వాస్తవ ఫలితాలను అందిస్తాయి" : "That Deliver Real Results"}
              </Box>
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.72)",
              fontSize: { xs: "0.88rem", sm: "0.96rem" },
              lineHeight: 1.65,
              maxWidth: 460,
              pb: { md: 0.5 },
            }}
          >
            {isTe
              ? "వనరులను సమర్థవంతంగా ఉపయోగించడం, పంట ఆరోగ్యాన్ని మెరుగుపరచడం మరియు ప్రతి సీజన్‌లో స్థిరమైన వృద్ధిని సాధించడంలో మా వ్యవసాయ పరిష్కారాలు రైతులకు తోడ్పడతాయి."
              : "Our intelligent agriculture solutions help farmers grow more with less by optimizing resources, improving crop health, and supporting long-term sustainability across every season."}
          </Typography>
        </Stack>

        <SolutionCarousel />
      </Box>
    </Box>
  )
}

const TWEEN_FACTOR_BASE = 0.03

function SolutionCarousel() {
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"))
  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 5
  const slideWidth = `${100 / slidesPerView}%`
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const setTweenNodes = useCallback((api: EmblaCarouselType): void => {
    tweenNodes.current = api.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".ag-problems__parallax__layer") as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback((api: EmblaCarouselType) => {
    const engine = api.internalEngine()
    const scrollProgress = api.scrollProgress()
    const slidesInView = api.slidesInView()

    api.scrollSnapList().forEach((scrollSnap, slideIndex) => {
      if (!slidesInView.includes(slideIndex)) return

      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()

          if (slideIndex === loopItem.index && target !== 0) {
            const sign = Math.sign(target)

            if (sign === -1) {
              diffToTarget = scrollSnap - (1 + scrollProgress)
            }
            if (sign === 1) {
              diffToTarget = scrollSnap + (1 - scrollProgress)
            }
          }
        })
      }

      const translate = diffToTarget * (-1 * tweenFactor.current) * 100
      const tweenNode = tweenNodes.current[slideIndex]
      if (tweenNode) {
        tweenNode.style.transform = `translateX(${translate}%)`
      }
    })
  }, [])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("select", onSelect)
      .on("slideFocus", tweenParallax)

    return () => {
      emblaApi
        .off("reInit", setTweenNodes)
        .off("reInit", setTweenFactor)
        .off("reInit", tweenParallax)
        .off("scroll", tweenParallax)
        .off("select", onSelect)
        .off("slideFocus", tweenParallax)
    }
  }, [emblaApi, onSelect, setTweenFactor, setTweenNodes, tweenParallax])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <Box sx={{ position: "relative",  }}>
      <CarouselButton direction="left" onClick={scrollPrev} />
      <Box className="ag-problems__viewport" sx={{ overflow: "hidden" }} ref={emblaRef}>
        <Box className="ag-problems__container" sx={{ display: "flex" }}>
          {solutions.map((solution) => (
            <Box className="ag-problems__slide" key={solution.labelKey} sx={{ flex: `0 0 ${slideWidth}`, minWidth: 0, px: { xs: 0.75, md: 1 }, "--slide-spacing": { xs: "6px", md: "8px" } }}>
              <SolutionCard solution={solution} t={t} />
            </Box>
          ))}
        </Box>
      </Box>
      <CarouselButton direction="right" onClick={scrollNext} />
      <Stack spacing={1.5} sx={{ alignItems: "center", mt: { xs: 2.75, md: 3 } }}>
        <Stack direction="row" spacing={0.45}>{solutions.map((solution, index) => <Box key={solution.labelKey} sx={{ width: index === selectedIndex ? 25 : 9, height: 3, borderRadius: 3, bgcolor: index === selectedIndex ? "#91d950" : "rgba(255,255,255,0.22)" }} />)}</Stack>
        <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.68rem", letterSpacing: "0.06em" }}><Box component="span" sx={{ color: "#91d950", fontWeight: 700 }}>{String(selectedIndex + 1).padStart(2, "0")}</Box> / {String(solutions.length).padStart(2, "0")}</Typography>
        {/* <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "rgba(255,255,255,0.62)" }}><Box sx={{ width: 13, height: 21, border: "1px solid rgba(255,255,255,0.7)", borderRadius: 6, position: "relative", "&::after": { content: '""', position: "absolute", top: 4, left: "50%", width: 2, height: 5, bgcolor: "rgba(255,255,255,0.75)", borderRadius: 2, transform: "translateX(-50%)" } }} /><Typography sx={{ fontSize: "0.68rem" }}>{t("solutions.swipeHint", "Swipe to explore all solutions")}</Typography></Stack> */}
      </Stack>
    </Box>
  )
}

function SolutionCard({ solution, t }: { solution: (typeof solutions)[number]; t: (key: string) => string }) {
  return (
    <Box sx={{ position: "relative", height: { xs: 360, sm: 330, md: 300 }, overflow: "hidden", border: "1px solid rgba(255, 123, 0, 0.39)", borderRadius: "18px", bgcolor: "transparent", boxShadow: "0 16px 40px rgba(0,0,0,0.2)", transition: "transform 240ms ease, border-color 240ms ease", "&:hover": { transform: "translateY(0px)", borderColor: "rgba(172,218,133,0.55)" } }}>
      <Box className="ag-problems__parallax" sx={{ position: "absolute", zIndex: 0, bottom: 0, left: 0, right: 0, overflow: "hidden", height: { xs: 365, sm: 365, md: 305 }, borderRadius: "18px" }}>
        <Box className="ag-problems__parallax__layer" sx={{ position: "relative", height: "100%", width: "120%", display: "flex", justifyContent: "center" }}>
          <Box component="img" className="ag-problems__parallax__img" src={solution.image} alt="" sx={{ maxWidth: "none", flex: "0 0 calc(100% + (var(--slide-spacing, 6px) * 3))", height: "100%", objectFit: "cover", objectPosition: "center", filter: "saturate(1.05) contrast(1.08) brightness(1.05)", opacity: 1 }} />
        </Box>
      </Box>
      <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0.85) 100%)" }} />
      <Stack sx={{ position: "relative", zIndex: 2, height: "100%", minHeight: { xs: 360, sm: 330, md: 250 }, justifyContent: "space-between", p: { xs: 1.5, sm: 1.8, md: 1 } }}>
        <Stack direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 25, height: 25, borderRadius: "10px", bgcolor: "rgba(255, 255, 255, 0)", border: "1px solid rgba(0, 0, 0, 0)", fontSize: "1rem", backdropFilter: "blur(0px)" }}>{solution.icon}</Box>
          <Typography sx={{ color: "common.white", fontSize: { xs: "1.8rem", md: "1.2rem" }, fontWeight: 700, textShadow: "0 2px 6px rgba(0,0,0,0.85)" }}>{t(`${solution.labelKey}.title`)}</Typography>
        </Stack>
        <Typography sx={{ color: "rgba(255,255,255,0.92)", fontSize: "0.85rem", lineHeight: 1.55, fontWeight: 500, textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>{t(`${solution.labelKey}.desc`)}</Typography>
      </Stack>
    </Box>
  )
}

function CarouselButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return <Box component="button" type="button" aria-label={`${direction} solution`} onClick={onClick} sx={{ position: "absolute", zIndex: 2, top: "50%", [direction]: { xs: 4, md: -32 }, transform: "translateY(-50%)", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50%", bgcolor: "rgba(4,15,9,0.55)", color: "white", cursor: "pointer", fontSize: "1.2rem", "&:hover": { bgcolor: "rgba(145,217,80,0.18)", borderColor: "#91d950" } }}>{direction === "left" ? <RiArrowLeftCircleLine /> : <RiArrowRightCircleLine />}</Box>
}
