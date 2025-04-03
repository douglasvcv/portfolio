import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Img from "../../../assets/images/imagem aleatoria para portfolio.avif"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import theme from "../../../theme";
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        margin: "0px",
        display:"flex",
        alignItems:"center"
    }))
    const StyledImage = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        zIndex:1,
        border:`1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box position={"relative"}>
                                <Box position={"absolute"} width={"130%"} top={-100} right={0}>
                                    <AnimatedBackground></AnimatedBackground>
                                </Box>
                            <Box position={"relative"} textAlign={"center"}>
                            <StyledImage src={Img}/>

                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Douglas Vitor</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Web Developer </Typography>
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} marginTop={"10px"} pt={3}>
                                <Grid size={{ xs: 12, md: 5 }} display={"flex"} justifyContent={"center"}>
                                    <StyledButton>
                                        <DownloadIcon />
                                        Download CV
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 5 }} display={"flex"} justifyContent={"center"}>
                                    <StyledButton>
                                        <MailOutlineIcon />
                                        Contact me
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero