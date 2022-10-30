/*

import { useState } from "react";
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const HomePage = () => {
    const [value, setValue] = useState(0);
    return (
        <div className="home-page">
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Paper>
        </div>
    );
}
export default HomePage; */