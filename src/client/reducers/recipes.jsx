
const initialState = [
  {
    title: 'Tonkotsu Ramen',
    ingredients: ['Onions', 'Soy Sauce', 'Eggs', 'Pork', 'Sake', 'Mirin', 'Rice']
  },
  {
    title: 'Saag Paneer',
    ingredients: ['Spinach', 'Onion', 'Ginger', 'Garlic', 'Vegetable Oil', 'Milk', 'Lemon Juice', 'Garam Masala']
  }
];

export default function recipes(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
