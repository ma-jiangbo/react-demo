import React, { useState } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import todoStore from "@/store/todoStore";
import styles from "./index.css";
interface SelfProps {
  data?: TodoItem;
}

const TodoItem: React.FC<SelfProps> = (props) => {
  const { editTodo, addTodo } = useLocalObservable(() => todoStore);
  const [edit, setEdit] = useState(false);
  const [todoValue, setTodValue] = useState(props?.data?.content || "");

  const onEdit = () => {
    setEdit(true);
  };

  const onSave = async () => {
    if (props?.data?.objectId) {
      await editTodo(props.data.objectId, todoValue);
    } else {
      await addTodo(todoValue);
    }
    setEdit(false);
    setTodValue('')
  };

  const onDelete = () => {
    if (edit) {
      setEdit(false);
    } else {
      editTodo(props.data.objectId);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodValue(e.target.value);
  };

  if (edit) {
    return (
      <li className={styles.container}>
        <div className={styles.todoRow}>
          <input
            type="text"
            placeholder="请输入待办事项"
            value={todoValue}
            onChange={onInputChange}
          />
          <div>
            <button onClick={onSave}>save</button>&nbsp;
            <button onClick={onDelete}>cancel</button>
          </div>
        </div>
      </li>
    );
  }

  if (!props.data) {
    return (
      <div className={styles.newTodo}>
        <button onClick={onEdit}>new todo</button>
      </div>
    );
  }

  return (
    <li className={styles.container}>
      <div className={styles.todoRow}>
        <span>{todoValue}</span>
        <div>
          <button onClick={onEdit}>edit</button>&nbsp;
          <button onClick={onDelete}>delete</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
