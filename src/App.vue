<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer :todos="todos" :selectAllTodos="selectAllTodos" :clearCompleteTodos="clearCompleteTodos"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  import List from './components/List';
  import Footer from './components/Footer';
  import storageUtils from './utils/storageUtils'
    export default {
      data(){
       return {
         todos: storageUtils.readTodos()
       }
      },
      methods:{
        addTodo(todo){
          this.todos.unshift(todo)
        },
        //删除指定的todo
        deleteTodo(index){
          this.todos.splice(index,1)
        },
        //定义todo全选全不选
        selectAllTodos(isSelectAll){
          //遍历
         this.todos.forEach(todo => todo.complete = isSelectAll)
        },
        //清除已完成任务
        clearCompleteTodos(){
          this.todos = this.todos.filter(todo => !todo.complete)
        }
      },
      watch:{
        todos:{
          //深度监视
          deep:true,
          handler:function(value){//todos最新值
            //将todos保存到local中
            // localstorage.setItem('todos_key',JSON.stringify(this.todos))
            storageUtils.saveTodos(value)
          }
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
