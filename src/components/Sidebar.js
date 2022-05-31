// import React from 'react'
// import './Sidebar.css';
// import { Link } from 'react-router-dom';
// import Searchbar from './Customer_search';
// import Profilecard from './Profilecard';
// import CustumerGrid from './customer-grid'
// import Custumeradd from './Customer-add'
// import {
//   Button,
//   Grid,
//   Header,
//   Image,
//   Menu,
//   Segment,
//   Sidebar,
//   Divider
// } from 'semantic-ui-react'

// const HorizontalSidebar = ({ animation, direction, visible }) => (
//   <Sidebar
//     as={Segment}
//     animation={animation}
//     direction={direction}
//     visible={visible}
//   >
//     <Grid textAlign='center'>
//       <Grid.Row columns={1}>
//         <Grid.Column>
//           <Header as='h3'>New Content Awaits</Header>
//         </Grid.Column>
//       </Grid.Row>
//       <Grid.Row columns={3}>
//         <Grid.Column>
//           <Image src='/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='/images/wireframe/media-paragraph.png' />
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </Sidebar>
// )

// const VerticalSidebar = ({ animation, direction, visible }) => (
//   <Sidebar
//     as={Menu}
//     animation={animation}
//     direction={direction}
//     icon='labeled'
//     // inverted
//     vertical
//     visible={visible}
//     width='thin'
//   >
//     <Profilecard/>

//     <div className="item">
//       <label className="setup-labl">Setup</label>
//       <div className="menu">
//         <Link className="item" to="/customer">
//           <div>
//             Customer
//           </div>
//         </Link>
//       </div>
//       <div className="menu">
//         <Link className="item">
//           <div>
//             Broker
//           </div>
//         </Link>
//       </div>
//       <div className="menu">
//         <Link className="item">
//           <div>
//             Freight Forwarder
//           </div>
//         </Link>
//       </div>
//       <div className="menu">
//         <Link className="item">
//           <div>
//             Invoices
//           </div>
//         </Link>
//       </div>
//     </div>
//     <div className="item">
//     <label className="setup-labl">Updates</label>
//       <div className="menu">
//         <Link className="item">
//           <div>Location</div>
//         </Link>
//         <Link className="item">
//           <div>SKU</div>
//         </Link>
//       </div>
//     </div>
//     <div className="item">
//     <label className="setup-labl">Statements</label>
//       <div className="menu">
//         <Link className="item">
//           <div><i className="cogs icon" />Settings</div>
//         </Link>
//         <Link className="item">
//           <div><i className="users icon" />Team</div>
//         </Link>
//       </div>
//     </div>
    
    
//   </Sidebar>
// )

// function exampleReducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_ANIMATION':
//       return { ...state, animation: action.animation, visible: !state.visible }
//     case 'CHANGE_DIMMED':
//       return { ...state, dimmed: action.dimmed }
//     case 'CHANGE_DIRECTION':
//       return { ...state, direction: action.direction, visible: false }
//     default:
//       throw new Error()
//   }
// }

// function SidebarExampleTransitions(props) {
//   const [state, dispatch] = React.useReducer(exampleReducer, {
//     animation: 'overlay',
//     direction: 'left',
//     dimmed: false,
//     visible: false,
//   })

//   const { animation, dimmed, direction, visible } = state
//   const vertical = direction === 'bottom' || direction === 'top'

//   return (
//     <div>
     
//      <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
//         {vertical && (
//           <HorizontalSidebar
//             animation={animation}
//             direction={direction}
//             visible={visible}
//           />
//         )}
//         {!vertical && (
//           <VerticalSidebar
//             animation={animation}
//             direction={direction}
//             visible={visible}
//           />
//         )}

//         <Sidebar.Pusher dimmed={dimmed && visible}>
//           <Segment basic>
//             <Header as='p'><Button className="menu-btn"
//         disabled={vertical}
//         onClick={() =>
//           dispatch({ type: 'CHANGE_ANIMATION', animation: 'uncover' })
//         }
//       >
//         <i class="align left icon"></i>
//       </Button>
//       <label className="custu-head">Customer</label>
//       <Searchbar/>
//       <Divider vertical><Custumeradd/></Divider>
//       {props.children}
      
//       </Header>
//           </Segment>
//           <CustumerGrid/>
//         </Sidebar.Pusher>
//       </Sidebar.Pushable>
      
//     </div>
//   )
// }

// export default SidebarExampleTransitions
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CustumerGrid from './customer-grid'
import Searchbar from './Customer_search';
import Profilecard from './Profilecard';
import Custumeradd from './Customer-add';
import './Sidebar.css';
import { Link } from 'react-router-dom';

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div id="sidebar">
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
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
          <Typography variant="h6" noWrap component="div">
          <label className="custu-head">Customer</label>
           <Searchbar/>
           </Typography>
          <Custumeradd/>
        </Toolbar>
      </AppBar>
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
        <Profilecard/>
          <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        <List>
        <label className="setup-labl">Setup</label>
          {['Customer', 'Broker', 'Freight Forwarder', 'Invoices'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <List>
        <label className="setup-labl">Updates</label>
          {['Location', 'SKU'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <List>
        <label className="setup-labl">Statements</label>
          {['CBP Daily Statement', 'CBP Monthly Statement'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
     

  
      <Main open={open}>
        <DrawerHeader />
        <CustumerGrid/>
      </Main>
    </Box>
    
    </div>
  );
}