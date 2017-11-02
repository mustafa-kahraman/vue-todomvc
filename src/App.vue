<script>
import { mapState, mapMutations } from "vuex";

import Todo from "./components/Todo.vue";

export default {
  name: "app",

  data() {
    return {
      newTodo: ""
    };
  },

  computed: {
    allCompleted() {
      return this.todos.every(todo => todo.done);
    },

    ...mapState(["todos"])
  },

  methods: {
    ...mapMutations(["completeAll"]),

    addTodo() {
      this.$store.commit("addTodo", this.newTodo);

      this.newTodo = "";
    }
  },

  components: {
    Todo
  }
};
</script>

<template>
  <div>

    <div class="level">
      <h1 class="mr-1">Todos</h1>
      <button v-show="! allCompleted" @click="completeAll">Complete All</button>
    </div>

    <div>
      <input placeholder="Do this..." @keyup.enter.prevent="addTodo" v-model="newTodo">
    </div>

    <ul>

      <todo v-for="(todo, index) in todos" :key="index" :todo="todo"></todo>

    </ul>

  </div>
</template>
