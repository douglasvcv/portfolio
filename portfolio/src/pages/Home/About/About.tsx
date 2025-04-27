import { Container, styled } from "@mui/material"
import theme from "../../../theme";

const About = ()=> {
  
  const StyledAbout = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    margin: "0px",
    display:"flex",
    alignItems:"center"
}))
    return (
      <>
       <StyledAbout>
        <Container>
          
        </Container>
       </StyledAbout>
      </>
    )
  }
  
  export default About