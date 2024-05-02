import MDEditor, { selectWord } from "@uiw/react-md-editor";
// No import is required in the WebPack.
import "@uiw/react-md-editor/markdown-editor.css";
// No import is required in the WebPack.
import "@uiw/react-markdown-preview/markdown.css";
import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";





const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

function BlogEditor() {
    const [value, setValue] = useState(mkdStr);
    const [formData, setFormData] = useState({
        title: 'default title',
        uploaded_by: '',
        time: '',
        cover_image: '',
        caption: '',
        category: '',
        meta_desc: '',
        meta_keywords: '',
        content: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const updateCoverImgLink = (val) => {
        setFormData({
            ...formData,
            cover_image: val,
        });

    };

    const uploadCoverImage = async (e) => {
        console.log(e.target?.files[0]);
        let file = e.target?.files[0];
        const fD = new FormData();
        fD.append('image', file);

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blog/upload/${formData.title}`, {
                method: 'POST',
                body: fD
            });

            if (!response.ok) {
                throw new Error('Error uploading file');
            }

            const link = await response.text();
            console.log('File uploaded successfully:', link);
            updateCoverImgLink(link);
            toast.success("Cover Image added !")

            return link;
        } catch (error) {
            console.error('Error uploading file:', error.message);
            toast.error("cover image upload failed")
            // Handle error
        }
    }

    const publishBlog = async () => {
        try {
            formData.content=value;
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blog/upload`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error uploading blog');
            }

            const data = await response.json();
            console.log('Blog uploaded successfully:', data);
            toast.success("Blog published")
            return data;
        } catch (error) {
            console.error('Error uploading blog:', error.message);
            toast.error("publication failed !")
            // Handle error
        }
    };

    return (
        <Box >

            <Grid container spacing={2} paddingTop={'1.5rem'}>
                <Grid item xs={4}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Uploaded By"
                        variant="outlined"
                        fullWidth
                        name="uploaded_by"
                        value={formData.uploaded_by}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Time"
                        variant="outlined"
                        fullWidth
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        label="Caption"
                        variant="outlined"
                        fullWidth
                        name="caption"
                        value={formData.caption}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Category"
                        variant="outlined"
                        fullWidth
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Meta Description"
                        variant="outlined"
                        fullWidth
                        name="meta_desc"
                        value={formData.meta_desc}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Meta Keywords"
                        variant="outlined"
                        fullWidth
                        name="meta_keywords"
                        value={formData.meta_keywords}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        component="label"
                        fullWidth

                    >
                        Add Cover
                        <input
                            type="file"
                            hidden
                            onChange={uploadCoverImage}
                        />
                    </Button>
                </Grid>

                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        component="button"
                        fullWidth
                        onClick={publishBlog}

                    >
                        Publish
                    </Button>
                </Grid>

            </Grid>

            <Box data-color-mode="light" marginTop={'1rem'}>
                <MDEditor height={"85vh"} value={value} onChange={setValue} />
            </Box>
            <ToastContainer />
        </Box>
    );
}

export default BlogEditor;