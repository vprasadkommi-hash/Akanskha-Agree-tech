import { useRef, type ComponentType } from "react"
import { useTranslation } from "react-i18next"
import { Box, Container, Typography, IconButton } from "@mui/material"
import ContactDialogButton from "../components/ContactDialogButton"
import {
  Leaf,
  Landmark,
  Mountain,
  Wrench,
  BarChart3,
  ShoppingCart,
  Briefcase,
  Lightbulb,
  Search,
  Users,
  Headset,
  Sprout,
  Maximize2,
  PenTool,
  Code,
  Check,
  ChevronLeft,
  ChevronRight,
  Image,
} from "lucide-react"
import visionbg from "../assets/visionbg.webp"

type IconComp = ComponentType<{ size?: number; color?: string }>

const ecosystem: { icon: IconComp; key: string; top: string; left: string }[] = [
  { icon: Landmark, key: "spiritual", top: "0%", left: "50%" },
  { icon: Mountain, key: "tourism", top: "18%", left: "95%" },
  { icon: Wrench, key: "services", top: "82%", left: "95%" },
  { icon: BarChart3, key: "data", top: "100%", left: "50%" },
  { icon: ShoppingCart, key: "markets", top: "82%", left: "5%" },
  { icon: Briefcase, key: "business", top: "18%", left: "5%" },
]

const cards = [
  { icon: Landmark, key: "temple", bg: "linear-gradient(135deg, #e9f5e9 0%, #f0f7f0 100%)" },
  { icon: Mountain, key: "tourism", bg: "linear-gradient(135deg, #e6f4ff 0%, #f0f9ff 100%)" },
  { icon: ShoppingCart, key: "marketplace", bg: "linear-gradient(135deg, #fff6e6 0%, #fffbf0 100%)" },
  { icon: Wrench, key: "services", bg: "linear-gradient(135deg, #f3f0ff 0%, #f9f7ff 100%)" },
  { icon: BarChart3, key: "intelligence", bg: "linear-gradient(135deg, #e6f8ff 0%, #f0fcff 100%)" },
  { icon: Briefcase, key: "business", bg: "linear-gradient(135deg, #fff0f6 0%, #fff7fa 100%)" },
]

const journey = [
  { icon: Search, key: "discover" },
  { icon: Users, key: "connect" },
  { icon: Headset, key: "support" },
  { icon: Sprout, key: "grow" },
  { icon: Maximize2, key: "expand" },
]

const platform = [
  { icon: Lightbulb, key: "idea", status: "done" },
  { icon: Search, key: "research", status: "done" },
  { icon: PenTool, key: "uiux", status: "done" },
  { icon: Code, key: "mvp", status: "inProgress" },
  { icon: ShoppingCart, key: "marketplace", status: " DEC 2026" },
  { icon: Landmark, key: "temple", status: "2027" },
  { icon: Mountain, key: "tourism", status: "2027"  },
  
  { icon: Wrench, key: "services", status: "2027"  },
  { icon: BarChart3, key: "intelligence", status: "2027" },
  { icon: Briefcase, key: "business", status: "2027" },
]

const Pill = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 0.8,
      px: 1.8,
      py: 0.6,
      border: "1px solid",
      borderColor: "rgba(61,107,63,0.25)",
      borderRadius: "999px",
      color: "#3d6b3f",
      fontSize: "0.72rem",
      fontWeight: 600,
      mb: 2.5,
    }}
  >
    {children}
  </Box>
)

export default function Roadmap() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" })
  }

  return (
    <Box>
      {/* Hero + ecosystem wheel */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 16, md: 22 },
          pb: { xs: 10, md: 14 },
          px: 2,
          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.72) 40%, rgba(255,255,255,0.25) 70%, transparent 100%), url(${visionbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 8, md: 6 },
            }}
          >
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Pill>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#91d950",
                  }}
                />
                {t("roadmap.hero.kicker")}
              </Pill>
              <Typography
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3.2rem", md: "3.8rem" },
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "#1a1a1a",
                }}
              >
                {t("roadmap.hero.title1")}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3.2rem", md: "3.8rem" },
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "#3d6b3f",
                  mb: 2.5,
                }}
              >
                {t("roadmap.hero.title2")}
                <Box component="span" sx={{ display: "inline-block", ml: 1, verticalAlign: "middle" }}>
                  <Leaf size={40} color="#91d950" />
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "text.secondary",
                  maxWidth: 520,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                {t("roadmap.hero.subtitle")}
              </Typography>
            </Box>

            <Box
              sx={{
                position: "relative",
                width: { xs: 320, sm: 380, md: 420 },
                height: { xs: 320, sm: 380, md: 420 },
                mx: { xs: "auto", md: 0 },
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "2px dashed",
                  borderColor: "rgba(61,107,63,0.15)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  bgcolor: "#e9f5e9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 30px rgba(61,107,63,0.12)",
                }}
              >
                <Leaf size={42} color="#3d6b3f" />
              </Box>
              {ecosystem.map((node) => {
                const Icon = node.icon
                return (
                  <Box
                    key={node.key}
                    sx={{
                      position: "absolute",
                      top: node.top,
                      left: node.left,
                      transform: "translate(-50%, -50%)",
                      width: 84,
                      height: 84,
                      borderRadius: "50%",
                      bgcolor: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
                    }}
                  >
                    <Icon size={22} color="#3d6b3f" />
                    <Typography
                      sx={{
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        color: "#3d6b3f",
                        mt: 0.4,
                        textAlign: "center",
                        px: 0.5,
                        lineHeight: 1.1,
                      }}
                    >
                      {t("roadmap.ecosystem." + node.key)}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Horizontal scroll cards */}
      <Box sx={{ position: "relative", py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Typography
            align="center"
            sx={{ fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 700, color: "#1a1a1a", mb: 6 }}
          >
            {t("roadmap.cards.title")}
          </Typography>
        </Container>

        <IconButton
          onClick={() => scroll(-1)}
          aria-label="Previous card"
          sx={{
            position: "absolute",
            left: { xs: 8, md: 24 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            display: { xs: "none", md: "flex" },
            "&:hover": { bgcolor: "white" },
          }}
        >
          <ChevronLeft size={22} color="#3d6b3f" />
        </IconButton>
        <IconButton
          onClick={() => scroll(1)}
          aria-label="Next card"
          sx={{
            position: "absolute",
            right: { xs: 8, md: 24 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            display: { xs: "none", md: "flex" },
            "&:hover": { bgcolor: "white" },
          }}
        >
          <ChevronRight size={22} color="#3d6b3f" />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollBehavior: "smooth",
            px: { xs: 2, md: 8 },
            py: 1,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Box
                key={card.key}
                sx={{
                  minWidth: 320,
                  maxWidth: 360,
                  flexShrink: 0,
                  borderRadius: 4,
                  bgcolor: "white",
                  boxShadow: "0 6px 30px rgba(0,0,0,0.06)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  height: { xs: "auto", sm: 220 },
                }}
              >
                <Box sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      bgcolor: "#e9f5e9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1.8,
                    }}
                  >
                    <Icon size={20} color="#3d6b3f" />
                  </Box>
                  <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#1a1a1a", mb: 0.8 }}>
                    {t("roadmap.cards.items." + card.key + ".title")}
                  </Typography>
                  <Typography sx={{ fontSize: "0.82rem", color: "text.secondary", lineHeight: 1.5, mb: 2, flex: 1 }}>
                    {t("roadmap.cards.items." + card.key + ".subtitle")}
                  </Typography>
                  <Box
                    sx={{
                      alignSelf: "flex-start",
                      px: 1.6,
                      py: 0.5,
                      borderRadius: "999px",
                      border: "1px solid #91d950",
                      color: "#3d6b3f",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                    }}
                  >
                    {t("roadmap.cards.comingSoon")}
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "45%" },
                    minHeight: { xs: 150, sm: "auto" },
                    background: card.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Image size={48} color="#999" style={{ opacity: 0.5 }} />
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      fontSize: "0.7rem",
                      color: "#999",
                    }}
                  >
                    {t("roadmap.cards.imageLabel")}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>

      {/* Journey steps */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: "#fafafa" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography sx={{ fontSize: { xs: "1.4rem", md: "1.8rem" }, fontWeight: 700, color: "#1a1a1a", mb: 1 }}>
              {t("roadmap.journey.title")}
            </Typography>
          </Box>

          <Box sx={{ position: "relative", display: "flex", justifyContent: "space-between", flexWrap: { xs: "wrap", md: "nowrap" }, gap: { xs: 4, md: 0 } }}>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 28,
                left: "8%",
                right: "8%",
                borderTop: "2px dashed #c8e6c9",
              }}
            />
            {journey.map((step) => {
              const Icon = step.icon
              return (
                <Box
                  key={step.key}
                  sx={{
                    flex: { xs: "1 1 45%", md: 1 },
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      bgcolor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      mb: 1.8,
                    }}
                  >
                    <Icon size={24} color="#3d6b3f" />
                  </Box>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a1a1a", mb: 0.5 }}>
                    {t("roadmap.journey.steps." + step.key + ".title")}
                  </Typography>
                  <Typography sx={{ fontSize: "0.78rem", color: "text.secondary", maxWidth: 160, mx: "auto" }}>
                    {t("roadmap.journey.steps." + step.key + ".desc")}
                  </Typography>
                </Box>
              )
            })}
          </Box>
        </Container>
      </Box>

      {/* Platform network */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography sx={{ fontSize: { xs: "1.4rem", md: "1.8rem" }, fontWeight: 700, color: "#1a1a1a", mb: 1 }}>
              {t("roadmap.platform.title")}
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "text.secondary" }}>
              {t("roadmap.platform.subtitle")}
            </Typography>
          </Box>

          <Box sx={{ position: "relative", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: { xs: 4, md: 6 }, px: 2 }}>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 32,
                left: "15%",
                right: "15%",
                borderTop: "2px dashed #c8e6c9",
              }}
            />
            {platform.map((item) => {
              const Icon = item.icon
              const done = item.status === "done"
              const inProgress = item.status === "inProgress"
              const isProgress = ["idea", "research", "uiux", "mvp"].includes(item.key)
              const label = isProgress
                ? t("roadmap.progress.steps." + item.key + ".title")
                : t("roadmap.platform.items." + item.key)
              return (
                <Box key={item.key} sx={{ textAlign: "center", zIndex: 1, width: 110 }}>
                  <Box
                    sx={{
                      width: 66,
                      height: 66,
                      borderRadius: "50%",
                      bgcolor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
                      mb: 1.5,
                    }}
                  >
                    <Icon size={26} color="#3d6b3f" />
                  </Box>
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: 600, color: "#1a1a1a", mb: 0.5 }}>{label}</Typography>
                  {item.status && (
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        px: 1.2,
                        py: 0.25,
                        borderRadius: "999px",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        bgcolor: done ? "#e9f5e9" : "white",
                        color: done || inProgress ? "#3d6b3f" : "#666",
                        border: "1px solid",
                        borderColor: done ? "rgba(61,107,63,0.25)" : inProgress ? "#91d950" : "#e0e0e0",
                      }}
                    >
                      {done && <Check size={12} color="#3d6b3f" />}
                      {done ? t("roadmap.progress.done") : inProgress ? t("roadmap.progress.inProgress") : item.status}
                    </Box>
                  )}
                </Box>
              )
            })}
          </Box>
        </Container>
      </Box>

      {/* Bottom CTA */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f6fff4" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 6, md: 10 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              sx={{
                width: { xs: 240, md: 280 },
                height: { xs: 220, md: 260 },
                borderRadius: "50% 50% 0 50%",
                bgcolor: "#e9f5e9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Image size={64} color="#999" style={{ opacity: 0.5 }} />
            </Box>
            <Box sx={{ maxWidth: 520 }}>
              <Typography sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, fontWeight: 700, color: "#1a1a1a", mb: 1.5 }}>
                {t("roadmap.cta.title")}
              </Typography>
              <Typography sx={{ fontSize: "0.95rem", color: "text.secondary", mb: 3 }}>
                {t("roadmap.cta.subtitle")}
              </Typography>
              <ContactDialogButton
                variant="contained"
                endIcon={<ChevronRight size={16} />}
                sx={{
                  borderRadius: "999px",
                  bgcolor: "#3d6b3f",
                  color: "white",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  py: 1.2,
                  "&:hover": { bgcolor: "#2a4a2b" },
                }}
              >
                {t("roadmap.cta.button")}
              </ContactDialogButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
