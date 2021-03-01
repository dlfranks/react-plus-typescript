import React from 'react';
import Pizza from './Pizza';
import pizzas from '../data/pizzas.json';
import AppCss from './App.module.css';
import PizzaSVG from '../svg/pizza.svg';
import Cart from './Cart';
import AppStateProvider from './AppState';
import SpecialOffer from './SpecialOffer';

const App = () => {
    const specialOffer = pizzas.find((item) => item.specialOffer);

    // useEffect(() => {
    //   const listener = () => {
    //     alert('Hello');
    //   };
    //   document.addEventListener('mousedown', listener);

    //   return () => {
    //     document.removeEventListener('mousedown', listener);
    //   };
    // }, []);

    return(
        <AppStateProvider>
            <div className={AppCss.container}>
                <div className={AppCss.header}>
                <PizzaSVG width={120} height={120} />
                <div className={AppCss.siteTitle}>Delicious Pizza</div>
                <Cart />
                </div>
                {specialOffer && <SpecialOffer pizza={specialOffer}/>}
            <ul className={AppCss.pizzaList}>
                {
                    pizzas.map((pizza) => {
                        return <Pizza key={pizza.id} pizza={pizza}/>
                    })
                }
            </ul>
            </div>
        </AppStateProvider>
    ) 
    
}

export default App;

