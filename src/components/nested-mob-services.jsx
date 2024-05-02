import * as React from 'react';

import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


function NestedDropMb({ pages ,title}) {
    const [serviceopenIn, setServiceOpenIn] = React.useState(false);

    const handleServiceIn = () => {
        setServiceOpenIn(!serviceopenIn);
    };
    return (
        <>
            <ListItemButton onClick={handleServiceIn} >
                <ListItemText primary={title} sx={{paddingLeft:'1.5rem'}}/>
                {serviceopenIn ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={serviceopenIn} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        pages.map(pg => {
                            return (<ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary={pg} sx={{ paddingLeft: '3rem' }} />
                            </ListItemButton>)
                        })
                    }
                    {/* <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="P1" sx={{ paddingLeft: '3rem' }} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="P2" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="P3" />
                    </ListItemButton> */}
                </List>
            </Collapse>
        </>
    );
}

export default NestedDropMb;