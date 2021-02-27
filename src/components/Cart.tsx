import React, { Component } from 'react'
import CartCss from './Cart.module.css'
import {FiShoppingCart} from 'react-icons/fi'
import {AppStateContext} from './AppState'


interface Props {}

interface State {
    isOpen: boolean;
}

export class Cart extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    
    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e);
        this.setState((prevState) => ({isOpen : !prevState.isOpen}));

    }
    render() {

        return (
            <AppStateContext.Consumer>{(state) => {
                const itemsCount = state.cart.items.reduce((sum, item) => {
                    return sum + item.quantity;
                  }, 0);
                return(
                    <div className={CartCss.cartContainer}>
                        <button 
                            className={CartCss.button}
                            type="button"
                            onClick={() => {
                                this.setState((prevState) => ({isOpen : !prevState.isOpen}));
                            }}>
                                <FiShoppingCart />
                                <span>{itemsCount} Pizza(s)</span>
                            </button>
                        <div 
                            className={CartCss.cartDropDown}
                            style={{
                                display: this.state.isOpen? 'block' : 'none',
                            }}>
                            <ul>{
                                    state.cart.items.map((item) => {
                                        return (<li key={item.id}>{item.name} &times; {item.quantity}</li>);
                                    })
                                }
                                
                            </ul>
                        </div>
                        
                    </div>
                );
            }}
            </AppStateContext.Consumer>
            
        );
    }
}

export default Cart
