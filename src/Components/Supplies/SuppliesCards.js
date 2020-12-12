import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import image_svg from "../../Assets/SVG_for_cards/teamwork.svg";

function SuppliesCards(supplyCardInfo){
    const cardHeight = 280
    const cardWidth = cardHeight*(2.1/3);

    var gradientColor_1;
    var gradientColor_2;
    var title;
    var n_testimonies;
    var reading_time;
    var image;
    var pathLink;

    if (exploreCardInfo["title"]){
        gradientColor_1 = supplyCardInfo["gradientColor_1"];
        gradientColor_2 = supplyCardInfo["gradientColor_2"];
        title = supplyCardInfo["title"];
        description = supplyCardInfo["description"];
        image = supplyCardInfo["image"];
        pathLink = supplyCardInfo["pathLink"];

    }
    else{
        gradientColor_1 = "#e66465";
        gradientColor_2 = "#9198e5";
        title = "No Title";
        n_testimonies = "N.A.";
        reading_time = "N.A.";
        image = image_svg;
        pathLink = "explore";
    }

    const useStyles = makeStyles({
        root: {
            maxWidth:cardWidth,
            minWidth:cardWidth,
            maxHeight:cardHeight,
            // minHeight:cardHeight,
            background:`linear-gradient(45deg, ${gradientColor_1}, ${gradientColor_2})`,
            borderRadius:10,
            // marginBottom: "10%",
            
        },
        actionArea:{

        },
        link:{
            margin:"0%",
        },
        media: {
            maxWidth:cardWidth,
            minHeight:100,
            margin: '10%',
        },
        title: {
            fontSize: 20,
            fontFamily: 'Poppins',
            fontWeight:"bold",
            textAlign: "center",
            color: "#ffffff",
        },
        info:{
            fontSize: 12,
            textAlign: "center",
            margin: "5%",
        },
    });
    const classes = useStyles();
    return(
        
            <Card className={classes.root}>
                <Link className={classes.link} to={`/${pathLink}`}>
                <CardActionArea className={classes.actionArea}>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography className={classes.title} style={{whiteSpace: 'pre-line'}}>
                            {title}
                        </Typography>
                        <Typography className={classes.info} color="textSecondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
            </Card>
       
    );
}

export default ExploreCards;