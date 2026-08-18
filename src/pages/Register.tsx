import { useState, useMemo } from "react"
import { useTranslation } from "react-i18next"
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Tabs,
  Tab,
  MenuItem,
  LinearProgress,
  Dialog,
  DialogContent,
  IconButton,
  Chip,
  Paper,
  Grid,
} from "@mui/material"
import {
  Sprout,
  Tractor,
  CheckCircle,
  Sparkles,
  Send,
  ArrowLeft,
  X,
  FileCheck,
} from "lucide-react"
import { Link as RouterLink } from "react-router-dom"
import visionBg from "../assets/visionbg.webp"

export default function Register() {
  const { i18n } = useTranslation()
  const isTelugu = i18n.language === "te"

  // Tab: 0 = Farmer Registration (రైతు నమోదు), 1 = Service Provider Registration (సేవా ప్రదాత నమోదు)
  const [tabIndex, setTabIndex] = useState(0)

  // Farmer Form State
  const [farmerForm, setFarmerForm] = useState({
    // Step 1: Field Officer / Agent Info
    agentName: "",
    referralCode: "",

    // Step 2: Personal Info
    fullName: "",
    age: "",
    gender: "male",
    phone: "",
    altPhone: "",
    aadhaar: "",

    // Step 3: Location Details
    state: "Andhra Pradesh",
    district: "",
    mandal: "",
    village: "",
    pincode: "",

    // Step 4: Land & Crop Details
    landSize: "",
    waterSource: "borewell",
    crops: [] as string[],
    servicesNeeded: [] as string[],
    notes: "",
  })

  // Service Provider Form State
  const [providerForm, setProviderForm] = useState({
    agentName: "",
    fullName: "",
    businessName: "",
    phone: "",
    altPhone: "",
    state: "Andhra Pradesh",
    district: "",
    mandal: "",
    village: "",
    pincode: "",
    equipmentTypes: [] as string[],
    machineCount: "1",
    serviceAreas: "",
    experienceYears: "",
    notes: "",
  })

  // Success Modal
  const [successOpen, setSuccessOpen] = useState(false)
  const [submittedRegId, setSubmittedRegId] = useState("")

  // Calculate Progress Percentage for Farmer Form
  const farmerProgress = useMemo(() => {
    let filled = 0
    const total = 9
    if (farmerForm.agentName.trim()) filled++
    if (farmerForm.fullName.trim()) filled++
    if (farmerForm.age.trim()) filled++
    if (farmerForm.phone.trim().length >= 10) filled++
    if (farmerForm.district.trim()) filled++
    if (farmerForm.mandal.trim()) filled++
    if (farmerForm.village.trim()) filled++
    if (farmerForm.landSize.trim()) filled++
    if (farmerForm.crops.length > 0) filled++
    return Math.round((filled / total) * 100)
  }, [farmerForm])

  // Calculate Progress Percentage for Provider Form
  const providerProgress = useMemo(() => {
    let filled = 0
    const total = 8
    if (providerForm.fullName.trim()) filled++
    if (providerForm.phone.trim().length >= 10) filled++
    if (providerForm.businessName.trim()) filled++
    if (providerForm.district.trim()) filled++
    if (providerForm.mandal.trim()) filled++
    if (providerForm.village.trim()) filled++
    if (providerForm.equipmentTypes.length > 0) filled++
    if (providerForm.serviceAreas.trim()) filled++
    return Math.round((filled / total) * 100)
  }, [providerForm])

  const currentProgress = tabIndex === 0 ? farmerProgress : providerProgress

  // Crop Options
  const cropOptions = [
    { key: "paddy", en: "Paddy (వరి)", te: "వరి (Paddy)" },
    { key: "cotton", en: "Cotton (పత్తి)", te: "పత్తి (Cotton)" },
    { key: "chillies", en: "Chillies (మిర్చి)", te: "మిర్చి (Chillies)" },
    { key: "maize", en: "Maize (మొక్కజొన్న)", te: "మొక్కజొన్న (Maize)" },
    { key: "groundnut", en: "Groundnut (వేరుశనగ)", te: "వేరుశనగ (Groundnut)" },
    { key: "horticulture", en: "Horticulture (తోటలు)", te: "ఉద్యానవన తోటలు" },
    { key: "other", en: "Other Crops (ఇతర పంటలు)", te: "ఇతర పంటలు" },
  ]

  // Services Options
  const serviceOptions = [
    { key: "drone", en: "Drone Spraying Service", te: "డ్రోన్ స్ప్రేయింగ్ సేవలు" },
    { key: "tractor", en: "Tractor & Rotavator Booking", te: "ట్రాక్టర్ & రోటావేటర్ బుకింగ్" },
    { key: "harvester", en: "Combine Harvester Booking", te: "హార్వెస్టర్ కోత యంత్రం" },
    { key: "crop_doctor", en: "AI Crop Disease Doctor", te: "AI పంట రోగ నిర్ధారణ" },
    { key: "soil_test", en: "Soil Testing & Nutrition", te: "నేల పరీక్ష & ఎరువుల సలహా" },
    { key: "govt_scheme", en: "Govt Subsidies & Schemes", te: "ప్రభుత్వ పథకాల సాయం" },
  ]

  // Provider Equipment Options
  const providerEquipOptions = [
    { key: "drones", en: "Agricultural Drones (డ్రోన్లు)", te: "వ్యవసాయ డ్రోన్లు" },
    { key: "tractors", en: "Tractors & Implements (ట్రాక్టర్లు)", te: "ట్రాక్టర్లు & సాగు పరికరాలు" },
    { key: "harvesters", en: "Harvesters (హార్వెస్టర్లు)", te: "కోత యంత్రాలు (హార్వెస్టర్లు)" },
    { key: "jcb", en: "JCB / Earthmovers", te: "JCB / ఎర్త్‌మూవర్లు" },
    { key: "borewell", en: "Borewell Drilling / Motors", te: "బోర్‌వెల్ & మోటార్ సర్వీసెస్" },
    { key: "labor", en: "Farm Labour Supply (సాగు కూలీలు)", te: "సాగు కూలీల బృందం" },
  ]

  const handleFarmerCropToggle = (cropKey: string) => {
    setFarmerForm((prev) => ({
      ...prev,
      crops: prev.crops.includes(cropKey)
        ? prev.crops.filter((c) => c !== cropKey)
        : [...prev.crops, cropKey],
    }))
  }

  const handleFarmerServiceToggle = (svcKey: string) => {
    setFarmerForm((prev) => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(svcKey)
        ? prev.servicesNeeded.filter((s) => s !== svcKey)
        : [...prev.servicesNeeded, svcKey],
    }))
  }

  const handleProviderEquipToggle = (eqKey: string) => {
    setProviderForm((prev) => ({
      ...prev,
      equipmentTypes: prev.equipmentTypes.includes(eqKey)
        ? prev.equipmentTypes.filter((e) => e !== eqKey)
        : [...prev.equipmentTypes, eqKey],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const prefix = tabIndex === 0 ? "AAT-FRM" : "AAT-PRV"
    const randomNum = Math.floor(100000 + Math.random() * 900000)
    const regId = `${prefix}-${randomNum}`
    setSubmittedRegId(regId)
    setSuccessOpen(true)
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 12 },
        position: "relative",
        backgroundImage: `url(${visionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#06130a",
        color: "#ffffff",
      }}
    >
      {/* Background Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(4, 12, 7, 0.88) 0%, rgba(6, 18, 10, 0.94) 100%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        {/* Back Link & Header */}
        <Stack spacing={3} sx={{ mb: 4 }}>
          <Button
            component={RouterLink}
            to="/"
            startIcon={<ArrowLeft size={18} />}
            sx={{
              alignSelf: "flex-start",
              color: "rgba(255, 255, 255, 0.75)",
              textTransform: "none",
              fontSize: "0.88rem",
              borderRadius: "999px",
              px: 2,
              py: 0.6,
              bgcolor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.14)",
                color: "#ffffff",
              },
            }}
          >
            {isTelugu ? "హోమ్ పేజీకి వెళ్లండి" : "Back to Home"}
          </Button>

          {/* Title Header */}
          <Box textAlign="center">
            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
              <Chip
                icon={<Sparkles size={14} color="#4ade80" />}
                label={isTelugu ? "ఆకాంక్ష అగ్రీటెక్ డిజిటల్ పోర్టల్" : "AKANKSHA AGREE TECH PORTAL"}
                sx={{
                  bgcolor: "rgba(34, 197, 94, 0.12)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                  color: "#86efac",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.06em",
                }}
              />
            </Stack>

            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                mb: 1.2,
                background: "linear-gradient(135deg, #ffffff 30%, #86efac 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {tabIndex === 0
                ? isTelugu
                  ? "రైతు నమోదు"
                  : "Farmer Registration"
                : isTelugu
                ? "సేవా ప్రదాత నమోదు"
                : "Service Provider Registration"}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.78)",
                maxWidth: 620,
                mx: "auto",
                fontSize: { xs: "0.92rem", sm: "1.02rem" },
              }}
            >
              {tabIndex === 0
                ? isTelugu
                  ? "మా సేవలను పొందడానికి రైతుగా నమోదు చేసుకోండి."
                  : "Register as a farmer to access our agricultural services."
                : isTelugu
                ? "ట్రాక్టర్లు, డ్రోన్లు, హార్వెస్టర్లు కలిగిన సర్వీస్ ప్రొవైడర్‌గా మా నెట్‌వర్క్‌లో చేరండి."
                : "Join our network as an agricultural service provider."}
            </Typography>
          </Box>
        </Stack>

        {/* Main Glass Form Card */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 4 },
            borderRadius: { xs: "20px", sm: "28px" },
            background:
              "linear-gradient(145deg, rgba(14, 28, 19, 0.82) 0%, rgba(6, 16, 10, 0.92) 100%)",
            backdropFilter: "blur(28px) saturate(180%)",
            border: "1px solid rgba(74, 222, 128, 0.28)",
            boxShadow:
              "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(34, 197, 94, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.25)",
            color: "#ffffff",
          }}
        >
          {/* Top Tabs Switcher */}
          <Box
            sx={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              mb: 3,
            }}
          >
            <Tabs
              value={tabIndex}
              onChange={(_, val) => setTabIndex(val)}
              variant="fullWidth"
              textColor="inherit"
              TabIndicatorProps={{
                sx: {
                  backgroundColor: "#4ade80",
                  height: 3,
                  borderRadius: "3px 3px 0 0",
                  boxShadow: "0 0 12px #4ade80",
                },
              }}
            >
              <Tab
                icon={<Sprout size={18} />}
                iconPosition="start"
                label={isTelugu ? "🌾 రైతు నమోదు" : "🌾 Farmer Registration"}
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  textTransform: "none",
                  py: 1.6,
                  color: tabIndex === 0 ? "#4ade80" : "rgba(255, 255, 255, 0.65)",
                }}
              />
              <Tab
                icon={<Tractor size={18} />}
                iconPosition="start"
                label={isTelugu ? "👥 సేవా ప్రదాత నమోదు" : "👥 Service Provider"}
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  textTransform: "none",
                  py: 1.6,
                  color: tabIndex === 1 ? "#4ade80" : "rgba(255, 255, 255, 0.65)",
                }}
              />
            </Tabs>
          </Box>

          {/* Live Progress Bar */}
          <Box sx={{ mb: 3.5 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 0.8 }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  color: "rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                }}
              >
                <FileCheck size={16} color="#4ade80" />
                {isTelugu ? "పురోగతి" : "Progress"}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 800, color: "#4ade80", fontSize: "0.85rem" }}
              >
                {currentProgress}%
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={currentProgress}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: "rgba(255, 255, 255, 0.08)",
                "& .MuiLinearProgress-bar": {
                  borderRadius: 4,
                  background: "linear-gradient(90deg, #22c55e, #4ade80)",
                  boxShadow: "0 0 10px rgba(74, 222, 128, 0.5)",
                },
              }}
            />
          </Box>

          <form onSubmit={handleSubmit}>
            {tabIndex === 0 ? (
              /* ================== FARMER REGISTRATION FORM ================== */
              <Stack spacing={3.5}>
                {/* Step 1: Field Officer Information */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "18px",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        bgcolor: "#4ade80",
                        color: "#05180c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      1
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
                      {isTelugu ? "ఫీల్డ్ ఆఫీసర్ / ఏజెంట్ సమాచారం" : "Field Officer / Agent Details"}
                    </Typography>
                  </Stack>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "ఫీల్డ్ ఆపరేటర్ పేరు" : "Field Operator Name"}
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder={isTelugu ? "ఉదా: testing లేదా ఆపరేటర్ పేరు" : "e.g. testing"}
                        value={farmerForm.agentName}
                        onChange={(e) => setFarmerForm({ ...farmerForm, agentName: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "సిఫార్సు కోడ్ (ఐచ్ఛికం)" : "Referral Code (Optional)"}
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="e.g. AAT-2026"
                        value={farmerForm.referralCode}
                        onChange={(e) => setFarmerForm({ ...farmerForm, referralCode: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Step 2: Personal Information */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "18px",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        bgcolor: "#4ade80",
                        color: "#05180c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      2
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
                      {isTelugu ? "వ్యక్తిగత సమాచారం" : "Personal Information"}
                    </Typography>
                  </Stack>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "పూర్తి పేరు *" : "Full Name *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder={isTelugu ? "రైతు పూర్తి పేరు" : "Full Name"}
                        value={farmerForm.fullName}
                        onChange={(e) => setFarmerForm({ ...farmerForm, fullName: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 6, sm: 3 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "వయస్సు" : "Age"}
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        placeholder="e.g. 45"
                        value={farmerForm.age}
                        onChange={(e) => setFarmerForm({ ...farmerForm, age: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 6, sm: 3 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "లింగం" : "Gender"}
                      </Typography>
                      <TextField
                        select
                        fullWidth
                        size="small"
                        value={farmerForm.gender}
                        onChange={(e) => setFarmerForm({ ...farmerForm, gender: e.target.value })}
                        sx={inputStyle}
                      >
                        <MenuItem value="male">{isTelugu ? "పురుషుడు" : "Male"}</MenuItem>
                        <MenuItem value="female">{isTelugu ? "స్త్రీ" : "Female"}</MenuItem>
                        <MenuItem value="other">{isTelugu ? "ఇతర" : "Other"}</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "ఫోన్ నంబర్ *" : "Phone Number *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder="10 digit mobile number"
                        value={farmerForm.phone}
                        onChange={(e) => setFarmerForm({ ...farmerForm, phone: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "ఆధార్ నంబర్ (ఐచ్ఛికం)" : "Aadhaar Number (Optional)"}
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="XXXX XXXX XXXX"
                        value={farmerForm.aadhaar}
                        onChange={(e) => setFarmerForm({ ...farmerForm, aadhaar: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Step 3: Location Details */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "18px",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        bgcolor: "#4ade80",
                        color: "#05180c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      3
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
                      {isTelugu ? "చిరునామా & నివాస వివరాలు" : "Address & Location"}
                    </Typography>
                  </Stack>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "రాష్ట్రం" : "State"}
                      </Typography>
                      <TextField
                        select
                        fullWidth
                        size="small"
                        value={farmerForm.state}
                        onChange={(e) => setFarmerForm({ ...farmerForm, state: e.target.value })}
                        sx={inputStyle}
                      >
                        <MenuItem value="Andhra Pradesh">Andhra Pradesh (ఆంధ్రప్రదేశ్)</MenuItem>
                        <MenuItem value="Telangana">Telangana (తెలంగాణ)</MenuItem>
                        <MenuItem value="Other">Other States</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "జిల్లా *" : "District *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder={isTelugu ? "ఉదా: గుంటూరు / ప్రకాశం" : "District Name"}
                        value={farmerForm.district}
                        onChange={(e) => setFarmerForm({ ...farmerForm, district: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "మండలం *" : "Mandal *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder={isTelugu ? "మండలం పేరు" : "Mandal"}
                        value={farmerForm.mandal}
                        onChange={(e) => setFarmerForm({ ...farmerForm, mandal: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "గ్రామం *" : "Village *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder={isTelugu ? "గ్రామం పేరు" : "Village"}
                        value={farmerForm.village}
                        onChange={(e) => setFarmerForm({ ...farmerForm, village: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "పిన్‌కోడ్" : "Pincode"}
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="e.g. 523001"
                        value={farmerForm.pincode}
                        onChange={(e) => setFarmerForm({ ...farmerForm, pincode: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Step 4: Land & Crop Information */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "18px",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        bgcolor: "#4ade80",
                        color: "#05180c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      4
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
                      {isTelugu ? "వ్యవసాయ భూమి & పంటల వివరాలు" : "Land & Crop Details"}
                    </Typography>
                  </Stack>

                  <Grid container spacing={2} sx={{ mb: 2.5 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "మొత్తం భూమి విస్తీర్ణం (ఎకరాలలో) *" : "Total Land in Acres *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder="e.g. 4.5 Acres"
                        value={farmerForm.landSize}
                        onChange={(e) => setFarmerForm({ ...farmerForm, landSize: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "నీటిపారుదల రకం" : "Water Source"}
                      </Typography>
                      <TextField
                        select
                        fullWidth
                        size="small"
                        value={farmerForm.waterSource}
                        onChange={(e) => setFarmerForm({ ...farmerForm, waterSource: e.target.value })}
                        sx={inputStyle}
                      >
                        <MenuItem value="borewell">{isTelugu ? "బోరుబావి / మోటారు" : "Borewell / Tube Well"}</MenuItem>
                        <MenuItem value="canal">{isTelugu ? "కాలువ నీరు" : "Canal Water"}</MenuItem>
                        <MenuItem value="rainfed">{isTelugu ? "వర్షాధార పంట" : "Rainfed"}</MenuItem>
                        <MenuItem value="drip">{isTelugu ? "డ్రిప్ / స్ప్రింక్లర్" : "Drip / Sprinkler"}</MenuItem>
                      </TextField>
                    </Grid>
                  </Grid>

                  {/* Crops Selection */}
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#ffffff", mb: 1 }}>
                    {isTelugu ? "సాగు చేస్తున్న పంటలు:" : "Crops Cultivated:"}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                    {cropOptions.map((crop) => {
                      const selected = farmerForm.crops.includes(crop.key)
                      return (
                        <Chip
                          key={crop.key}
                          label={isTelugu ? crop.te : crop.en}
                          onClick={() => handleFarmerCropToggle(crop.key)}
                          sx={{
                            bgcolor: selected ? "rgba(34, 197, 94, 0.25)" : "rgba(255, 255, 255, 0.05)",
                            color: selected ? "#86efac" : "rgba(255, 255, 255, 0.8)",
                            border: selected ? "1px solid #4ade80" : "1px solid rgba(255, 255, 255, 0.12)",
                            fontWeight: selected ? 700 : 500,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              bgcolor: selected ? "rgba(34, 197, 94, 0.35)" : "rgba(255, 255, 255, 0.12)",
                            },
                          }}
                        />
                      )
                    })}
                  </Box>

                  {/* Services Needed */}
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#ffffff", mb: 1 }}>
                    {isTelugu ? "మీకు అవసరమైన సేవలు:" : "Services You Need:"}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {serviceOptions.map((svc) => {
                      const selected = farmerForm.servicesNeeded.includes(svc.key)
                      return (
                        <Chip
                          key={svc.key}
                          label={isTelugu ? svc.te : svc.en}
                          onClick={() => handleFarmerServiceToggle(svc.key)}
                          sx={{
                            bgcolor: selected ? "rgba(34, 197, 94, 0.25)" : "rgba(255, 255, 255, 0.05)",
                            color: selected ? "#86efac" : "rgba(255, 255, 255, 0.8)",
                            border: selected ? "1px solid #4ade80" : "1px solid rgba(255, 255, 255, 0.12)",
                            fontWeight: selected ? 700 : 500,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              bgcolor: selected ? "rgba(34, 197, 94, 0.35)" : "rgba(255, 255, 255, 0.12)",
                            },
                          }}
                        />
                      )
                    })}
                  </Box>
                </Box>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  endIcon={<Send size={18} />}
                  sx={{
                    py: 1.5,
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                    color: "#051c0f",
                    fontWeight: 800,
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    letterSpacing: "0.02em",
                    boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.5)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 30px -5px rgba(34, 197, 94, 0.65)",
                    },
                  }}
                >
                  {isTelugu ? "రైతుగా నమోదు పూర్తి చేయండి" : "Submit Farmer Registration"}
                </Button>
              </Stack>
            ) : (
              /* ================== SERVICE PROVIDER REGISTRATION FORM ================== */
              <Stack spacing={3.5}>
                {/* Step 1: Provider Details */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "18px",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        bgcolor: "#4ade80",
                        color: "#05180c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      1
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
                      {isTelugu ? "సర్వీస్ ప్రొవైడర్ వివరాలు" : "Service Provider Details"}
                    </Typography>
                  </Stack>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "ప్రొవైడర్ / యజమాని పూర్తి పేరు *" : "Provider / Owner Full Name *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder="Owner Name"
                        value={providerForm.fullName}
                        onChange={(e) => setProviderForm({ ...providerForm, fullName: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "వ్యాపార / ఏజెన్సీ పేరు *" : "Business / Agency Name *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder="e.g. Sri Balaji Agri Services"
                        value={providerForm.businessName}
                        onChange={(e) => setProviderForm({ ...providerForm, businessName: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "మొబైల్ ఫోన్ నంబర్ *" : "Mobile Phone Number *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder="10 digit phone number"
                        value={providerForm.phone}
                        onChange={(e) => setProviderForm({ ...providerForm, phone: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "అనుభవం (సంవత్సరాలలో)" : "Experience (Years)"}
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="e.g. 5 Years"
                        value={providerForm.experienceYears}
                        onChange={(e) => setProviderForm({ ...providerForm, experienceYears: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Step 2: Equipment & Services Offered */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "18px",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        bgcolor: "#4ade80",
                        color: "#05180c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      2
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
                      {isTelugu ? "అందుబాటులో ఉన్న యంత్రాలు & సేవలు" : "Available Equipment & Services"}
                    </Typography>
                  </Stack>

                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#ffffff", mb: 1 }}>
                    {isTelugu ? "మీ వద్ద ఉన్న పరికరాలు / సేవలు ఎంచుకోండి:" : "Select Equipment / Services You Provide:"}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2.5 }}>
                    {providerEquipOptions.map((eq) => {
                      const selected = providerForm.equipmentTypes.includes(eq.key)
                      return (
                        <Chip
                          key={eq.key}
                          label={isTelugu ? eq.te : eq.en}
                          onClick={() => handleProviderEquipToggle(eq.key)}
                          sx={{
                            bgcolor: selected ? "rgba(34, 197, 94, 0.25)" : "rgba(255, 255, 255, 0.05)",
                            color: selected ? "#86efac" : "rgba(255, 255, 255, 0.8)",
                            border: selected ? "1px solid #4ade80" : "1px solid rgba(255, 255, 255, 0.12)",
                            fontWeight: selected ? 700 : 500,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              bgcolor: selected ? "rgba(34, 197, 94, 0.35)" : "rgba(255, 255, 255, 0.12)",
                            },
                          }}
                        />
                      )
                    })}
                  </Box>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "యంత్రాల / వాహనాల సంఖ్య" : "Total Machines / Units"}
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        placeholder="e.g. 2"
                        value={providerForm.machineCount}
                        onChange={(e) => setProviderForm({ ...providerForm, machineCount: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "సేవ అందించే ప్రాంతాలు / మండలాలు *" : "Operating Mandals / Districts *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder="e.g. Guntur, Bapatla, Ongole"
                        value={providerForm.serviceAreas}
                        onChange={(e) => setProviderForm({ ...providerForm, serviceAreas: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Step 3: Location Details */}
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "18px",
                    bgcolor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        bgcolor: "#4ade80",
                        color: "#05180c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      3
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
                      {isTelugu ? "ప్రధాన కార్యాలయ చిరునామా" : "Headquarters Address"}
                    </Typography>
                  </Stack>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "జిల్లా *" : "District *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder="District"
                        value={providerForm.district}
                        onChange={(e) => setProviderForm({ ...providerForm, district: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "మండలం / పట్టణం *" : "Mandal / City *"}
                      </Typography>
                      <TextField
                        required
                        fullWidth
                        size="small"
                        placeholder="Mandal / City"
                        value={providerForm.mandal}
                        onChange={(e) => setProviderForm({ ...providerForm, mandal: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", mb: 0.5, display: "block" }}>
                        {isTelugu ? "గ్రామం / కాలనీ" : "Village / Area"}
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="Village"
                        value={providerForm.village}
                        onChange={(e) => setProviderForm({ ...providerForm, village: e.target.value })}
                        sx={inputStyle}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  endIcon={<Send size={18} />}
                  sx={{
                    py: 1.5,
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                    color: "#051c0f",
                    fontWeight: 800,
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    letterSpacing: "0.02em",
                    boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.5)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 30px -5px rgba(34, 197, 94, 0.65)",
                    },
                  }}
                >
                  {isTelugu ? "సేవా ప్రదాతగా నమోదు పూర్తి చేయండి" : "Submit Provider Registration"}
                </Button>
              </Stack>
            )}
          </form>
        </Paper>
      </Container>

      {/* Success Modal */}
      <Dialog
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        maxWidth="xs"
        fullWidth
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(10px)",
            },
          },
        }}
        sx={{
          "& .MuiDialog-paper": {
            bgcolor: "transparent",
            backgroundImage: "none",
            boxShadow: "none",
            overflow: "visible",
            m: { xs: 2, sm: "auto" },
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "24px",
              background:
                "linear-gradient(145deg, rgba(14, 28, 19, 0.95) 0%, rgba(6, 16, 10, 0.98) 100%)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(74, 222, 128, 0.4)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 50px rgba(34, 197, 94, 0.3)",
              p: { xs: 3, sm: 4 },
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <IconButton
              onClick={() => setSuccessOpen(false)}
              sx={{
                position: "absolute",
                top: 14,
                right: 14,
                color: "rgba(255, 255, 255, 0.7)",
                bgcolor: "rgba(255, 255, 255, 0.08)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)", color: "#ffffff" },
              }}
            >
              <X size={16} />
            </IconButton>

            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                bgcolor: "rgba(34, 197, 94, 0.2)",
                border: "2px solid #4ade80",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
                boxShadow: "0 0 25px rgba(74, 222, 128, 0.5)",
              }}
            >
              <CheckCircle size={36} color="#4ade80" />
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: "#ffffff" }}>
              {isTelugu ? "నమోదు విజయవంతమైంది!" : "Registration Successful!"}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 2.5, lineHeight: 1.5 }}
            >
              {isTelugu
                ? "మీ వివరాలు నమోదు చేయబడ్డాయి. మా ప్రతినిధి త్వరలోనే మిమ్మల్ని సంప్రదిస్తారు."
                : "Your registration details have been submitted. Our field team will contact you shortly."}
            </Typography>

            <Box
              sx={{
                p: 1.5,
                borderRadius: "12px",
                bgcolor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                mb: 3,
              }}
            >
              <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)", display: "block" }}>
                {isTelugu ? "రిజిస్ట్రేషన్ ఐడీ (Application ID)" : "Application Registration ID"}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#4ade80", letterSpacing: "0.05em" }}>
                {submittedRegId}
              </Typography>
            </Box>

            <Stack spacing={1.5}>
              <Button
                variant="contained"
                onClick={() => setSuccessOpen(false)}
                fullWidth
                sx={{
                  py: 1.2,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                  color: "#05180c",
                  fontWeight: 800,
                  "&:hover": { background: "#4ade80" },
                }}
              >
                {isTelugu ? "సరే (Done)" : "Done"}
              </Button>

              <Button
                component={RouterLink}
                to="/"
                onClick={() => setSuccessOpen(false)}
                fullWidth
                sx={{
                  py: 1,
                  borderRadius: "12px",
                  color: "rgba(255, 255, 255, 0.8)",
                  textTransform: "none",
                  "&:hover": { color: "#ffffff", bgcolor: "rgba(255, 255, 255, 0.08)" },
                }}
              >
                {isTelugu ? "హోమ్ పేజీకి తిరిగి వెళ్లండి" : "Return to Home Page"}
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

// Reusable Input Field Styling
const inputStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#ffffff",
    bgcolor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    transition: "all 0.2s ease",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.15)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(74, 222, 128, 0.4)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4ade80",
      boxShadow: "0 0 10px rgba(74, 222, 128, 0.3)",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "0.9rem",
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.45)",
      opacity: 1,
    },
  },
  "& .MuiSelect-icon": {
    color: "rgba(255, 255, 255, 0.7)",
  },
}
