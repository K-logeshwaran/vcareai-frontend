import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";


/**
 * ProductMenu component.
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the menu.
 * @param {string[]} props.values - An array of strings representing menu items.
 */
function SubMenu({ title, values,parentEl }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        console.log(event.currentTarget.innerText);
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
        //parentEl(null);
    }

    return (
        <MenuItem>
            <Button
                aria-owns={anchorEl ? "sub-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                sx={{color: '#000', display: 'block' }}
            >
                {title}
            </Button>
            <Menu
                id="sub-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                {/* 	Book keeping 
	GST 
	Client management - live 
	Work management - live 
	TDs  */}
                {values.map((v, i) => <MenuItem onClick={handleClose}>{v}</MenuItem>)}

                {/* <MenuItem onClick={handleClose}>Book keeping </MenuItem>
        <MenuItem onClick={handleClose}>GST</MenuItem>
        <MenuItem onClick={handleClose}>Client management - live </MenuItem>
        <MenuItem onClick={handleClose}>Work management - live</MenuItem>
        <MenuItem onClick={handleClose}>TDs</MenuItem> */}
            </Menu>
        </MenuItem>
    );
}




function ServiceMenu({ title, values }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }
    console.log(values);
    return (
        <div>
            <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
            >
                {title}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                {/* 	Book keeping 
	GST 
	Client management - live 
	Work management - live 
	TDs  */}
                {/* {values.map((v, i) => <MenuItem onClick={handleClose}>{v}</MenuItem>)} */}
                {values.map((v, i) => {
                    // alert(v.title);
                    return <SubMenu
                        title={v.title}
                        values={v.values}
                        parentEl ={setAnchorEl}
                    />
                })}

                {/* <MenuItem onClick={handleClose}>Book keeping </MenuItem>
        <MenuItem onClick={handleClose}>GST</MenuItem>
        <MenuItem onClick={handleClose}>Client management - live </MenuItem>
        <MenuItem onClick={handleClose}>Work management - live</MenuItem>
        <MenuItem onClick={handleClose}>TDs</MenuItem> */}
            </Menu>
        </div>
    );
}

export default ServiceMenu;