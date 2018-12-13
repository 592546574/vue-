<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
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
        },
        //删除指定的todo
        deleteTodo(index){
          this.todos.splice(index,1)
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
