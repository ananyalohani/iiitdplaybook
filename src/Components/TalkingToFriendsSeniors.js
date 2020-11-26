import React from 'react';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HorizontalScroll from 'react-scroll-horizontal'
import tanjiro from '../Assets/tanjiro.jpg'

function TalkingToFriendsSeniors(props) {
    const { children, value, index, ...other } = props;
    const [{user, isSignedIn, userName}] = useStateValue()

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box p={5}>
                <Typography align='center'>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TalkingToFriendsSeniors.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div>
            <div className={classes.root}>
                <Card className='homePageCard' variant="outlined">
                    <CardContent>
                        <Paper position="static">
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                                <Tab label="Whatsapp" {...a11yProps(0)} />
                                <Tab label="Instagram" {...a11yProps(1)} />
                                <Tab label="Facebook" {...a11yProps(2)} />
                                <Tab label="Telegram" {...a11yProps(2)} />
                                <Tab label="Pata Nahi" {...a11yProps(2)} />
                            </Tabs>
                        </Paper>
                        <TalkingToFriendsSeniors value={value} index={0}>
                            Whatsapp
                        </TalkingToFriendsSeniors>
                        <TalkingToFriendsSeniors value={value} index={1}>
                            Instagram
                        </TalkingToFriendsSeniors>
                        <TalkingToFriendsSeniors value={value} index={2}>
                            Facebook
                        </TalkingToFriendsSeniors>
                        <TalkingToFriendsSeniors value={value} index={3}>
                            Telegram
                        </TalkingToFriendsSeniors>
                        <TalkingToFriendsSeniors value={value} index={4}>
                            Pata Nahi
                        </TalkingToFriendsSeniors> 
                    </CardContent>
                </Card>
                <Card className='homePageCard' variant="outlined">
                    <CardContent>
                    <Typography className='textCard' variant="h4" align='center'>
                        "Friendship is the new ____zone"
                    </Typography>  
                    </CardContent>
                </Card>
            </div>
        </div>
    );
  }