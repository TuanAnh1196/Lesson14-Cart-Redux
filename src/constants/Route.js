export default Object.freeze({
    frontEnd: {
        auth: {
            login: {
                path: '/login'
            },
            register: {
                path: '/register'
            }
        },
        home: {
            index: {
                path: '/'
            }
        },
        products: {
            index: {
                // path: '/shop/event/:id'
                path: '/products'
            }
        },
        shops: {
            index: {
                // path: '/shop/event/:id'
                path: '/shops'
            }
        },
        cart: {
            index: {
                path: '/cart'
            }
        },
        shopdetail: {
            index: {
                path: '/shop-detail'
            }
        }
    }
});
