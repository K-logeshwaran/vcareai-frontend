import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

const OPTIONS = {
    YOUTUBE_VIDEO: "youtube-link",
    PODCAST: "podcast-link"
}



export default function SignInEmb() {
    const [opt, setOpt] = React.useState('');
    const [link, setLink] = React.useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/link`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ link, type: opt }),
            });
            const data = await response.json();
            toast.success("Uploaded");
        } catch (error) {
            console.log(error);
            toast.error("errr");

        }
    };

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                padding={"2rem 0"}
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5">
                    Upload Embeded Link
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={opt}
                            label="Type"
                            onChange={(e) => setOpt(e.target.value)}
                        >
                            <MenuItem value={OPTIONS.YOUTUBE_VIDEO}>Video</MenuItem>
                            <MenuItem value={OPTIONS.PODCAST}>Podcast</MenuItem>

                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="link"
                        label="Link"
                        type="text"
                        id="link"
                        onChange={e => setLink(e.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        upload
                    </Button>

                </Box>
            </Box>
            <ToastContainer />

        </Container>

    );
}