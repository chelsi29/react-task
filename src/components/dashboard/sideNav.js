import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppsIcon from '@mui/icons-material/Apps';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import WebIcon from '@mui/icons-material/Web';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TourIcon from '@mui/icons-material/Tour';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1), 
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function SideNav() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate(); 
  
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
   
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem disablePadding onClick={()=>navigate('/apps')} >
              <ListItemButton>
                <ListItemIcon>
                   <AppsIcon />
                </ListItemIcon>
                <ListItemText primary='App'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <BusinessCenterIcon />
                </ListItemIcon>
                <ListItemText primary='Ecommerce'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary='Analytics'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText primary='Banking'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <FlightTakeoffIcon />
                </ListItemIcon>
                <ListItemText primary='Booking'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary='File'/>
              </ListItemButton>
            </ListItem>
        </List>  
        <Divider />
        <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary='User'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={()=>navigate("/Product")}>
              <ListItemButton>
                <ListItemIcon>
                   <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary='Product'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <ProductionQuantityLimitsIcon />
                </ListItemIcon>
                <ListItemText primary='Order'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText primary='Invoice'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <WebIcon />
                </ListItemIcon>
                <ListItemText primary='Blog'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <WorkOutlineIcon/>
                </ListItemIcon>
                <ListItemText primary='Job'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <TourIcon />
                </ListItemIcon>
                <ListItemText primary='Tour'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <FilePresentIcon/>
                </ListItemIcon>
                <ListItemText primary='File Manager'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <ChatIcon/>
                </ListItemIcon>
                <ListItemText primary='Mail'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <CalendarMonthIcon/>
                </ListItemIcon>
                <ListItemText primary='Chat'/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   <ViewKanbanIcon/>
                </ListItemIcon>
                <ListItemText primary='Calender'/>
              </ListItemButton>
            </ListItem>
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      
      </Main>
    </Box>
  );
}

export default SideNav;