import MDEditor, { selectWord } from "@uiw/react-md-editor";
// No import is required in the WebPack.
import "@uiw/react-md-editor/markdown-editor.css";
// No import is required in the WebPack.
import "@uiw/react-markdown-preview/markdown.css";
import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from 'react-router-dom';





function EditBlog() {
    // get id from parms 
    let { id } = useParams();
    const [value, setValue] = useState("");
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
    const getBlogById = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blog/get/${id}`);

            if (!response.ok) {
                throw new Error('Error retrieving blog');
            }

            const blog = await response.json();
            console.log('Blog retrieved successfully:', blog);
            setValue(blog.content);
            setFormData(blog);
            return blog;
        } catch (error) {
            console.error('Error retrieving blog:', error.message);
            // Handle error
        }
    };

    useEffect(() => {
        getBlogById(id);
    }, []);

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


    const updateBlog = async (id) => {
        try {
            console.log(value);
            formData.content=value
            console.log("lll",formData.content);
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blog/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error updating blog');
            }

            const data = await response.json();
            console.log('Blog updated successfully:', data);
            console.log(formData.content);
            toast.success("Blog updated!")
            return data;
        } catch (error) {
            console.error('Error updating blog:', error.message);
            toast.error("Blog update failed 😔")
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
                        onClick={()=>updateBlog(id)}

                    >
                        Update
                    </Button>
                </Grid>

            </Grid>

            <Box data-color-mode="light" marginTop={'1rem'}>
                <MDEditor height={"85vh"} value={value}  onChange={(e)=>{
                    console.log(e);
                    //formData.content+=e;
                    setValue(e)
                } }/>
            </Box>
            <ToastContainer />
        </Box>
    );
}

export default EditBlog;