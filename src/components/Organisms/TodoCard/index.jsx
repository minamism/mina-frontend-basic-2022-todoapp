import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AddTaskButton } from "../../Atoms/AddTaskButton";
import { Task } from "../../Molecules/Task";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import COLOR from "../../../variables/color";

export const TodoCard = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  const [taskList, setTaskList] = useLocalStorage("taskList", []);

  const onAddTaskButtonClick = () => {
    // 新しいタスク情報を表すオブジェクト
    const newTask = {
      name: "",
      initializing: true,
    };
    // ...（スプレッド演算子）で現在のtaskListの要素を展開し、その末尾に新しいタスク情報を追加した新しい配列を作成
    // 新しい配列をsetTaskListを使ってtaskListの新しい値として設定
    setTaskList([...taskList, newTask]);
  };

  const onTaskComplete = (deleteIndex) => {
    // _（アンダースコア）はその引数が使われていないことを示す慣習
    setTaskList(taskList.filter((_, index) => index !== deleteIndex));
  };

  const onTaskNameChange = (value, changeIndex) => {
    if (value === "") {
      // onTaskCompleteで、消す処理を書いた
      onTaskComplete(changeIndex);
      AlertHandlerContext.setAlert("タスクの名前が設定されていません。")
    } else {
      const updateTaskList = [...taskList];
      updateTaskList[changeIndex].name = value;
      setTaskList(updateTaskList);
    }
  };


  // 参考記事　https://qiita.com/Akihiro0711/items/c4658eb1f13bcb846f00
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      // LocalStorageからデータを取り出す
      const item = localStorage.getItem(key);
      // item が存在すればパースし、なければ initialValue を使う
      const parsedItem = item ? JSON.parse(item) : initialValue;
      // 各タスクの initializing プロパティを false に設定する
      const initializedTasks = parsedItem.map(task => ({
        ...task,
        initializing: false
      }));
      return initializedTasks;
    });
  
    useEffect(() => {
      const serializedValue = JSON.stringify(storedValue);
      // LocalStorageへデータを保存する
      localStorage.setItem(key, serializedValue);
    }, [key, storedValue]);
  
    return [storedValue, setStoredValue];
  }
  

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}/>
        <StyledTaskList>
          {taskList.map((task, index) => (
            <Task
              key={index}
              onTaskComplete={() => onTaskComplete(index)}
              onTaskNameChange={(value) => onTaskNameChange(value, index)}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          ))}
        </StyledTaskList>
    </StyledWrapper>
  );
};


// タスクがないときにもmarginがついてしまうのを防ぐため、Molecules/Taskにmargin-top: 10px;を追加
const StyledWrapper = styled.div`
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  `;

const StyledTaskList = styled.div`
  `;

