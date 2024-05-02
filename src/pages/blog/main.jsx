import { Box, Grid } from "@mui/material";
import BlogCard from "../../components/blog_card";
import { useEffect, useState } from "react";

function Blogs() {

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
    }, []);
    const [blogs, setBlogs] = useState([]);
    return (
        <Box padding={"2rem 0"} display={"flex"} justifyContent={"center"} alignContent={"center"}>
            <Grid justifyContent={"center"} alignItems={"center"} maxWidth={"90%"} container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {blogs.map((b) => <Grid item xs={12} md={6} lg={6}>
                    <BlogCard
                        caption={b.caption}
                        title={b.title}
                        cover_image={b.cover_image}
                        created_at={b.createdAt}
                        by={b.uploaded_by}
                        id={b._id}
                    />
                </Grid>)}

            </Grid>
        </Box>
    );
}

export default Blogs;

/*
[
    {
        "_id": "65e496eb1beff2d8c92826f7",
        "title": "first blog",
        "uploaded_by": "loki",
        "time": "3",
        "cover_image": "http://localhost:3134/blog/coverImage/first blog.jpeg",
        "caption": "none",
        "category": [
            "noe"
        ],
        "meta_desc": "jjjj",
        "meta_keywords": [
            "kkkk"
        ],
        "content": "\n# Markdown Editor\n\n---\n\n**Hello world!!!**\n\n[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)\n\n```javascript\nimport React from \"react\";\nimport ReactDOM from \"react-dom\";\nimport MEDitor from '@uiw/react-md-editor';\n\n```\n",
        "views": 0,
        "createdAt": "2024-03-03T15:27:39.862Z",
        "__v": 0
    }
]
 */