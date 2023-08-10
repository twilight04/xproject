import Applications from "./components/Applications"
import Taskbar from "./components/Taskbar"
import Window from "./components/Window"

const App = () => {
  return (
    <div className={`h-full overflow-hidden bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/xp-wallpaper.jpg')]`}>
      <Applications />
      <Window className={"top-[45%] left-[45%]"} />
      <Taskbar />
    </div>
  )
}
export default App