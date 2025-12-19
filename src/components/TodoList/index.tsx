import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Todo } from "../../hooks/useTodo";
import IconCheck from "/images/icon-check.svg";
import IconCross from "/images/icon-cross.svg";
 
interface TodoListProps {
  todoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
  filter: "all" | "active" | "completed"
  clearCompleted: () => void
  removeTodo: (id: number) => void
}

export const TodoList = ({
  todoList,
  toggleTodoCompleted,
  setFilter,
  filter,
  clearCompleted,
  removeTodo,
}: TodoListProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todoList.map((todo) => (
            <li
              key={todo.id}
              className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}
            >
              <div className=" group flex gap-5 items-center">
                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-[1px]">
                  <button
                    onClick={() => toggleTodoCompleted(todo.id)}
                    className={` w-full h-full border ${
                      themeConfig[theme].todo.borderColor
                    } rounded-full cursor-pointer ${
                      themeConfig[theme].todo.backgroundColor
                    }
                    ${
                      todo.completed
                        ? "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] border-none"
                        : ""
                    }`}
                  >
                    {todo.completed && (
                      <img
                        src={IconCheck}
                        className="p-1.5"
                        alt="Ícone check"
                      />
                    )}
                  </button>
                </span>
                <p
                  className={`${themeConfig[theme].todo.textColor} ${
                    todo.completed ? "line-through opacity-50" : ""
                  } `}
                >
                  {todo.text}
                </p>
                <button className="ml-auto cursor-pointer sm:hidden group-hover:block transition-opacity duration-200"><img onClick={() => removeTodo(todo.id)} src={IconCross} alt="Ícone cross" /></button>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`flex justify-between p-4 text-sm ${themeConfig[theme].layout.textColor}`}
        >
          {todoList.length > 0 && (
          <p>{todoList.length} Items Total</p>
            )}
          <div className="hidden sm:flex gap-3 font-semibold">
            <button
              onClick={() => setFilter("all")}
              className={`${filter === 'all' ? 'text-bright-blue' : "" } cursor-pointer ${
                theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue"
                  : "hover:text-neutral-very-dark-grayish-blue"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`${filter === 'active' ? 'text-bright-blue' : "" } cursor-pointer ${
                theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue"
                  : "hover:text-neutral-very-dark-grayish-blue"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`${filter === 'completed' ? 'text-bright-blue' : "" } cursor-pointer ${
                theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue"
                  : "hover:text-neutral-very-dark-grayish-blue"
              }`}
            >
              Completed
            </button>
          </div>

          <button onClick={clearCompleted}
            className={`cursor-pointer ${
              theme === "dark"
                ? "hover:text-neutral-light-grayish-blue"
                : "hover:text-neutral-very-dark-grayish-blue"
            }`}
          >
            Clear Completed
          </button>
        </div>
      </div>

      <div
        className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center rounded-sm mt-5 py-2 gap-3 font-semibold sm:hidden`}
      >
        <button
          onClick={() => setFilter("all")}
          className={`${filter === 'all' ? 'text-bright-blue' : "" } cursor-pointer ${
            theme === "dark"
              ? "hover:text-neutral-light-grayish-blue"
              : "hover:text-neutral-very-dark-grayish-blue"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`${filter === 'active' ? 'text-bright-blue' : "" } cursor-pointer ${
            theme === "dark"
              ? "hover:text-neutral-light-grayish-blue"
              : "hover:text-neutral-very-dark-grayish-blue"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`${filter === 'completed' ? 'text-bright-blue' : "" } cursor-pointer ${
            theme === "dark"
              ? "hover:text-neutral-light-grayish-blue"
              : "hover:text-neutral-very-dark-grayish-blue"
          }`}
        >
          Completed
        </button>
      </div>
    </>
  );
};
