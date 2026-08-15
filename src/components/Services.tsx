import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Box, Typography, Stack, useTheme, useMediaQuery } from "@mui/material"
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri"
import { BiSolidLeaf } from "react-icons/bi"
import useEmblaCarousel from "embla-carousel-react"
import servicesBg from "../assets/services/servicesbg.webp"

const serviceImages = import.meta.glob("../assets/services/*.png", { eager: true, import: "default" }) as Record<string, string>
function img(filename: string): string {
  return serviceImages[`../assets/services/${filename}`] ?? ""
}

type Service = { icon: string; image: string; labelKey: string }
type Category = { id: string; icon: string; labelKey: string; services: Service[] }

const categories: Category[] = [
  {
    id: "landPreparation",
    icon: "🚜",
    labelKey: "services.categories.landPreparation",
    services: [
      { icon: "�", image: img("tractorbooking.png"), labelKey: "services.tractorBooking" },
      { icon: "�", image: img("rotavatorservice.png"), labelKey: "services.rotavatorService" },
      { icon: "�", image: img("lazerlandleveler.png"), labelKey: "services.laserLandLeveler" },
      { icon: "⛏️", image: img("earthmover.png"), labelKey: "services.earthMover" },
      { icon: "🏗️", image: img("JCB.png"), labelKey: "services.excavatorJcb" },
      { icon: "💢", image: img("borewelldrilling.png"), labelKey: "services.borewellDrilling" },
      { icon: "🗺️", image: img("farmmapping.png"), labelKey: "services.farmMapping" },
    ],
  },
  {
    id: "sowingPlantation",
    icon: "🌱",
    labelKey: "services.categories.sowingPlantation",
    services: [
      { icon: "🌱", image: img("seeddrillmachine.png"), labelKey: "services.seedDrill" },
      { icon: "🌾", image: img("paddytransplanter.png"), labelKey: "services.paddyTransplanter" },
      { icon: "😊", image: img("happyseeder.png"), labelKey: "services.happySeeder" },
      { icon: "🌳", image: img("plantationlabour.png"), labelKey: "services.plantationLabour" },
    ],
  },
  {
    id: "cropCare",
    icon: "�",
    labelKey: "services.categories.cropCare",
    services: [
      { icon: "�", image: img("dronespraying.png"), labelKey: "services.droneSpraying" },
      { icon: "🤖", image: img("aicropdeseasedetaction.png"), labelKey: "services.aiCropDisease" },
      { icon: "👨‍🌾", image: img("agricultureexpertconsultation.png"), labelKey: "services.expertConsultation" },
      { icon: "🧂", image: img("fertilizerrecommendation.png"), labelKey: "services.fertilizerRecommendation" },
      { icon: "🐛", image: img("pestmanagement.png"), labelKey: "services.pestManagement" },
      { icon: "🌦️", image: img("weatheradvisory.png"), labelKey: "services.weatherAdvisory" },
      { icon: "📋", image: img("cropplanning.png"), labelKey: "services.cropPlanning" },
      { icon: "🍃", image: img("organicfarmingguide.png"), labelKey: "services.organicFarming" },
      { icon: "🛰️", image: img("satellitecrop monitoring.png"), labelKey: "services.satelliteMonitoring" },
      { icon: "🧪", image: img("soiltesting.png"), labelKey: "services.soilTesting" },
    ],
  },
  {
    id: "irrigationWater",
    icon: "�",
    labelKey: "services.categories.irrigationWater",
    services: [
      { icon: "💧", image: img("smartirrigationplanning.png"), labelKey: "services.smartIrrigation" },
      { icon: "💦", image: img("dripirrigationinstallation.png"), labelKey: "services.dripIrrigation" },
      { icon: "🚿", image: img("sprinklerinstallation.png"), labelKey: "services.sprinklerInstallation" },
      { icon: "☀️", image: img("solarpumpinstallation.png"), labelKey: "services.solarPump" },
      { icon: "🔧", image: img("boremotorrepair.png"), labelKey: "services.boreMotorRepair" },
    ],
  },
  {
    id: "harvesting",
    icon: "🌾",
    labelKey: "services.categories.harvesting",
    services: [
      { icon: "🏭", image: img("combineharvester.png"), labelKey: "services.combineHarvester" },
      { icon: "⚙️", image: img("reapermachine.png"), labelKey: "services.reaperMachine" },
      { icon: "🌾", image: img("harvestlabour.png"), labelKey: "services.harvestLabour" },
      { icon: "📦", image: img("strawbaler.png"), labelKey: "services.strawBaler" },
      { icon: "👥", image: img("farmlabourbooking.png"), labelKey: "services.farmLabour" },
    ],
  },
  {
    id: "postHarvest",
    icon: "�",
    labelKey: "services.categories.postHarvest",
    services: [
      { icon: "🚚", image: img("transportation.png"), labelKey: "services.cropTransport" },
      { icon: "❄️", image: img("coldstoragebooking.png"), labelKey: "services.coldStorage" },
      { icon: "🏚️", image: img("warehousebooking.png"), labelKey: "services.warehouseBooking" },
    ],
  },
  {
    id: "farmInputs",
    icon: "🛒",
    labelKey: "services.categories.farmInputs",
    services: [
      { icon: "🌱", image: img("certifiedseedsdelivery.png"), labelKey: "services.certifiedSeeds" },
      { icon: "📦", image: img("fertilizerdelivery.png"), labelKey: "services.fertilizerDelivery" },
      { icon: "🧴", image: img("pesticidedelivery.png"), labelKey: "services.pesticideDelivery" },
      { icon: "🌿", image: img("organicinputs.png"), labelKey: "services.organicInputs" },
    ],
  },
  {
    id: "farmInfrastructure",
    icon: "🏡",
    labelKey: "services.categories.farmInfrastructure",
    services: [
      { icon: "🚧", image: img("farmfencing.png"), labelKey: "services.farmFencing" },
      { icon: "🏠", image: img("polyhouseconstruction.png"), labelKey: "services.polyhouseConstruction" },
      { icon: "🏡", image: img("greenhouseinstallation.png"), labelKey: "services.greenhouseInstallation" },
      { icon: "💧", image: img("farmpondconstruction.png"), labelKey: "services.farmPond" },
      { icon: "🐄", image: img("dairyshedconstruction.png"), labelKey: "services.dairyShed" },
    ],
  },
  {
    id: "govtFinance",
    icon: "📋",
    labelKey: "services.categories.govtFinance",
    services: [
      { icon: "🏛️", image: img("governmentschemehelp.png"), labelKey: "services.govtSchemesHelp" },
      { icon: "🛡️", image: img("cropinsuranceassurance.png"), labelKey: "services.cropInsurance" },
    ],
  },
  {
    id: "workforce",
    icon: "👷",
    labelKey: "services.categories.workforce",
    services: [
      { icon: "👥", image: img("farmlabourbooking.png"), labelKey: "services.farmLabour" },
      { icon: "🚰", image: img("irrigationworker.png"), labelKey: "services.irrigationWorker" },
      { icon: "🌳", image: img("plantationlabour.png"), labelKey: "services.plantationLabour" },
    ],
  },
]

export default function Services() {
  const { t } = useTranslation()
  return (
    <Box id="services" sx={{ position: "relative", overflow: "hidden", bgcolor: "#06110b", py: { xs: 7, md: 9 }, px: { xs: 2, sm: 4, md: 5 } }}>
      <Box component="img" src={servicesBg} alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
      <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(6,17,11,0.82) 0%, rgba(6,17,11,0.88) 50%, rgba(6,17,11,0.92) 100%)" }} />
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: 1280, mx: "auto" }}>
        <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", mb: { xs: 4, md: 5.5 } }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "#91d950" }}>
            <Box sx={{ width: 8, height: 8, bgcolor: "#91d950", transform: "rotate(45deg)" }} />
            <Typography sx={{ fontSize: { xs: "0.62rem", sm: "0.72rem" }, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t("services.kicker")}</Typography>
            <Box sx={{ width: 8, height: 8, bgcolor: "#91d950", transform: "rotate(45deg)" }} />
          </Stack>
          <Typography variant="h2" sx={{ color: "common.white", fontSize: { xs: "1.9rem", sm: "2.35rem", md: "2.75rem" }, fontWeight: 800, lineHeight: 1.08, letterSpacing: "-1.5px" }}>{t("services.title")}</Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.62)", fontSize: { xs: "0.78rem", sm: "0.88rem" }, lineHeight: 1.5, maxWidth: 560 }}>{t("services.subtitle")}</Typography>
        </Stack>
        <Stack spacing={{ xs: 5, md: 7 }}>
          {categories.map((category) => <CategoryCarousel key={category.id} category={category} />)}
        </Stack>
      </Box>
    </Box>
  )
}

function CategoryCarousel({ category }: { category: Category }) {
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"))
  const slidesPerView = isMobile ? 2 : isTablet ? 4 : 6
  const slideWidth = `${100 / slidesPerView}%`
  const services = category.services

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    queueMicrotask(() => {
      setScrollSnaps(emblaApi.scrollSnapList())
      onSelect()
    })
    emblaApi.on("select", onSelect).on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <Box>
      <Stack direction="row" spacing={1.2} sx={{ alignItems: "center", mb: { xs: 2, md: 2.5 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: "10px", bgcolor: "rgba(145,217,80,0.12)", border: "1px solid rgba(145,217,80,0.3)", color: "#ff8800", fontSize: "1.2rem", flexShrink: 0 }}><BiSolidLeaf /></Box>
        <Box>
          <Typography
            sx={{
              backgroundImage: "linear-gradient(90deg, #ff8400, #7bc24c)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            {t(category.labelKey)}
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ position: "relative" }}>
        {services.length > slidesPerView && <CarouselButton direction="left" onClick={scrollPrev} />}
        <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
          <Box sx={{ display: "flex" }}>
            {services.map((service) => (
              <Box key={`${service.labelKey}-${category.id}`} sx={{ flex: `0 0 ${slideWidth}`, minWidth: 0, px: { xs: 0.375, md: 0.625 } }}>
                <ServiceCard service={service} t={t} />
              </Box>
            ))}
          </Box>
        </Box>
        {services.length > slidesPerView && <CarouselButton direction="right" onClick={scrollNext} />}
      </Box>

      {scrollSnaps.length > 1 && (
        <Stack direction="row" spacing={0.45} sx={{ justifyContent: "center", mt: { xs: 2, md: 2.5 } }}>
          {scrollSnaps.map((_, index) => <Box key={index} sx={{ width: index === selectedIndex ? 25 : 9, height: 3, borderRadius: 3, bgcolor: index === selectedIndex ? "#91d950" : "rgba(255,255,255,0.22)" }} />)}
        </Stack>
      )}
    </Box>
  )
}

function ServiceCard({ service, t }: { service: Service; t: (key: string) => string }) {
  return (
    <Box sx={{ position: "relative", minHeight: { xs: 220, sm: 240, md: 260 }, overflow: "hidden", border: "1px solid rgba(145,217,80,0.35)", borderRadius: "12px", bgcolor: "#0a1410", boxShadow: "0 10px 24px rgba(0,0,0,0.15)", transition: "transform 240ms ease, border-color 240ms ease", "&:hover": { transform: "translateY(-3px)", borderColor: "rgba(145,217,80,0.65)" } }}>
      <Box component="img" src={service.image} alt={t(`${service.labelKey}.title`)} loading="lazy" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
      <Box sx={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(6,17,11,1) 0%, rgba(6,17,11,0.5) 50%, rgba(6,17,11,1) 100%)" }} />
      <Stack sx={{ position: "relative", zIndex: 2, height: "100%", minHeight: { xs: 220, sm: 240, md: 260 }, justifyContent: "space-between", p: { xs: 1, sm: 1.2, md: 1.25 } }}>
        <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
          {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, borderRadius: "6px", bgcolor: "rgba(145,217,80,0)", border: "1px solid rgba(144, 217, 80, 0)", fontSize: "0.72rem", flexShrink: 0, backdropFilter: "blur(0px)" }}>{service.icon}</Box> */}
          <Typography sx={{ color: "#91d950", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{t(`${service.labelKey}.title`)}</Typography>
        </Stack>
        {/* <Typography sx={{ color: "common.white", fontSize: { xs: "0.68rem", md: "0.74rem" }, fontWeight: 700, lineHeight: 1.1, mb: 0.3 }}>{t(`${service.labelKey}.title`)}</Typography> */}
        <Typography sx={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8rem", lineHeight: 1.35 }}>{t(`${service.labelKey}.desc`)}</Typography>
      </Stack>
    </Box>
  )
}

function CarouselButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return <Box component="button" type="button" aria-label={`${direction} service`} onClick={onClick} sx={{ position: "absolute", zIndex: 2, top: "50%", [direction]: { xs: 4, md: -32 }, transform: "translateY(-50%)", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50%", bgcolor: "rgba(4,15,9,0.55)", color: "white", cursor: "pointer", fontSize: "1.2rem", "&:hover": { bgcolor: "rgba(145,217,80,0.18)", borderColor: "#91d950" } }}>{direction === "left" ? <RiArrowLeftCircleLine /> : <RiArrowRightCircleLine />}</Box>
}
