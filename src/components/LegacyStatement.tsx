import { Box, Container, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import cropPill from "../assets/crop-inline-pill.jpg"

export default function LegacyStatement() {
  const { i18n } = useTranslation()
  const isTe = i18n.language === "te"

  return (
    <Box
      sx={{
        bgcolor: "#fafbfa",
        py: { xs: 8, sm: 10, md: 13 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 1.8,
              py: 0.6,
              borderRadius: "999px",
              bgcolor: "#e8f5e9",
              border: "1px solid #c8e6c9",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "#2e7d32",
              }}
            />
            <Typography
              sx={{
                fontSize: "0.76rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#1b5e20",
              }}
            >
              {isTe ? "మా వారసత్వం" : "Our Legacy"}
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: { xs: "1.65rem", sm: "2.3rem", md: "3.15rem" },
            fontWeight: 500,
            lineHeight: { xs: 1.35, md: 1.3 },
            letterSpacing: "-0.025em",
            color: "#1e293b",
            maxWidth: 1080,
          }}
        >
          {isTe ? (
            <>
              రైతులు, వ్యవసాయ వ్యాపారవేత్తలు మరియు నవకల్పనకర్తలకు అండగా నిలుస్తూ —{" "}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  mx: { xs: 0.6, sm: 1 },
                  my: "-4px",
                  width: { xs: 46, sm: 60, md: 72 },
                  height: { xs: 26, sm: 34, md: 40 },
                  borderRadius: "999px",
                  overflow: "hidden",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                  border: "2px solid #ffffff",
                }}
              >
                <Box
                  component="img"
                  src={cropPill}
                  alt="Crop field"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              {" "}భూమిని గౌరవిస్తూనే ఉత్పాదకతను పెంచే ఆచరణాత్మక సాంకేతిక సాధనాలను మా వేదిక అందిస్తుంది.
            </>
          ) : (
            <>
              Our platform is built to support farmers, agribusinesses, and agricultural innovators by delivering{" "}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  mx: { xs: 0.6, sm: 1 },
                  my: "-4px",
                  width: { xs: 48, sm: 62, md: 76 },
                  height: { xs: 26, sm: 34, md: 40 },
                  borderRadius: "999px",
                  overflow: "hidden",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                  border: "2px solid #ffffff",
                }}
              >
                <Box
                  component="img"
                  src={cropPill}
                  alt="Crop field"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              {" "}practical tools that respect the land while improving productivity.
            </>
          )}
        </Typography>
      </Container>
    </Box>
  )
}
