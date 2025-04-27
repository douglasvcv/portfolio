import { AppBar, Button, Menu, MenuItem, styled, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../../theme";
import { useState } from "react";

const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = ()=>{
        setAnchorEl(null)
    }
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToobar>
                <Button
                    color={theme.palette.primary.contrastText}
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </Button>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </AppBar>
        </>
    )
}

export default NavBar