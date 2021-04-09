
const initialState = [{
    id: 123,
    description: 'Taller de integración back-front',
    completed: false
}]

const newTodo = {
    id: 321,
    description: 'Preparar la sustentación entrega 2',
    completed: false
} 

const addAction = {
    type: 'ADD',
    payload: newTodo
}

const reducer = (state, action) => {
    // Handle action here
    return state;
}