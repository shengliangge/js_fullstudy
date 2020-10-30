<template>
  <section class="todoapp">
    <header class="header">
      <input
        class="new-todo"
        placeholder="想干的事"
        v-model="newTodo"
        type="text"
        @keyup.enter="addTodo"
      />
    </header>
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <li class="todo" v-for="todo in todos" :key="todo.id">
          <div class="view">
            <input type="checkbox" class="toggle" v-model="todo.completed" />
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo.id)"></button>
          </div>
        </li>
        <button class="clear-completed" @click="removeComoleted">清理</button>
      </ul>
    </section>
  </section>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    function addTodo(e) {
      let obj = {
        id: state.todos.length + 1 + "",
        title: "",
        completed: false,
      };
      if (e.keyCode == 13) {
        console.log(state.newTodo);
        obj.title = state.newTodo;
        state.todos.push(obj);
      }
      console.log(state.todos);
    }
    function removeTodo(e) {
      state.todos.splice(e - 1, 1);
    }
    function removeComoleted() {
      state.todos = state.todos.filter((item) => {
        !item.completed;
      });
    }
    const state = reactive({
      newTodo: "",
      todos: [
        { id: "1", title: "吃饭", completed: false },
        { id: "2", title: "睡觉", completed: false },
        { id: "3", title: "学习vue3", completed: false },
        { id: "4", title: "写文章", completed: false },
        { id: "5", title: "看动画", completed: false },
        { id: "6", title: "逛知乎", completed: false },
        { id: "7", title: "撸狗", completed: false },
        { id: "8", title: "摸鱼", completed: true },
      ],
    });
    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
      removeComoleted,
    };
  },
};
</script>
