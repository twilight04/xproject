import { useEffect, useRef, useState } from "react";
import StartWindow from "./StartWindow";
import { useStateContext } from "../context/Context";

const Taskbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isStart, setIsStart] = useState(false)

    const startRef = useRef<HTMLImageElement>(null)
    const { tasks } = useStateContext()

    useEffect(() => {
        console.log(tasks);
    }, [tasks])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (startRef.current && !startRef.current.contains(event.target as Node)) {
                setIsStart(false)
            }
        }

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    const handleStart = () => {
        setIsStart(prevState => !prevState)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <footer className="flex h-[30px] bg-taskbar absolute bottom-0 right-0 left-0">
            <div className="shrink-0">
                <div className="absolute left-0 bottom-full">
                    {isStart && <StartWindow />}
                </div>
                <img ref={startRef} onClick={handleStart} className="box-border h-full hover:cursor-pointer hover:brightness-105 active:brightness-90" src="data:image/png;base64,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"
                    alt="Start button" />
            </div>
            <div className="flex h-full p-1 text-white text-[11px] font-light items-center gap-1 overflow-hidden">
                {tasks.map(task => (
                    <TaskItem key={task.id} id={task.id} name={task.name} src={task.icon} active={task.active} />
                ))}
            </div>
            <div className="shrink-0 bg-toolbar flex px-[10px] items-center border-l border-[#243c5a] ms-auto">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJ9SURBVDhPjZJfaFJRHMdt9BQ9uDAiCUJ8GQSmoiCsRGiboG5MHURsttFKMoXc5nBCW5E0bUIXQWy73JgPSetO0NhwcBlsOVAcMowRBCOIxVZ72KKCpPXw63cO3ig2aF/4cLm/c77f8zt/JIdJrVY3ajSaKyqVyqxQKM5i6ThyjA7+T1qtNqzX68FoNILNZoPOzs7vGDSKQ6cREnRQsdhL6O9/+FWrNW0ZDAYwm83gcDigp6cH+vr6wOfzgVQqvYlTzyD/dqLR3HDG4y+gXC4DMbe3t4PX6wWn00m/Y2NjEIlEwGq1ruP0y8gJahTV1TU6X6v9BIvFAh0dHUBUKpVgcHAQPJ47kEwmIZFI0C5w+m3kHDWK6u19XBSEKjQ3N0M4HKZmlmUxIEC7yOVykE6nxYBx5AI1ijKZ7gqh0FNobW0Fv98PExMTEAwGIRB4QgNIYCaTEQMY5CI1ilIq29p0Ouem3W6HlhYHDAw8gpERFlwuFywsLECxWIR8Pg/RaPTwANRJuVzeS1Zzuz00hDA5+QwqlQpdneM4UCqV5BAfIE2x2OprYpyb+7ZMvg3IKexgJxQKwezsLG2b3Eo2m4WlpSVx9efINUTGsps7mO2fmtrewH+qBnw8XjIxlUoBz/PUXCgURPMccg+RxePLwtBQ9RUGrAWDbzliFtWo0+kYYiAHRsBr3cI6j9xHZIKw9ymR2Kyh+fzMzO4vYvpb5JmSO7YjZK/kwMaRW4isu3v+eiazW3O7K1dXVva3h4fXs1g/IBIiQ5oQctrkzuUM8+Ydx32sEnOhsL/BMB/+7P3IwrYji4u1H9Ho+7V66eji+b0v09Of17CDS/VSXRLJb3mhSY8ZnaUBAAAAAElFTkSuQmCC" alt="" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJ7SURBVDhPfZNvSFNhFMbfcOqm1lrbNIkQrIa6FWZ3VCNIJJgydiv/oClR6lbSpG30IUp0LTZBPwwUL05XVJrSmlRoE8aIjFWypA8FfqoIidWXIIIIwg9P517Q/JcP/Ni5Z8/hnPfe97Bl2dgIM7MDFGURW6RcCytjPNNSJFvO/U96QQt5k+wOhQbWyKrk12QJRV86WBMLUq6AyBR9G6uVVVindCgb3Pk735nzSj+SC/3jXOSPb4W8I/0HOWqJXMm7oVpY98W3h3H+dSnqEiWofLYXxqe7UPxIC1W/AqyY3SWXgUiT/GtV6NNMdyxUov39UdjmylD9ogjHJwug9mQtsmPsA1n8BEdkiP51Kh8r/nnz20lc/2yGfc6IQ0L+YkZF2kf6a4zoJqTxVSrVQfrJJla/0Jz2zHhd3AjvVx5XP53A9npFitIhYvncNtsAHI4b7ygUJ1FIyTVq2tGW/eVUtBSnn3CgZ6nYar0AlyuAYHASnZ0R1NScuU/pfYT4addreGoY+z06XA44UVt7DhZLK6qr3RgYeIiurgeIRJ7/KSrSXyKr2GD93Zifn0dPTw84zkhdb8FsbgTPt0EQIpidfYOJiQk0N7ckyHqEWH0Unud/xWIxxONx6mxBQ8NZ9Pb2Y2YmIeXC4TDsdntKo9HcI3sloZQKl6TT6QZdLheSySSGhoYQCoWkwmg0CqfTmdJqtdNk6yNshHgvVk0gc7vd9SaTacHn82F0dJxGnoXf70/l5eUtFYpnLyfEq/1vZ1Yom+O4215vLwIB4bvBYHhJOYFwEJsWLilNrVaXKJVKsZOHuEJUEYXEpoUrJW7dbkJc7T3ENmLjHWCM/QWIROiXfEWyEQAAAABJRU5ErkJggg==" alt="" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALnSURBVDhPjY8LLNVxFMeP3ZvrTjWReYV7FUrZPEZCWaRVXhW3mjTmWV2PipK8RzZKKI0bLbpNniMmy+OixzwqZmkRm8dadWVJ6WXWt7/5b6VZ9dnOdnbO+Zzz+9HSWG4WR1x5HBqfDe8jqT1MwXih/g8uZVW6aeseSjgZVY7q2id42v0aKanNcD+c911puenR+T47uhiuks0mjXXeGfNiTcwtjIpikX6+DvXZlRhQNUN52h2EJ3XBxDqtja+yO5BojS6rLuAblDPZl92AD1kSIDIEn0/EoyZWCtm5bMzQMgyROpqcxahIL0FaTi8MTET3hRs8rFmd6HRcyaeBwGR8PR6N7wFRmHX0w0dLEeSq5nhL2nihoI4O4qKdr4aCvEZY2EcM6Qi3O7I6UUCEVD544AzmDF0wt94d/bJW9AnM8EFBC/Vu7pgoLEQLrULDSm1kZlTAyNz/ucDYNZjViXbuL3z4TBQOkAFmOYZ41dmJsf5+1Hn7YHxiAu9kMtyl5agVmCMhpRSaApcOA5N9vqxOpGFwrLjPKxRyWo1xrh4GOIqYGB3FPN+YRb0KPFQzX6gwtUdEYhmIKyxau9FrD6sTOTiK0zpOZ2KQlNDH0UKZ6CDeT09jprsbky8H0RQWhioi3AlJxsHgfNjYOhcyC2xZnShIfNXTT1wx1WXjinZSxcjICOQSCVp11mAsKQlvmpshXaUNaXE7bJ0ivzg67ctiFghZfQE1Ha/c+VdUM5eqmCVlTEhJBQW0AheYmiwmAxl5LeDydKr27g/wYbXf4QpPxTX+qPHwhoQRJKSMy8RHCpPftLJDe+cQXD0ToadvHOLrH2XJSovhKVvGNbTJIQ2MRjwjnmXi2hY7DL8cwcVcGYj4RVu3uS91/Rf6Rm71j3qmcS89F+Un4vDq7RTyb3SBxxf0WlnvOMaO/RWeuoZVad51GRrbhuHjlwwFjuYDcwuHU2z/f1EScRQ1bzNJ1BbbXQELtT8h+gm9undzpD1ygQAAAABJRU5ErkJggg==" alt="" />
                <div className="text-white text-[11px] font-light mx-[5px]">
                    {currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                </div>
            </div>
        </footer>
    )
}

const TaskItem = ({ id, name, src, active }: {id: number, name: string, src: string, active: boolean }) => {
    const {tasks, setTasks} = useStateContext()
    const handleSwitch = () => {
        const switchTask = [
            ...tasks.map(item => ({
                ...item, active: id === item.id ? true : false
            }))
        ]

        setTasks(switchTask)
    }
    return (
        <div onClick={handleSwitch} className={`bg-toolbar flex h-full w-48 items-center px-2 rounded-sm flex-initial whitespace-nowrap hover:cursor-pointer hover:brightness-90 ${active ? 'active-task' : ''}`}>
            <img className="h-4 me-1" src={src} alt={name} />
            <p className="truncate">{name}</p>
        </div>
    )
}

export default Taskbar