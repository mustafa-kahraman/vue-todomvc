<template>
    <li class="todo" :class="{ 'is-complete' : todo.done }">
        <input @click="toggleTodo(todo)" type="checkbox" :checked="todo.done"/>
        <label v-text="todo.body" @click="toggleTodo(todo)" @dblclick="showForm(true)"></label>
        <button @click="deleteTodo(todo)">x</button>
        <edit-todo :todo="todo" v-show="formState" @closeForm="showForm(false)"></edit-todo>
    </li>
</template>

<script>
import { mapMutations } from "vuex";

import EditTodo from "./EditTodo.vue";

export default {
  name: "Todo",

  props: ["todo"],

  data() {
    return {
      formState: false
    };
  },

  methods: {
    showForm(state) {
      this.formState = state;
    },

    ...mapMutations(["deleteTodo", "toggleTodo"])
  },

  components: {
    EditTodo
  }
};
</script>

<style>
.todo.is-complete {
  color: gray;
}
</style>
