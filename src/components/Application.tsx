import { useEffect, useRef, useState } from "react"
import { useStateContext } from "../context/Context"

interface AppType {
    name: string,
    src: string
}

const Application: React.FC<AppType> = ({ name, src }) => {
    const [isActive, setIsActive] = useState(false)
    const clickCountRef = useRef(0)
    const clickTimeoutRef = useRef(0)
    const appRef = useRef<HTMLDivElement>(null)

    const { tasks, setTasks } = useStateContext()

    const handleClick = () => {
        setIsActive(true)
        clickCountRef.current += 1

        if (clickCountRef.current === 1) {
            clickTimeoutRef.current = setTimeout(() => {
                clickCountRef.current = 0
            }, 500)

        } else if (clickCountRef.current === 2) {
            clearTimeout(clickTimeoutRef.current)
            clickCountRef.current = 0
            const newTasks = [
                ...tasks.map(item => ({ ...item, active: false })),
                {
                    id: tasks.length + 1, name: name, icon: src, minimize: false, active: true
                }
            ]
            setTasks(newTasks)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (appRef.current && !appRef.current.contains(event.target as Node)) {
                setIsActive(false)
            }
        }

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return (
        <div ref={appRef} onClick={handleClick} className="w-[4em] h-[6em] flex flex-col hover:cursor-pointer">
            <div className="flex w-full h-[75%] shrink-0 p-1">
                <img className="object-contain" src={src} alt={name} />
            </div>
            <div className="w-full">
                <p className={`line-clamp-2 text-white text-center text-[13px] ${isActive ? 'bg-blue-700' : ''}`}>{name}</p>
            </div>
        </div>
        // <div ref={appRef} onClick={handleClick} className="w-20 h-20 p-3 text-white text-[0.70rem] hover:cursor-pointer">
        //     <img className={`object-contain mb-1 inline`} src={src} alt={name} />
        //     <p className={`text-center drop-shadow-lg line-clamp-2 ${isActive ? 'bg-blue-700' : ''}`}>{name}</p>
        // </div>
    )
}
export default Application