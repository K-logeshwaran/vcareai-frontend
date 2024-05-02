import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
// import Button from "@material-ui/Button";
// import Menu from "@material-ui/Menu";
// import MenuItem from "@material-ui/MenuItem";

/**
 * ProductMenu component.
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the menu.
 * @param {string[]} props.values - An array of strings representing menu items.
 */
function ProductMenu({ title, values }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

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
        {values.map((v, i) => <MenuItem onClick={handleClose}>{v}</MenuItem>)}

        {/* <MenuItem onClick={handleClose}>Book keeping </MenuItem>
        <MenuItem onClick={handleClose}>GST</MenuItem>
        <MenuItem onClick={handleClose}>Client management - live </MenuItem>
        <MenuItem onClick={handleClose}>Work management - live</MenuItem>
        <MenuItem onClick={handleClose}>TDs</MenuItem> */}
      </Menu>
    </div>
  );
}

export default ProductMenu;