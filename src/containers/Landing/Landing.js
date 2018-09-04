import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import LandingVideo from '../../components/LandingElements/Video/Video';
import Footer from '../../components/Footer/Footer';
import Slide from '../../components/LandingElements/Slide/Slide';
import Container from "../../components/LandingElements/Slide/Container/Container";

import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import "~react-fancybox/dist/react-fancybox.css";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.8,
    meat: 1.5,
    bacon: 1
};

class Landing extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        pruchasing: false,
        loading: false,
        error: false
    };

    componentDidMount(){
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});

                const defaultPrice = this.state.totalPrice;
                const sum = Object.keys(response.data)
                    .map(igKey => {
                        return response.data[igKey] * INGREDIENT_PRICES[igKey]
                    })
                    .reduce((sum, el) => {
                        return sum + el;
                    }, defaultPrice);
                this.setState({totalPrice: sum});
            })
            .catch(error => {
                this.setState({error: true})
            });
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: 'checkout',
            search: '?' + queryString
        });
    };

    render(){
        const disableInfo = {
            ...this.state.ingredients
        };

        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if(this.state.ingredients){
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disableInfo} price={this.state.totalPrice} purchaseable={this.state.purchaseable} ordered={this.purchaseHandler} />
                </Auxiliary>
            );

            orderSummary = <OrderSummary ingredients={this.state.ingredients} purchaseCancelled={this.purchaseCancelHandler} purchaseContinued={this.purchaseContinueHandler} price={this.state.totalPrice.toFixed(2)} />;
        }

        if(this.state.loading){
            orderSummary = <Spinner />;
        }

        return(
            <Auxiliary>
                <LandingVideo />
                <Slide givenClassName="secondSlideLanding">
                    <Container givenClassName="textHolder3" bootstrapClasses={["col-lg-6", "col-xs-12", "container"]}>
                        <Container givenClassName="titleText3" bootstrapClasses={["row"]}>
                            <Container bootstrapClasses={["col-xs-12"]}>
                                Smartest activity monitoring
                            </Container>
                        </Container>
                        <Container givenClassName="descriptionText3" bootstrapClasses={["row"]}>
                            <Container bootstrapClasses={["col-xs-12"]}>
                                On top of the built-in color touchscreen monitor, we bring you to the
                                21<sup>st</sup> century with our groundbreaking KayakFirst Paddle App:
                            </Container>
                        </Container>
                        <Container givenClassName="footerText3" bootstrapClasses={[]}>
                            <ul className="footer3List">
                                <li>
                                    <span className="listItemStrong">online challenge</span> <span className="listItemLight">race or training with others across the globe</span>
                                </li>
                                <li>
                                    <span className="listItemStrong">interval training</span> <span
                                    className="listItemLight">fastest creation</span>
                                </li>
                                <li>
                                    <span className="listItemStrong">training log</span> <span
                                    className="listItemLight">saved into your user account</span>
                                </li>
                                <li>
                                    <span className="listItemStrong">outdoor use</span> <span className="listItemLight">follow your performance even on water</span>
                                </li>
                            </ul>
                        </Container>
                    </Container>
                    <Container givenClassName="imageHolder3" bootstrapClasses={"col-lg-6 col-xs-12"}>
                        <ReactFancyBox
                            thumbnail="https://loremflickr.com/320/240"
                            image="https://www.w3schools.com/howto/img_forest.jpg"/>
                    </Container>

                </Slide>
                <Slide />
                <Footer />
            </Auxiliary>
        );
    }
}

export default withErrorHandler(Landing, axios);