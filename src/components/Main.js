import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import DishDetail from './DishDetails';
import { createMuiTheme } from '@material-ui/core/styles';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { addComment, fetchDrinks } from '../redux/ActionCreator';

const theme = createMuiTheme({
	palette: {
	  primary: {
		main: '#990000',
	  }, 
	  secondary: {
		main: '#f44336',
	  },
	},
  });

  

const mapStateToProps = state => {
	return {
		drinks: state.drinks,
		comments: state.comments,
	}
}


const mapDispatchToProps = (dispatch) => ({

	addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
	fetchDrinks: () => {dispatch(fetchDrinks())}
});


class Main extends Component{

	constructor(props){
		super(props);

	}

	componentDidMount() {
		this.props.fetchDrinks();
	}

	

	render(){

		const HomePage = () => {
			return(
				<Home dish={this.props.drinks.drinks.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.drinks.isLoading}
					dishesErrmsg={this.props.drinks.errmsg}
					promotion={this.props.drinks.drinks.filter((dish) => dish.label === 'New')[0]}
					promotionsLoading={this.props.drinks.isLoading}
					promotionsErrmsg={this.props.drinks.errmsg}
					/>
			);
		}


		const DishWithId = ({match}) => {
			return(
				<DishDetail dish={this.props.drinks.drinks.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
					isLoading={this.props.drinks.isLoading}
					errmsg={this.props.drinks.errmsg}
					comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
					addComment={this.props.addComment}
				/>
			)
		};


		return (
			<div>
				<Header />
		
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={ () => <Menu dishes={this.props.drinks} /> } />
					<Route path="/menu/:dishId" component={ DishWithId } />
					<Route exact path="/contactus" component={Contact} />
					<Redirect to="/home" />
				</Switch>

				<Footer/>
			</div>
		  );
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
