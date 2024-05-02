import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AdminBlogCard({ title, cover_image, caption, created_at, by, id, handleState }) {
    const deleteBlog = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blog/content/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error deleting blog');
            }

            const data = await response.json();
            console.log('Blog deleted successfully:', data);
            toast.success("Blog Delection Success")

            handleState()

        } catch (error) {
            console.error('Error deleting blog:', error.message);
            toast.error("BlogDelection Failed");
            // Handle error
        }
    };

 
   const navigate = useNavigate();

    return (
        <Card >
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={cover_image || "https://mui.com/static/images/cards/contemplative-reptile.jpg"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {
                        caption || `Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica`
                    }

                </Typography>
                <Box marginTop={'.5rem'} display={"flex"} justifyContent={'space-between'}>
                    <Typography variant="subtitle2" color="text.secondary">
                        {by}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        {created_at}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions
                disableSpacing
                sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-start",
                    // 👇 Edit padding to further adjust position
                    pr: 5,
                }}
            >
                <Button onClick={()=>navigate("/admin/blog/edit/"+id)} variant='contained' size="small">Edit <Edit /> </Button>
                <Button sx={{ backgroundColor: "red" }} onClick={deleteBlog} variant='contained' size="small">Delete <Delete /> </Button>

            </CardActions>
        </Card>
    );
}