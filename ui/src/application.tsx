import ThemeProvider from "@/components/molecules/ThemeProvider/index.js";
import MainPage from "@/components/pages/Main/index.js";

export default function Application() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}
