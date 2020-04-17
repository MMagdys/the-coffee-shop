import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link } from 'react-router-dom';
import {Loading} from './Loading';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';


function RenderDrink({drink}) {

    return(
        <Card className="col-12 col-md-5 m-1">
            <CardImg width="100%" object src={drink.image} alt={drink.name} />
            <CardBody>
                <CardTitle>{drink.name}</CardTitle>
                <CardText>{drink.description}</CardText>
            </CardBody>
        </Card>

    )
}


function RenderComments({comments}) {

    if (comments != null){

        var cmnts = comments.map((comment) => {
        return ([
            <ListItem key={comment.id}>
                <ListItemText>{comment.comment}</ListItemText>
            </ListItem>,
            <Typography>-- {comment.author},
                &nbsp; {new Intl.DateTimeFormat('en-US', 
                    {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </Typography>,
            <Divider variant="inset" component="li" />
        ]
        )
    })

    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
                <List className='list-unstyled'>
                    {cmnts}
                </List>

            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }

}



const DrinkDetails = (props) => {

    const drink = props.drink
    if (drink == null) {
        return (<div></div>)
    }
    const drinkItem = <RenderDrink drink={props.drink} />
    const commentItem = <RenderComments comments={props.comments} />
    
    return (
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to='/menu'>Menu</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>{props.drink.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.drink.name}</h3>
                    <hr />
                </div>
            </div>

            <div className='row' style={{marginBottom: '3rem'}}>
                {drinkItem}
                {commentItem}
            </div>

        </div>

    );
}

export default DrinkDetails;