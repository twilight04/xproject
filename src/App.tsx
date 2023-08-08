import Taskbar from "./components/Taskbar"

const App = () => {
  return (
    <div className={`h-full overflow-hidden bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/wallpaper.jpg')]`}>
      <Taskbar />
    </div>
  )
}
export default App