import {
  action,
  configure,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import AV from "leancloud-storage";
import dayjs from "dayjs";

const { Query, User, init, Object } = AV;
configure({ enforceActions: "observed" });

class Todo {
  isReady = false;
  todoList: TodoItem[] = [];

  constructor() {
    makeObservable(this, {
      isReady: observable,
      todoList: observable,
      initServer: action,
      getTodoList: action,
      editTodo: action,
      addTodo: action,
    });
    this.initServer();
  }

  initServer = async () => {
    init({
      appId: "gnaVNi4JL07gn2vAIXXdAjsq-gzGzoHsz",
      appKey: "9OCjTkPUKFwbInLnINgugYvG",
      serverURL: "https://gnavni4j.lc-cn-n1-shared.com",
    });
    const TestObject = Object.extend("TestObject");
    const testObject = new TestObject();
    testObject.set("words", "init test");
    const result = await testObject.save();
    if (result.id) {
      runInAction(() => {
        this.isReady = true;
      });
    }
  };

  getTodoList = async () => {
    // try {
    const query = new Query("TODO");
    const count = await query.count();
    //  没有数据插入一条
    if (count === 0) {
      this.addTodo("first todo!", this.getTodoList);
    } else {
      const result = await query.find();
      if (result.length) {
        runInAction(() => {
            this.todoList = result.map(todoObj => ({
                objectId: todoObj.id,
                updatedAt: dayjs(todoObj.updatedAt).valueOf(),
                createdAt: dayjs(todoObj.createdAt).valueOf(),
                content: todoObj.get('content')
            }))
        })
      }
    }

    // console.log("query result");
    // } catch (error) {
    // console.log('catch error', error);

    // }
  };

  addTodo = async (value: string, callback?: () => void) => {
    if (!value) return;
    const TodoObj = Object.extend("TODO");
    const todo = new TodoObj();
    todo.set("content", value);
    const result = await todo.save();
    if (result.id) {
      runInAction(() => {
        const _todoList = [...this.todoList];
        _todoList.push({
          objectId: result.id,
          content: value,
          createdAt: dayjs().valueOf(),
          updatedAt: dayjs().valueOf(),
        });  
        this.todoList = _todoList
      });
      if (callback) {
        callback();
      }
    }
  };

  editTodo = async (id: string, value?: string) => {
    if (!id) return;
    const todo = Object.createWithoutData("TODO", id);
    // 删除
    if (!todo || (todo && !value)) {
      todo?.destroy();
      runInAction(() => {
        this.todoList = this.todoList.filter((item) => item.objectId !== id);
      });
    }
    // 修改
    todo.set("content", value);
    const result = await todo.save();
    if (result.id) {
      runInAction(() => {
        const targetIndex = this.todoList.findIndex(
          (item) => item.objectId === id
        );
        if (targetIndex !== -1) {
          const _todoList = [...this.todoList];
          _todoList[targetIndex].content = value;
          this.todoList = _todoList;
        }
      });
    }
  };
}

export default new Todo();
