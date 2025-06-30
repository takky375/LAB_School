<script>
export default {
  name: 'Home',
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask,
          completed: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>


<template>
  <div class="head">
    <h1>Vue.js To-Do List</h1>
    <input v-model="newTask" placeholder="Add a new task"
    @keyup.enter="addTask" />
    <button @click="addTask">Add Task</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ 'completed-task': task.completed }">
          {{ task.text }}</span>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f7f9fb;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}



.head {
  width: 100%;

  background-color: white;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #2c3e50;
}

input[type="text"] {
  width: 70%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
}

button {
  padding: 10px 15px;
  margin-left: 5px;
  font-size: 14px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ecf0f1;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 6px;
}

li input[type="checkbox"] {
  margin-right: 10px;
}

.completed-task {
  text-decoration: line-through;
  color: grey;
  flex-grow: 1;
  text-align: left;
}

/* Responsive */
@media (max-width: 600px) {
  .head {
    padding: 20px 15px;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    margin: 5px 0 0;
  }

  li {
    flex-direction: column;
    align-items: flex-start;
  }

  li button {
    align-self: flex-end;
    margin-top: 5px;
  }
}
</style>