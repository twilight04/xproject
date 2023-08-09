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

    const { setTasks } = useStateContext()

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

            setTasks(tasks => [...tasks, { id: tasks.length + 1, name: name, icon: src }])
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
        <div ref={appRef} onClick={handleClick} className="w-16 h-16 p-3 text-white text-[0.70rem]">
            <img className="object-contain mb-1" src={src} alt={name} />
            <p className={`text-center drop-shadow-lg line-clamp-2 ${isActive ? 'bg-blue-700' : ''}`}>{name}</p>
        </div>
    )
}
export default Application