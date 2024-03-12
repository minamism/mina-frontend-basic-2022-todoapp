import { Input } from "./index";

export default { component: Input };

export const Default = {
  args: {
    onEditComplete: (inputRef) => console.log("edit completed:  " + inputRef),
    defaultValue: "",
  },
};
