import { Box, Container, Typography, Stack, Grid, Link } from "@mui/material"
import { Mail, Quote, Sparkles } from "lucide-react"
import bhanuPrakashImg from "../assets/team/bhanu_prakash.jpg"

export interface TeamMember {
  id: string
  name: string
  role?: string
  email?: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: "bhanu-prakash",
    name: "Kapa Bhanu Prakash",
    role: "Entrepreneur, CEO, Director",
    email: "bhanukapa98@gmail.com",
    image: bhanuPrakashImg,
  },
]

export default function TeamMembers() {
  if (teamMembers.length === 0) {
    return null
  }

  const member = teamMembers[0]

  return (
    <Box
      id="team"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#08160c",
        color: "#ffffff",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundImage: "radial-gradient(ellipse at center top, rgba(34,197,94,0.08), transparent 70%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Stack spacing={2} sx={{ textAlign: "center", mb: { xs: 6, md: 8 }, alignItems: "center" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2.2,
              py: 0.6,
              borderRadius: "999px",
              bgcolor: "rgba(34, 197, 94, 0.12)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              color: "#4ade80",
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Leadership & Vision
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
              color: "#ffffff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Meet the Minds Behind{" "}
            <Box component="span" sx={{ color: "#4ade80" }}>
              Akanksha Agree Tech
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: 600,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Dedicated to transforming agriculture and empowering farmers through technology.
          </Typography>
        </Stack>

        {/* 2-Column Layout: Left Member Card, Right Founder's Vision */}
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
          {/* Member Profile Card */}
          <Grid size={{ xs: 12, md: 4.5, lg: 4 }}>
            <Stack
              alignItems="center"
              spacing={3}
              sx={{
                p: { xs: 4, md: 4.5 },
                height: "100%",
                borderRadius: 4,
                bgcolor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(74, 222, 128, 0.45)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.45), 0 0 30px rgba(34, 197, 94, 0.15)",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              {/* Spherical Shape Image Container */}
              <Box
                sx={{
                  width: { xs: 160, md: 190 },
                  height: { xs: 160, md: 190 },
                  borderRadius: "50%",
                  p: "6px",
                  background: "linear-gradient(135deg, #4ade80, #16a34a, rgba(255,255,255,0.2))",
                  boxShadow: "0 10px 30px rgba(34, 197, 94, 0.35)",
                  display: "flex",
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    bgcolor: "#122a16",
                    display: "block",
                  }}
                />
              </Box>

              {/* Member Info */}
              <Stack spacing={1.5} alignItems="center" sx={{ width: "100%" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "#ffffff",
                    fontSize: "1.35rem",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: "-0.01em",
                    textAlign: "center",
                  }}
                >
                  {member.name}
                </Typography>

                {member.role && (
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 0.5,
                      borderRadius: "999px",
                      bgcolor: "rgba(34, 197, 94, 0.15)",
                      border: "1px solid rgba(34, 197, 94, 0.35)",
                      color: "#4ade80",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      textAlign: "center",
                    }}
                  >
                    {member.role}
                  </Box>
                )}

                {member.email && (
                  <Link
                    href={`mailto:${member.email}`}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.8,
                      mt: 1,
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#4ade80",
                      },
                    }}
                  >
                    <Mail size={16} />
                    <span>{member.email}</span>
                  </Link>
                )}
              </Stack>
            </Stack>
          </Grid>

          {/* Founder's Vision Content Card */}
          <Grid size={{ xs: 12, md: 7.5, lg: 8 }}>
            <Box
              sx={{
                p: { xs: 3.5, sm: 4, md: 5 },
                height: "100%",
                borderRadius: 4,
                bgcolor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.35s ease",
                "&:hover": {
                  borderColor: "rgba(74, 222, 128, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <Stack spacing={3}>
                {/* Header Badge & Title */}
                <Stack spacing={1.5} alignItems="flex-start">
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      px: 1.8,
                      py: 0.4,
                      borderRadius: "999px",
                      bgcolor: "rgba(34, 197, 94, 0.15)",
                      border: "1px solid rgba(34, 197, 94, 0.35)",
                      color: "#4ade80",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <Sparkles size={13} />
                    FOUNDER'S VISION
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.4rem", sm: "1.75rem", md: "1.9rem" },
                      color: "#ffffff",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    Technology with a Purpose.{" "}
                    <Box component="span" sx={{ color: "#4ade80" }}>
                      Agriculture with a Future.
                    </Box>
                  </Typography>
                </Stack>

                {/* Highlight Quote Box */}
                <Box
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 3,
                    bgcolor: "rgba(34, 197, 94, 0.08)",
                    borderLeft: "4px solid #4ade80",
                    borderTop: "1px solid rgba(34, 197, 94, 0.2)",
                    borderRight: "1px solid rgba(34, 197, 94, 0.2)",
                    borderBottom: "1px solid rgba(34, 197, 94, 0.2)",
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                  }}
                >
                  <Quote size={24} color="#4ade80" style={{ flexShrink: 0, marginTop: 2 }} />
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.08rem" },
                      color: "#4ade80",
                      lineHeight: 1.5,
                    }}
                  >
                    “Technology should not remain in cities — it should reach every farmer.”
                  </Typography>
                </Box>

                {/* Extracted Text Content in Order */}
                <Stack spacing={2} sx={{ color: "rgba(255, 255, 255, 0.85)", fontSize: { xs: "0.92rem", sm: "0.98rem" }, lineHeight: 1.7 }}>
                  <Typography variant="body1">
                    I believe every farmer deserves access to reliable services, expert guidance, technology, and better opportunities.
                  </Typography>

                  <Typography variant="body1">
                    AgreeConnect is being built to connect farmers with the right service, the right expert, and the right opportunity at the right time — through one trusted, farmer-first digital ecosystem.
                  </Typography>

                  <Box
                    sx={{
                      py: 1.5,
                      px: 2.5,
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 700, color: "#ffffff" }}>
                      We are not building just another technology platform.
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700, color: "#4ade80" }}>
                      We are building technology to serve the people who feed our communities.
                    </Typography>
                  </Box>

                  <Typography variant="body1">
                    Starting from the villages of Andhra Pradesh, our vision is to create a connected agricultural ecosystem that grows from one farmer → one village → one district → one state → India.
                  </Typography>

                  <Typography variant="body1" sx={{ fontWeight: 600, color: "#ffffff" }}>
                    <Box component="span" sx={{ fontWeight: 700, color: "#4ade80" }}>
                      Our mission is simple:
                    </Box>{" "}
                    make technology useful, accessible, and meaningful for every farmer.
                  </Typography>
                </Stack>
              </Stack>

              {/* Card Footer / Tagline */}
              <Box
                sx={{
                  mt: 4,
                  pt: 2.5,
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  AgreeConnect
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    color: "#4ade80",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  Empowering Farmers with Technology
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}


