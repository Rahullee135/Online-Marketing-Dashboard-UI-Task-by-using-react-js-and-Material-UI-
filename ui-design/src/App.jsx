import React from 'react';
import clsx from 'clsx';
import {alpha, makeStyles, useTheme,fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Bar, Line,Chart  } from 'react-chartjs-2'
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { defaults, Title } from 'chart.js';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import ListSharpIcon from '@material-ui/icons/ListSharp';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { borders } from '@material-ui/system';
import ava from './avatar/ava.png'
import { positions } from '@material-ui/system';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Window } from '@progress/kendo-react-dialogs';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { FlashOnRounded } from '@material-ui/icons';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';






const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
  inputRoot: {
    color: 'inherit',
  },
  root: {
    flexGrow: 1,
  },
  
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  paper: {
    height: 200,
    width: 250,
  },
  bare:{
    width:'150',
  },
  control: {
    padding: theme.spacing(2),
  },
  margin:{
    float:'right',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: "5em",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(100),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);



// const data = {
//   labels: ["", "", "", "", "", ""],
//   datasets: [
//     {
//       data: [99, 52, 67, 58, 9, 50],
//       backgroundColor: "red"
//     }
//   ]
// };



// var options= {
//   scales: {
//       xAxes: [{
//           gridLines: {
//               drawOnChartArea: false
//           }
//       }],
//       yAxes: [{
//           gridLines: {
//               drawOnChartArea: false
//           }
//       }]
//   }
// }



// const options = {
  
//   legend: {
//     display: false
//   },
//  scaleFontSize: 0,
//  gridLines :{
//    display: false,
//    drawBorder:false,
//  },
//   scales: {
//     xAxis: {
//       gridLineWidth: 0  ,              
//   },
//   yAxis: {
//       gridLineWidth: 0,
//       minorTickInterval: null,
//   },
   
//   }
// };



// window.onload = function() {

//   var ctx = document.getElementById("canvas").getContext("2d");

// var barChartData = {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//             label: 'Dataset 1',
//             backgroundColor: "rgba(151,187,205,0.5)",
//             data: [100,99,98,97,96,95,94]
//         }]
//     };
    
//   window.myBar = new Chart(ctx).Bar({
//       data: barChartData,
//       options: {
//           responsive: true,
//           scales: {
//             xAxes: [{
//               gridLines: {
//                 show: true
//               }
//             }],
//             yAxes: [{
//               gridLines: {
//                 show: false
//               }
//             }]
//           }
//       }
//   });

// }

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [spacing] = React.useState(2);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [setMobileMoreAnchorEl] = React.useState(null);
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const [show,setShow]=useState(true)
  const [windowStage, setWindowStage] = React.useState("MAXIMIZED");
  var incrementordecrement = 0;
  var colorcode="";
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleStageChange = e => {
    setWindowStage(e.state);
  };
  
  
  return (
  
    
   
    <div className={classes.root}>
      
      <CssBaseline />
      <AppBar
        position="fixed"
        color="white"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        
          <svg width="147" height="53" viewBox="0 0 147 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1" fill="white">
<path d="M35.8904 32.9877C35.8904 41.2954 29.1557 48.0301 20.848 48.0301C12.5404 48.0301 5.80566 41.2954 5.80566 32.9877C5.80566 24.68 12.5404 17.9453 20.848 17.9453C29.1557 17.9453 35.8904 24.68 35.8904 32.9877ZM11.597 32.9877C11.597 38.0969 15.7388 42.2387 20.848 42.2387C25.9573 42.2387 30.0991 38.0969 30.0991 32.9877C30.0991 27.8785 25.9573 23.7366 20.848 23.7366C15.7388 23.7366 11.597 27.8785 11.597 32.9877Z"/>
</mask>
<path d="M35.8904 32.9877C35.8904 41.2954 29.1557 48.0301 20.848 48.0301C12.5404 48.0301 5.80566 41.2954 5.80566 32.9877C5.80566 24.68 12.5404 17.9453 20.848 17.9453C29.1557 17.9453 35.8904 24.68 35.8904 32.9877ZM11.597 32.9877C11.597 38.0969 15.7388 42.2387 20.848 42.2387C25.9573 42.2387 30.0991 38.0969 30.0991 32.9877C30.0991 27.8785 25.9573 23.7366 20.848 23.7366C15.7388 23.7366 11.597 27.8785 11.597 32.9877Z" stroke="#244153" stroke-width="8.20356" stroke-linejoin="round" mask="url(#path-1-inside-1)"/>
<rect x="30.085" y="35.8906" width="35.8906" height="5.80583" rx="2.90291" transform="rotate(-90 30.085 35.8906)" fill="#244153"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.8905 32.966C35.887 30.5788 35.3152 28.2094 34.2008 26.0611C32.5535 22.8855 29.8283 20.4009 26.5144 19.0533C23.2005 17.7058 19.5147 17.5834 16.1187 18.7081C12.7227 19.8329 9.83869 22.1312 7.98433 25.1905C7.06323 26.7101 6.42612 28.3681 6.08849 30.0848H2.90291C1.29968 30.0848 0 31.3845 0 32.9877C0 34.591 1.29967 35.8907 2.90291 35.8907H6.08851C6.7449 39.2283 8.5148 42.2505 11.116 44.4576C13.8438 46.7721 17.3072 48.0387 20.8847 48.03C23.4899 48.0237 26.0314 47.3413 28.2695 46.0719C29.6607 45.2828 29.7922 43.4256 28.7515 42.2111C27.7109 40.9966 25.8873 40.9084 24.4114 41.5244C23.298 41.9891 22.0957 42.2352 20.8706 42.2382C18.6706 42.2435 16.5407 41.4646 14.8632 40.0413C13.5596 38.9352 12.5955 37.4962 12.0649 35.8907H32.9877C33.3035 35.8907 33.6076 35.8402 33.8923 35.7469C34.9701 35.5298 35.8401 34.6905 35.8813 33.514C35.8872 33.3457 35.8902 33.1775 35.8905 33.0094C35.8905 33.0022 35.8906 32.995 35.8906 32.9877C35.8906 32.9805 35.8905 32.9733 35.8905 32.966ZM12.0648 30.0848H29.6314C29.478 29.6206 29.2872 29.1668 29.0596 28.728C28.0465 26.7752 26.3706 25.2473 24.3327 24.4185C22.2947 23.5898 20.0281 23.5146 17.9397 24.2063C15.8513 24.8979 14.0777 26.3113 12.9373 28.1927C12.5737 28.7926 12.282 29.4277 12.0648 30.0848Z" fill="#53C8B7"/>
<path d="M48.3943 33.4154C51.2501 33.4154 53.4672 34.7703 55.0457 37.4801C55.5931 38.5476 55.8668 39.7018 55.8668 40.9427V41.2438C55.7026 42.1744 55.2418 42.6397 54.4846 42.6397H44.2338C44.4984 43.543 45.242 44.3231 46.4646 44.98C47.1854 45.2537 47.8606 45.3906 48.4901 45.3906C49.22 45.3906 50.0959 45.1351 51.1178 44.6242H51.5558C52.4134 44.7884 52.8422 45.2355 52.8422 45.9654V46.116C52.8422 47.1926 51.4873 47.9088 48.7775 48.2646H48.3943C45.7301 48.2646 43.5951 47.0192 41.9893 44.5284C41.3415 43.3514 41.0176 42.1197 41.0176 40.8332C41.0176 38.1142 42.2995 35.9519 44.8633 34.346C46.1133 33.7256 47.2903 33.4154 48.3943 33.4154ZM43.9874 39.8204H52.9517C52.9517 39.4828 52.5731 38.8031 51.8158 37.7812C50.7939 36.8141 49.7903 36.3305 48.8049 36.3305H48.2438C46.7474 36.3305 45.5157 37.0695 44.5486 38.5476C44.211 39.1316 44.0239 39.5558 43.9874 39.8204Z" fill="#244153"/>
<path d="M59.6712 40.7511V40.9016C59.6712 42.772 60.611 44.1771 62.4905 45.1169C63.0744 45.3359 63.5991 45.4453 64.0644 45.4453H64.4613C66.0123 45.4453 67.2943 44.6652 68.307 43.105C68.672 42.3751 68.8545 41.6771 68.8545 41.0111V40.8058C68.8545 39.0084 67.9649 37.6307 66.1857 36.6727C65.5744 36.3989 64.9357 36.2621 64.2697 36.2621H64.2149C62.3263 36.2621 60.9029 37.2475 59.9449 39.2182C59.7624 39.8204 59.6712 40.3314 59.6712 40.7511ZM68.8681 46.7045C67.755 47.7446 66.2861 48.2646 64.4613 48.2646H64.0644C61.5462 48.2646 59.4477 47.0055 57.7688 44.4873C57.1575 43.2647 56.8519 42.0375 56.8519 40.8058C56.8519 38.0504 58.2022 35.8652 60.9029 34.2502C62.0525 33.7119 63.1748 33.4428 64.2697 33.4428C67.0707 33.4428 69.2878 34.8114 70.921 37.5486C71.4229 38.6708 71.6738 39.825 71.6738 41.0111V46.9371C71.6738 47.667 71.2267 48.1095 70.3325 48.2646H70.2367C69.6163 48.2646 69.1556 47.8997 68.8545 47.1698V47.0192L68.8681 46.7045Z" fill="#244153"/>
<path d="M83.2791 43.3788C83.27 43.1963 83.083 43.0868 82.718 43.0503C78.1013 42.0193 75.6378 41.3624 75.3276 41.0795C74.3878 40.3679 73.9179 39.4874 73.9179 38.4381C73.9179 37.0148 74.9124 35.6645 76.9015 34.3871C77.9963 33.8123 79.0775 33.5249 80.145 33.5249C82.645 33.5249 84.6203 34.6791 86.071 36.9874L86.1258 37.4938V37.5759C86.1258 38.3515 85.6605 38.8077 84.7298 38.9445C84.1094 38.9445 83.5346 38.5066 83.0054 37.6307C82.1751 36.8186 81.2217 36.4126 80.145 36.4126C78.7399 36.4126 77.6405 37.0695 76.8467 38.3834L76.8193 38.5203C76.8193 38.7027 77.2117 38.8259 77.9963 38.8898C81.9196 39.8387 84.0866 40.3907 84.4972 40.5458C85.6194 41.2848 86.1805 42.22 86.1805 43.3514V43.3925C86.1805 44.9526 85.0765 46.3623 82.8685 47.6214C81.9105 48.0502 80.9023 48.2646 79.8439 48.2646C77.6542 48.2646 75.8066 47.2428 74.3011 45.199C74.1095 44.9253 74.0137 44.6607 74.0137 44.4052V44.1041C74.0137 43.3651 74.5155 42.9408 75.5192 42.8313C76.0028 42.8313 76.573 43.3012 77.2299 44.241C78.0328 44.9891 78.9726 45.3632 80.0492 45.3632C81.3266 45.3632 82.385 44.7656 83.2244 43.5704L83.2791 43.3788Z" fill="#244153"/>
<path d="M93.4611 42.6124C95.733 37.0741 96.9602 34.2001 97.1426 33.9902C97.462 33.7256 97.795 33.5933 98.1417 33.5933C99.0176 33.7575 99.4556 34.1955 99.4556 34.9072V34.9893C99.4191 35.2721 97.8361 39.1452 94.7065 46.6086C93.2193 50.3039 92.3617 52.2974 92.1336 52.5894C91.9055 52.7628 91.609 52.8996 91.244 53C90.3225 52.7993 89.8617 52.3841 89.8617 51.7546V51.5219C89.8617 51.3485 90.5688 49.5557 91.983 46.1433L87.4667 35.1261V34.9619C87.64 34.086 88.0962 33.6481 88.8353 33.6481C89.5743 33.6481 90.1628 34.3688 90.6008 35.8104C92.0788 39.2958 93.0323 41.5631 93.4611 42.6124Z" fill="#244153"/>
<path d="M113.634 27.8452H113.88C114.747 28.0277 115.18 28.4428 115.18 29.0906V39.3277L115.235 41.0795C115.235 42.5211 114.651 44.022 113.483 45.5822C111.832 47.3705 109.971 48.2646 107.899 48.2646H107.489C105.463 48.2646 103.584 47.3203 101.85 45.4317C100.783 43.9262 100.249 42.3706 100.249 40.7647C100.249 38.3378 101.326 36.2986 103.479 34.6471C104.847 33.7347 106.271 33.2785 107.749 33.2785C109.647 33.2785 111.198 33.8168 112.402 34.8935V29.9802L112.347 29.0906C112.612 28.2604 113.041 27.8452 113.634 27.8452ZM103.082 40.6142V40.8742C103.082 42.8085 104.099 44.2501 106.134 45.199C106.663 45.3541 107.147 45.4317 107.585 45.4317H107.899C109.779 45.4317 111.202 44.4189 112.169 42.3934C112.325 41.7821 112.402 41.3122 112.402 40.9837V40.6689C112.402 38.7438 111.371 37.3022 109.309 36.3442C108.68 36.1891 108.191 36.1115 107.845 36.1115H107.639C105.76 36.1115 104.337 37.1106 103.369 39.1087C103.178 39.6653 103.082 40.1671 103.082 40.6142Z" fill="#244153"/>
<path d="M123.925 33.4154C126.781 33.4154 128.998 34.7703 130.577 37.4801C131.124 38.5476 131.398 39.7018 131.398 40.9427V41.2438C131.234 42.1744 130.773 42.6397 130.016 42.6397H119.765C120.029 43.543 120.773 44.3231 121.996 44.98C122.716 45.2537 123.392 45.3906 124.021 45.3906C124.751 45.3906 125.627 45.1351 126.649 44.6242H127.087C127.944 44.7884 128.373 45.2355 128.373 45.9654V46.116C128.373 47.1926 127.018 47.9088 124.309 48.2646H123.925C121.261 48.2646 119.126 47.0192 117.52 44.5284C116.873 43.3514 116.549 42.1197 116.549 40.8332C116.549 38.1142 117.831 35.9519 120.394 34.346C121.644 33.7256 122.821 33.4154 123.925 33.4154ZM119.519 39.8204H128.483C128.483 39.4828 128.104 38.8031 127.347 37.7812C126.325 36.8141 125.321 36.3305 124.336 36.3305H123.775C122.279 36.3305 121.047 37.0695 120.08 38.5476C119.742 39.1316 119.555 39.5558 119.519 39.8204Z" fill="#244153"/>
<path d="M133.724 33.3607H133.82C134.55 33.3607 135.143 34.0085 135.599 35.3041L139.623 43.5704C142.588 37.2748 144.194 33.9948 144.44 33.7302C144.769 33.4838 145.097 33.3607 145.426 33.3607C146.356 33.534 146.822 33.9948 146.822 34.7429V34.7977C146.822 35.0349 146.055 36.7411 144.522 39.9162L140.677 47.813C140.275 48.1141 139.924 48.2646 139.623 48.2646H139.582C138.806 48.2646 138.163 47.5256 137.652 46.0475C134.34 39.2867 132.584 35.6097 132.383 35.0167V34.6608C132.547 33.794 132.994 33.3607 133.724 33.3607Z" fill="#244153"/>
</svg>



        
        
<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>


            <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          
            <IconButton  color="inherit">
              <Badge  color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton  color="inherit">
            <Badge color="secondary" variant="dot">
                <MailIcon />
              </Badge>
            </IconButton>


          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>

        




   <Avatar alt='src' src={ava} />
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="white"
        flaot="right"
        onClick={handleClick}
      >
        Roman Johanson
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <PersonOutlineSharpIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <CalendarTodaySharpIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Calender" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ListSharpIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            < InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            < SettingsIcon  fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Account Settings" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <LockIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Lock Screen" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            < ExitToAppIcon  fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </StyledMenuItem>
      </StyledMenu>
     
     
    
    </div>
    
    <div>
 

       <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="white"
        flaot="right"
        onClick={handleClick}
      >
      <span class="flag-icon flag-icon-au" /> EN 
      </Button> 
       <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
         keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
         <StyledMenuItem>
          <ListItemIcon>
            < span class="flag-icon flag-icon-au"/>
          </ListItemIcon>
          <ListItemText  primary="EN" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <span class="flag-icon flag-icon-fr" />
          </ListItemIcon>
          <ListItemText primary="FR" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <span class="flag-icon flag-icon-de" />
          </ListItemIcon>
          <ListItemText primary="DE" />
        </StyledMenuItem>
      </StyledMenu> 
     
    

  


    
    </div>
        </Toolbar>
      </AppBar>
    
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
         
        </div>
        <Divider />
      
        <List>
          {['Online Marketing Dashboard', 'E-commerce Dashboard', 'App Dashboard', 'Booking Dashboard','Finance Dashboard','Fitness Dashboard','Layout','Login'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <HomeOutlinedIcon /> : <StorefrontOutlinedIcon /> }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['UI Elements', 'Mail Application', 'Chat Application'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <HomeOutlinedIcon /> : <StorefrontOutlinedIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
     
      </Drawer>


      
      <main className={classes.content}>
        <div className={classes.toolbar} />

      </main>
  
  
      <div>
  



  
       <Container>
         
       <h3>Online Marketing Dashboard</h3>
          <div>

            <br></br>
             
         <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}> 
         {[0, 1, 2 ,3].map((value) => ( 
     


            <Grid  item>
                    

 
               <Paper className={classes.paper} >
                <div>
                  
               
 <h6>  {value ===0?'VISITS':value ===1?'TOTAL PAGE VIEWS':value ===2?'NEW USERS':'BOUNCE RATE'} </h6>
 <br></br>
   {value ===0?incrementordecrement=4000:value ===1?incrementordecrement=2400:value ===2?incrementordecrement=255:incrementordecrement=555}
  
  
  
 
<div style={{  display : 'none'}} >    
   {value ===0?colorcode="#ff4861" :value ===1?colorcode="#70bbfd":value ===2?colorcode="#c88ffa":colorcode="#f6da6e"}
   
   </div>
   
   
                </div> 
                <br></br>
               { incrementordecrement >= 2000 ? <TrendingUpIcon /> : incrementordecrement < 2000 ? <TrendingDownIcon/> : incrementordecrement < 2000 }
               
                {incrementordecrement >= 2000  &&
               
                

                 <div style={{  width: '200px' ,float:'right',bottom:'10'}}  >
                    <Bar 
                
                data={{
                  labels: ['', '', '', '', '', ''],
                  datasets: [            
                    {
                      label: 'name',
                      data: [90, 80, 98, 83,43, 20],
                      backgroundColor: colorcode,
                    
                    },
                   
                  ],
                
                }}
                options={{
                  maintainAspectRatio:true,
                }}
              />
            


 
  


             
             </div>
             }
           







                {incrementordecrement < 2000 &&

                <div style={{  width: '200px' ,float:'right',bottom:'4'}} >
                <Bar 
                
              data={{
                labels: ['', '', '', '', '', ''],
                datasets: [            
                  {
                    label: 'name',
                    data: [26, 24, 22, 12,11, 9],
                    backgroundColor: colorcode,
                  
                  },
                 
                ],
              
              }}
              options={{
                maintainAspectRatio:true,
              }}
            />
            </div>
            }

            
                    
                    </Paper>
                  </Grid>
                 ) 
                 ) 
                 } 
               </Grid>
            </Grid>
          </Grid> 







          
               </div>




           <br></br>


               <Window title="A/B TESTING ANALYTICS" stage={windowStage} onStageChange={handleStageChange}>
       
               <div>
    
         
         <Line
         data={{
           labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],

           datasets: [
             {
               label: 'First dataset',
               data: [70, 72.5, 60, 62.5, 58, 68, 80],
               fill: 'origin',
               backgroundColor: 'rgba(75,192,192,0.2)',
               borderColor: 'rgb(100, 149, 237)'
             },
             {
               label: 'Second dataset',
               data: [55, 65, 35, 51, 54, 76, 90],
               fill: 'origin',
               backgroundColor: 'rgba(75,192,192,0.2)',
               borderColor: 'rgba(75,192,192,1)'
             }
           ]
         }}
         height={400}
         width={600}
         options={{
           tension: 0.4,
           maintainAspectRatio: false,
           scales: {
             yAxes: [
               {
                 ticks: {
                   beginAtZero: true
                 }
               }
             ]
           }
         }}
       />
         
   
      </div> 
     
   </Window>
   
      
      
  
  <Fab  variant="extended" color="secondary" aria-label="add" className={classes.margin} style={{position:'absolute',right:0,bottom:0}}>
         Buy now
       </Fab> 
 


         </Container>
      
   
         </div>

    </div>

    
  );
}
