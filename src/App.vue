<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import List from './components/List';
  import Footer from './components/Footer';
    export default {
      data(){
       return {
         todos:[
           {complete:true,title:'吃饭'},
           {complete:false,title:'睡觉'},
           {complete:false,title:'打豆豆'}
         ]
       }
      },
      methods:{
        addTodo(todo){
          this.todos.unshift(todo)
        }
      },
      components:{
          Header,
          List,
          Footer
      }
    }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
