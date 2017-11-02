<template>
  <input placeholder="Do this..." @keyup.enter="editTodo" v-model="newTodo">
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "EditTodo",

  props: ["todo"],

  data() {
    return {
      newTodo: ""
    };
  },

  methods: {
    editTodo() {
      this.$store.commit("editTodo", {
        todo: this.todo,
        newTodo: this.newTodo
      });

      this.newTodo = "";

      this.$emit("closeForm");
    }
  }
};
</script>

<style scoped>
input {
  margin-left: 20px;
}
</style>
