import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, Typography, Button, makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router';

const useStyle = makeStyles({
    media:{
        height: 250
    },
    card:{
        marginTop: 40,
        marginBottom: 40,
        minHeight: 300,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    buttons:{
        color:'white',
        border: '1px solid white',
        margin: 15,
        textShadow: "1.5px 1.5px black"

    }
})


function PortfolioPiece(props){
  const  classes = useStyle();

  const toProject = () => {
      if(props.url === "/canvas"){
          props.history.push(props.url)
        }else window.open(props.url)
  }
  const toGitHub = () => {
      window.open(props.github)
  }
    return(
        <>
        <Card className={classes.card}>
            <CardMedia 
                className={classes.media}
                image={props.image}
            />
                <Typography style={{color: 'white', textShadow: "1.5px 1.5px black"}}>{props.projectDescription}</Typography>
        
                <Button 
                className={classes.buttons} 
                variant='outlined' 
                onClick={toProject}>
                    To {props.projectName}
                </Button>

                {props.github != "none" && 
                    <Button 
                    className={classes.buttons} 
                    variant='outlined' 
                    onClick={toGitHub}>To GitHub</Button>}

        </Card>
        </>
    );
}


export default withRouter(PortfolioPiece);