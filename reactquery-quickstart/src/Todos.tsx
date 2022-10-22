import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {getTodos, postTodo} from './api/todo'

export const Todos = () => {
  // mutation.mutateを呼び出す度にコンポーネントが再レンダリングされて、useQueryが再実行されてしまう。なぜ？？
  console.log('render Todos')
  const queryClient = useQueryClient()
  const query = useQuery(['todos'], getTodos, {refetchInterval: false, refetchOnMount: false})
  const mutation = useMutation(postTodo, {
    // onSuccess: () => {
    //   alert('updated Todos')
    // }
  })

  return <div>
    <ul>
      {query.data?.map(todo => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>

    <button onClick={() => {
      mutation.mutate({
       id: (query.data?.length ?? 0) + 1,
       name: 'additional todo'
      })
    }}>Add Todo</button>
  </div>
}
