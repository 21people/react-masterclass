import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  DefaultValue,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setToDo(value);
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setToDo("");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input placeholder="Write a to do" onChange={onChange} value={toDo} />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }
interface IToDo {
  text: string;
  category: "DONE" | "DOING" | "TO_DO";
}
const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
interface IForm {
  toDo?: string;
  extraError?: string;
}
function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<IForm>({ defaultValues: { toDo: "I have to do" } });
  const handleValid = (data: IForm) => {
    if (!data.toDo?.includes("I have to do")) {
      setError("toDo", { message: "Write Exact ToDo" }, { shouldFocus: true });
    }
    setValue("toDo", `I have to do`);
    // setError("extraError", { message: "Server is offline" });
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "toDo is required",
            minLength: { value: 10, message: "Too short!" },
            // pattern: {
            //   value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            //   message: "Only naver.com email allowed",
            // },
            validate: {
              noNico: (value) =>
                value?.includes("nico") ? "No nicos allowed" : true,
              noNick: (value) =>
                value?.includes("nick") ? "No nicks allowed" : true,
            },
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.toDo?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
