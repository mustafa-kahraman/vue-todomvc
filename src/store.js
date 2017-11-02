
const state = {
    todos: [
        { body: "Go to the store", done: false },
        { body: "Buy groceries", done: true },
        { body: "Finish homework", done: false },
    ]
};

const mutations = {
    addTodo({ todos }, body) {
        todos.push({
            body,
            done: false
        });
    },

    completeAll({ todos }) {
        todos.forEach(todo => todo.done = true)
    },

    deleteTodo({ todos }, todo) {
        todos.splice(todos.indexOf(todo), 1);
    },

    editTodo({ todos }, todo) {
        let idx = todos.indexOf(todo.todo);
        todos[idx].body = todo.newTodo;
    },

    toggleTodo({ todos }, todo) {
        todo.done = !todo.done;
    }
};

export default {
    state,
    mutations,
};