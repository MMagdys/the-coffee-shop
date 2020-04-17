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
import { addComment, fetchDishes } from '../redux/ActionCreator';

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
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
}


const mapDispatchToProps = (dispatch) => ({

	addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
	fetchDishes: () => {dispatch(fetchDishes())}
});


class Main extends Component{

	constructor(props){
		super(props);

	}

	componentDidMount() {
		this.props.fetchDishes();
	}

	

	render(){

		const HomePage = () => {
			return(
				<Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrmsg={this.props.dishes.errmsg}
					promotion={this.props.dishes.dishes.filter((dish) => dish.label === 'New')[0]}
					promotionsLoading={this.props.dishes.isLoading}
					promotionsErrmsg={this.props.dishes.errmsg}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
			);
		}


		const DishWithId = ({match}) => {
			return(
				<DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
					isLoading={this.props.dishes.isLoading}
					errmsg={this.props.dishes.errmsg}
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
					<Route exact path="/menu" component={ () => <Menu dishes={this.props.dishes} /> } />
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
