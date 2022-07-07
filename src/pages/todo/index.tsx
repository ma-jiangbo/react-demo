import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import todoStore from "@/store/todoStore";
import TodoItem from "@/components/TodoItem/TodoItem";

const Todo: React.FC = () => {
  const { getTodoList, todoList } = useLocalObservable(() => todoStore);

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <TodoItem key={item.objectId} data={item} />
        ))}
        <TodoItem />
      </ul>
    </div>
  );
};

export default observer(Todo);
