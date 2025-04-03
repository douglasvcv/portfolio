import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {


    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        fontSize:""
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar