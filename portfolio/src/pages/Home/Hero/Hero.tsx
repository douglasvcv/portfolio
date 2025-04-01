import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Img from "../../../assets/images/imagem aleatoria para portfolio.avif"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height:"100vh",
        margin:"0px"
    }))
    const StyledImage = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
        <>
            <StyledHero>
                <Container >

                <Grid container spacing={2}>
                    <Grid size= {{xs:12, md:4}}>
                        <StyledImage src={Img} />
                    </Grid>
                    <Grid size= {{xs:12, md:8}}>
                        <Typography color="primary" variant="h1" textAlign="center">Douglas Vitor</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">I'm a Web Developer </Typography>
                        <Button>
                            <DownloadIcon/>
                            Download CV
                            </Button>
                        <Button>
                            <MailOutlineIcon/>
                            Contact me
                            </Button>
                    </Grid>
                </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero