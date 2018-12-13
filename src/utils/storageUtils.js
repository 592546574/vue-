//储存数据的模块
export default {
  //读取todos
  readTodos(){
    return JSON.parse(localStorage.getItem('todos_key') || '[]')
  },
  //保存todos
  saveTodos(value){
    localStorage.setItem('todos_key', JSON.stringify(value))
  }
}
