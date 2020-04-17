import React from 'react';
import {Loading} from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card_root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    display: 'flex',
    marginBottom: '2rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 551,
    height: 250,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  input_fields: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));



function RenderCardMedia({item, isLoading, errmsg}){
    
    const classes = useStyles();
    
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errmsg) {
        return(
            <h4>{errmsg}</h4>
        )
    }
    else{
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card align="left" className={classes.card_root}>
            <CardActionArea>
            <Link to={`/menu/${item.id}`} style={{textDecoration: 'none'}}>
                <CardMedia
                className={classes.media}
                image={item.image}
                title={item.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
                </Typography>
                </CardContent>
            </Link>
            </CardActionArea>
            <CardActions>
                <Button size="small" style={{color: '#990000'}}>
                Share
                </Button>
                <Link to={`/menu/${item.id}`} style={{textDecoration: 'none'}}>
                <Button size="small" style={{color: '#990000'}}>
                Learn More
                </Button>
                </Link>
            </CardActions>
            </Card>
        </Grid>
      );
    }
}


function HoriziontalCard({item, isLoading, errmsg}){

    const classes = useStyles();

    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errmsg) {
        return(
            <h4>{errmsg}</h4>
        )
    }
    else{
        return (
            <Grid item xs={12} md={8} >
                <Card className={classes.root} align="left">
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" style={{margin: '1rem'}}>
                        Try our new <strong style={{color: '#990000'}}>{item.name}</strong>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" style={{margin: '1rem'}}>
                        {item.description}
                    </Typography>
                    <div align="right">
                    <Link to={`/menu/${item.id}`} style={{textDecoration: 'none', marginRight: '1rem'}}>
                        <Button variant="contained" style={{backgroundColor: '#990000' ,color: 'white'}}>
                        Learn More
                        </Button>
                    </Link>
                    </div>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={item.image}
                    title={item.name}
                />
                </Card>
            </Grid>
        );
    }
}


function JoinMailingList(){

    const classes = useStyles();

    return(
        <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{padding: '2rem'}}>
            <Typography gutterBottom variant="h5" component="h2">
                <strong style={{color: '#990000'}}>Join our mailing list</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                recieve our new offers and promotions
            </Typography>
            <div style={{margin: '1rem'}}>
            <TextField
                label="email"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                className={classes.input_fields}
            />
            <Button variant="contained" size="small" style={{backgroundColor: '#990000', color: 'white'}} className={classes.input_fields}>join</Button>
            </div>
            

            </Paper>
            
        </Grid>
    );
}

function Home(props) {

    return(
        <div align="center" style={{margin: '3rem'}}>
            <Grid container >
      
                <HoriziontalCard item={props.promotion} 
                    isLoading={props.promotionsLoading} 
                    errmsg={props.promotionsErrmsg} />
            </Grid>
                          
            <Grid container  spacing={3}>
      
                <RenderCardMedia item={props.fearuredDrink} 
                    isLoading={props.drinkLoading} 
                    errmsg={props.drinkErrmsg}/>
        
                <JoinMailingList />
        
            </Grid>
        </div>
    );
;}

export default Home;