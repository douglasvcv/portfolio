import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
}


const StyledButton: React.FC<StyledButtonProps> = ({children}) =>{

    const StyledButton = styled("button")(({theme})=>({
        backgroundColor:"transparent",
        border:`1px solid ${theme.palette.primary.contrastText}`,
        borderRadius:"5px",
        padding:"5px 15px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"8px",
        color:`${theme.palette.primary.contrastText}`,
        '&:hover':{
            backgroundColor:theme.palette.secondary.light
        }
    }))

    return (
    <>
    <StyledButton>
       {children}
    </StyledButton>
    
    </>
    )

}

export default StyledButton