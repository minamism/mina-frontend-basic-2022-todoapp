import { Task } from "./index";

export default { component: Task };

export const Default = {
  args: {
    onTaskNameChange: (value) =>
      console.log("taskname changed:  " + value),
    onTaskComplete: () => console.log("task completed"),
    taskName: "taskname",
    defaultIsEditing: false,
  },
};
