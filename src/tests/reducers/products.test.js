import productsReducer from '../../reducers/products';

const products = [];

for (let index = 0; index < 10; index++) {
    let product = {
        id: index,
        name: `product_${index}`,
        cycle: {
            "triennially": {
                "months": "36",
                "priceOrder": (561.13 * index).toString(),
                "priceRenew": (561.13 * index).toString()
            },
            "annually": {
                "months": "12",
                "priceOrder": (220.66 * index).toString(),
                "priceRenew": (220.66 * index).toString()
            },
            "monthly": {
                "months": "1",
                "priceOrder": (24.19 * index).toString(),
                "priceRenew": (24.19 * index).toString()
            }
        }
    };
    products.push(product);
}

test('should set products with same length', () => {
    const action = { type: 'POPULATE_PRODUCTS', products };
    const state = productsReducer([], action);
    expect(state.length).toBe(action.products.length);    
});

test('should set products with same id', () => {
    const action = { type: 'POPULATE_PRODUCTS', products };
    const state = productsReducer([], action);
    expect(state[0].id).toBe(action.products[0].id);
});