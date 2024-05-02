import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import InputFile from '../../components/fileInp';

const ImageUploadPage = () => {
  const [eventName, setEventName] = useState('');
  const [imageDescription, setImageDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'eventName') {
      setEventName(value);
    } else if (name === 'imageDescription') {
      setImageDescription(value);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile || !eventName || !imageDescription) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('eventName', eventName);
    formData.append('imageDescription', imageDescription);

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/gallery/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Error uploading image');
      }

      setUploadStatus('Image uploaded successfully');
    } catch (error) {
      console.error(error);
      setUploadStatus('Error uploading image');
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
          Image Upload
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="EventName"
            type="text" name="eventName" value={eventName} onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Image Description"
            type="text" name="imageDescription" value={imageDescription} onChange={handleInputChange}
          />
          <InputFile title={"image"} fileHandler={handleFileChange} width={"100%"} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            upload
          </Button>

        </Box>
        {uploadStatus && <p>{uploadStatus}</p>}
      </Box>
    </Container>
  );
};

export default ImageUploadPage;

/*
<div>
            <label>Event Name:</label>
            <input type="text" name="eventName" value={eventName} onChange={handleInputChange} />
          </div>
          <div>
            <label>Image Description:</label>
            <input type="text" name="imageDescription" value={imageDescription} onChange={handleInputChange} />
          </div>
          <div>
            <label>Choose Image:</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <button type="submit">Upload Image</button>
 */