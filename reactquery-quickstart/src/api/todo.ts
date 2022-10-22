type Todo = {
  id: number,
  name: string
}

let todos = [{id: 1, name: 'sample1'}, {id: 2, name: 'sample2'}]

export const getTodos  = (): Promise<Todo[]> => {
  console.log('getTodos is called')
  return new Promise((resolve) => { 
    setTimeout(() => {resolve(
      [...todos]
    )}, 3000)
  })
}

export const postTodo = (todo: Todo): Promise<Todo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      todos.push(todo)
      resolve(todo)
    }, 3000)
  })
}
