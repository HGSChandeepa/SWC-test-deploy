import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
        maxWidth: 320,
        transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.2s ease-in-out",
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardActionArea>
        {!isSmallScreen && (
          <CardMedia
            component="img"
            height="140"
            image={imageURL}
            alt="green iguana"
            content="cover"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
