import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import DrinkDetails from './DrinkDetails';
import {Link} from 'react-router-dom';
import {Loading} from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


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


function RenderMenuItem({ drink, onClick}){
    
    const classes = useStyles();
    
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card align="left" className={classes.card_root}>
            <Link to={`/menu/${drink.id}`} style={{textDecoration: 'none'}}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={drink.image}
                title={drink.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {drink.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {drink.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Link>
            </Card>
        </Grid>
      );
}


const Menu = (props) => {

    const menu = props.drinks.drinks.map((drink) => {
        return(
                <RenderMenuItem key={drink.id} drink={drink} />
        );
    });


    if (props.drinks.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.drinks.errmsg){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.drinks.errmsg}</h4>
                </div>
            </div>
        )
    }
    else
        return ( 
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to='/home'>Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row" style={{marginBottom: '3rem'}}>
                    <Grid container  spacing={3}>
                        {menu}
                    </Grid> 
                </div>

            </div>
        );
}
        

export default Menu;
