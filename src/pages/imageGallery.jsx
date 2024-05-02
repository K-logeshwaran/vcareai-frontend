import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/gallery/images`);
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const imageData = await response.json();
                console.log(imageData);
                setImages(imageData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems
        :"center",padding:"1rem 0"}}>
            <Typography variant='h3' paddingBottom={"1rem"}>Image Gallery</Typography>
            <Grid   justifyContent={"center"} alignItems={"center"} maxWidth={"90%"} container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>

                {images.map((image, index) => (

                    <Grid item xs={12} md={4} lg={4} key={index} >
                        <img width={"100%"} src={image.imageURL} alt={image.imageDescription} />
                        <div className="image-details" >
                            <h2>{image.eventName}</h2>
                            <p>{image.imageDescription}</p>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ImageGallery;
