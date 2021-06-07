import React from 'react';
import logo from './css1.jpg';
import './detail.css';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function FixedContainer() {
    const classes = useStyles();
  return (
    <div>
    <div className="main_container">
        <div className="container_left">
            
         
      <ThemeProvider theme={theme}>
        <Typography variant="h2">Title of the project</Typography>
        <Typography variant="h4">Description of the project</Typography>
        <Typography variant="h5">$12.99</Typography>
      </ThemeProvider>
      <br/>
      <br/>
      <br/>
     
  
        </div>
        <div className="container_right">
         
        <img className="logo" src={logo} alt="Logo" />
        
        <Typography variant="h2">$12.99</Typography>
        <div className={classes.root}> 
         <Button className="btn" variant="contained" color="secondary">
        Add to Cart
      </Button> 
      <br/>
      <Button className="btn" variant="outlined" color="secondary">
    Buy Now
      </Button>  
     

    </div>
    
    <Typography variant="h5">This course includes:</Typography>
    <li className="list">
      <ul><PlayArrowIcon/>4 hours on-demand video</ul>
      <ul><AllInclusiveIcon/>Full lifetime access</ul>
      <ul><PhoneAndroidIcon/>Access on mobile and TV</ul>
      <ul><AssignmentIcon/>Assignments</ul>
      <ul><CardMembershipIcon/>Certificate of completion</ul>
    </li>
      </div>

          </div>
           <div className="main_sub_container">
           <Typography variant="h4">
             What You will learn?
           </Typography>
           <li className="list">
           <ul>4 hours on-demand video</ul>
           <ul>Full lifetime access</ul>
           <ul>Access on mobile and TV</ul>
           <ul>Assignments</ul>
           <ul>Certificate of completion</ul>
         </li>
           </div>
           </div>
     
    
  );
}
export default FixedContainer;