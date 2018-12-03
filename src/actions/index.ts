let nextId = 0;
export const addTodo = text => dispatch => {
    dispatch ({
    type: 'ADD_TODO',
        id: nextId++,
        text,
  });
};

export const toggleTodo = id => dispatch => {
    dispatch ({
        type: 'TOGGLE_TODO',
        id
      });
};
