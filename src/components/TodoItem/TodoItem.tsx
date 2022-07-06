import React from 'react'

interface SelfProps {
    data: TodoItem
}

const TodoItem: React.FC<SelfProps> = (props) => {
    return (
        <div>{props.data.content}</div>
    )
}

export default TodoItem