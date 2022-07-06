import React, { useEffect } from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import TodoStore from '@/store/todoStore'
import TodoItem from '@/components/TodoItem/TodoItem'

const Todo: React.FC = () => {
    const { getTodoList, addTodo, editTodo, todoList } = useLocalObservable(() => new TodoStore())

    useEffect(() => {
        getTodoList()
    }, [])

    return (
        <div>
            <li>
                {todoList.map(item => <TodoItem  key={item.objectId} data={item} />)}
            </li>
        </div>
    )
}

export default observer(Todo)