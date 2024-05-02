import md from "markdown-it";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

function UserViewBlog() {
    let { id } = useParams();
    const [value, setValue] = useState({content:""});
    useEffect(() => {
        const getBlogById = async (id) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blog/get/${id}`);

                if (!response.ok) {
                    throw new Error('Error retrieving blog');
                }

                const blog = await response.json();
                console.log('Blog retrieved successfully:', blog);
                setValue(blog);
                return blog;
            } catch (error) {
                console.error('Error retrieving blog:', error.message);
                // Handle error
            }
        };
        getBlogById(id);
    }, []);

    return (<Box>
        <article

            dangerouslySetInnerHTML={{ __html: md().render(value.content) }}
        />
    </Box>);
}

export default UserViewBlog;