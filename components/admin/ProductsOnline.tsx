import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";

type ProductCardProps = {
  onClick: () => void;
  title: string;
  description: string;
  imageURL: string;
};

export default function ProductCard({
  onClick,
  title,
  description,
  imageURL,
}: ProductCardProps) {
  const [hovered, setHovered] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 550,
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.1s ease-in-out",
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardActionArea>
        {!isSmallScreen && (
          <CardMedia
            component="img"
            height="50"
            image={imageURL}
            alt="green iguana"
            content="cover"
          />
        )}
        <CardContent>
          <Typography component="div">{title}</Typography>
        </CardContent>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="small"
              className="bg-red-600 px-3"
            >
              Delete
            </Button>
            <Button
              className=" bg-blue-500 px-4"
              variant="contained"
              size="small"
            >
              Dulpicate
            </Button>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
