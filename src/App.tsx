import Applications from "./components/Applications"
import Taskbar from "./components/Taskbar"

const App = () => {
  return (
    <div className={`h-full overflow-hidden bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/xp-wallpaper.jpg')]`}>
      <Applications />
      <Taskbar />
    </div>
  )
}
export default App