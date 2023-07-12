import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { LogIn, User } from "react-feather";

const NavigationBar = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <LogoImage
          src={
            "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f4d02e1518a63b6e0eaf5f53704c3d7f/givepulse.png"
          }
          alt="Logo"
        />
      </ImageContainer>

      <NavigationLinksContainer>
        <Link to="home">Home</Link>
        <Link to="home">Shop</Link>
        <Link to="home">About Us</Link>
        <Link to="home">Contact Us</Link>
      </NavigationLinksContainer>
      <IconsContainer>
        <User />
        <LogIn />
      </IconsContainer>
    </Wrapper>
  );
};

export default NavigationBar;

const IconsContainer = styled("div")({
  display: "flex",
  gap: "1rem",
});

const Wrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  placeItems: "center",
  padding: "1rem",
});

const ImageContainer = styled("div")({
  height: "50px",
});

const LogoImage = styled("img")({
  height: "100%",
  width: "100%",
});

const NavigationLinksContainer = styled("div")({
  display: "flex",
  gap: "1rem",
});
