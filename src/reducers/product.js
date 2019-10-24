var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: '',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10
    },
    {
        id: 1,
        name: 'Xiaomi Note 5',
        image: '',
        description: 'Sản phẩm do apple sản xuất',
        price: 400,
        inventory: 15
    },
    {
        id: 1,
        name: 'SamSung Galaxy S7',
        image: '',
        description: 'Sản phẩm do apple sản xuất',
        price: 350,
        inventory: 10
    }
];
const product = (state= initialState, action)=>{
    switch(action.types){
        default: return [...state];
    }
}
export default product;
