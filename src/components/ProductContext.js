import React, { Component, createContext } from 'react';

const ProductContext = createContext();

class ProductProvider extends Component {
    state = {}


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };