import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
 
export const TodoHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between mb-7">
      <h1 className="text-neutral-very-light-gray text-2xl sm:text-[2.2rem] font-bold">
        T O D O
      </h1>
      <button className="cursor-pointer" onClick={toggleTheme}>
        <img
          className="h-8 w-8"
          src={`${themeConfig[theme].icon}`}
          alt="Alternar tema"
        />
      </button>
    </header>
  );
};
