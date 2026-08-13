import { Box, Container, Typography, Stack, Grid, Link } from "@mui/material"
import { Mail } from "lucide-react"
import bhanuPrakashImg from "../assets/team/bhanu_prakash.jpg"
import abhiramImg from "../assets/team/abhiram.jpg"

export interface TeamMember {
  id: string
  name: string
  role?: string
  email?: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "bhanu-prakash",
    name: "Kapa Bhanu Prakash",
    role: " CEO & Director",
    email: "bhanukapa98@gmail.com",
    image: bhanuPrakashImg,
  },
  {
    id: "abhiram",
    name: "Kapa Laxmi Abhinay",
    role: "Managing Director",
    email: "AbhiKapa@gmail.com",
    image: abhiramImg,
  },
]

export default function TeamMembers() {
  if (teamMembers.length === 0) {
    return null
  }

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
            Leadership & Team
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

        {/* Members Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid key={member.id} size={{ xs: 12, sm: 6, md: 4, lg: 3.5 }}>
              <Stack
                alignItems="center"
                spacing={2.5}
                sx={{
                  p: { xs: 3.5, md: 4 },
                  borderRadius: 4,
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "rgba(74, 222, 128, 0.45)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.45), 0 0 30px rgba(34, 197, 94, 0.15)",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                {/* Spherical Shape Image Container */}
                <Box
                  sx={{
                    width: { xs: 150, md: 170 },
                    height: { xs: 150, md: 170 },
                    borderRadius: "50%",
                    p: "5px",
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
                <Stack spacing={1} alignItems="center" sx={{ width: "100%" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "#ffffff",
                      fontSize: "1.25rem",
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
                        px: 1.8,
                        py: 0.4,
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
                        mt: 0.5,
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        transition: "color 0.2s ease",
                        "&:hover": {
                          color: "#4ade80",
                        },
                      }}
                    >
                      <Mail size={14} />
                      <span>{member.email}</span>
                    </Link>
                  )}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
