
import { Box, Typography } from "@mui/material";
export default function ValueCard({ title, p,imgLink }) {
    return (
        <Box component={"div"} display={"flex"} flexDirection={"column"}  alignItems={"center"} gap={1}>
            <Box component={"div"} width={"15%"} >
                <img src={imgLink||"https://www.svgrepo.com/show/216587/quality.svg"} alt="data" width={"100%"} />
            </Box>
            <Typography variant="h5" fontWeight={"bold"} component={'p'}>{title}</Typography>
            <Typography width={"90%"} 
            
            variant="subtitle2" textAlign={"center"} component={'p'}>{p}</Typography>
        </Box>
    );
}