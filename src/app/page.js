import { Grid2 } from "@mui/material";
import Navbar from "@/components/Navbar";
import CardsContainer from "@/components/CardsContainer";
import RightContainer from "@/components/RightContainer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Grid2
        container
        spacing={2}
        sx={{
          maxWidth: "1100px",
          margin: "100px auto",
          padding: "10px",
          position: "relative",
        }}
      >
        {/* CARDS CONTIANER */}
        <CardsContainer />

        {/* RIGHT CONTAINER */}
        <RightContainer />
      </Grid2>
    </div>
  );
}
