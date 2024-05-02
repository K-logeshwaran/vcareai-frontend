import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const FilesDisplay = ({ userId }) => {
    const [files, setFiles] = useState(null);
    const [loading, setLoading] = useState(true);
    const p = useParams();
    

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/${p.email}/files`);
                if (!response.ok) {
                    throw new Error('Failed to fetch files');
                }
                const data = await response.json();
                setFiles(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching files:', error);
                setLoading(false);
            }
        };

        fetchFiles();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!files) {
        return <div>No files found for this user.</div>;
    }

    return (
        <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems
                : "center", padding: "1rem 0"
        }}>
            <Typography variant='h3' paddingBottom={"1rem"}>Files</Typography>

            <Grid justifyContent={"center"} alignItems={"center"} maxWidth={"90%"} container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
                {Object.entries(files).map(([fileName, fileInfo]) => (
                    <Grid item xs={12} md={4} lg={4} key={fileName} >
                        <strong>{fileName}:</strong> ({fileInfo.contentType})
                        <br />
                        <img src={`data:${fileInfo.contentType};base64,${fileInfo.data}`} alt={fileName} width={"100%"} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default FilesDisplay;