import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import DrinkDetails from './DrinkDetails';
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

	addComment: (drinkId, rating, author, comment) => dispatch(addComment(drinkId, rating, author, comment)),
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
				<Home fearuredDrink={this.props.drinks.drinks.filter((drink) => drink.featured)[0]}
					drinkLoading={this.props.drinks.isLoading}
					drinkErrmsg={this.props.drinks.errmsg}
					promotion={this.props.drinks.drinks.filter((drink) => drink.label === 'New')[0]}
					promotionsLoading={this.props.drinks.isLoading}
					promotionsErrmsg={this.props.drinks.errmsg}
					/>
			);
		}


		const DrinkWithId = ({match}) => {
			return(
				<DrinkDetails drink={this.props.drinks.drinks.filter((drink) => drink.id === parseInt(match.params.drinkId, 10))[0]} 
					isLoading={this.props.drinks.isLoading}
					errmsg={this.props.drinks.errmsg}
					comments={this.props.comments.filter((comment) => comment.drinkId === parseInt(match.params.drinkId, 10))}
					addComment={this.props.addComment}
				/>
			)
		};


		return (
			<div>
				<Header />
		
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={ () => <Menu drinks={this.props.drinks} /> } />
					<Route path="/menu/:drinkId" component={ DrinkWithId } />
					<Redirect to="/home" />
				</Switch>

				<Footer/>
			</div>
		  );
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
