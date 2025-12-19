import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

interface TodoContainerProps {
  children: React.ReactNode;
}

export const TodoContainer = ({ children }: TodoContainerProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
      <div
        className={`${themeConfig[theme].layout.heroClass} h-55 bg-cover bg-center bg-no-repeat`}
      >
        <section className="max-w-120 m-auto pt-10 p-5">{children}</section>
      </div>
    </main>
  );
};
