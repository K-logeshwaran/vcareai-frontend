import { Box, Grid } from "@mui/material";
import BlogCard from "./admin_bg_card";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function ViewBlog() {
    const [isStateCh,setIsStateCh]=useState(false);
    const useIsStateCh =()=>setIsStateCh(!isStateCh);
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blog/get`);

                if (!response.ok) {
                    throw new Error('Error retrieving blogs');
                }

                const data = await response.json();
                console.log('Blogs retrieved successfully:', data);
                setBlogs(data)
                return data;
            } catch (error) {
                console.error('Error retrieving blogs:', error.message);
                // Handle error
            }
        };
        getBlogs()
    }, [isStateCh]);
    const [blogs, setBlogs] = useState([]);
    return (
        <Box padding={"2rem 0"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
            <Grid justifyContent={"center"} alignItems={"center"} maxWidth={"90%"} container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {blogs.map((b) => <Grid item xs={6}>
                    <BlogCard
                        caption={b.caption}
                        title={b.title}
                        cover_image={b.cover_image}
                        created_at={b.createdAt}
                        by={b.uploaded_by}
                        id={b._id}
                        handleState ={useIsStateCh}
                    />
                </Grid>)}
            </Grid>
            <ToastContainer/>
        </Box>);
}

export default ViewBlog;