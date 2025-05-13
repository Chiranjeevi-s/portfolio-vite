import { Box, Typography } from "@mui/material";
import { images } from "../components/images";

interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", height: "80%" }}
      >
        <div>
          <Typography sx={{ color: "white" }}>
            <h1>Portfolio</h1>
          </Typography>
        </div>
        <div>
          <img
            alt="profie"
            src={images.my_photo}
            style={{ height: "500px", width: "500px" }}
          />
        </div>
      </Box>
    </>
  );
};

export default LandingPage;
