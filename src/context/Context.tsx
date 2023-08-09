import { createContext, useContext, useState } from "react";

interface Task {
    id: number
    name: string
    icon: string
}

interface State {
    tasks: Task[]
    setTasks: (callback: (tasks: Task[]) => Task[]) => void;
}

const StateContext = createContext<State>({
    tasks: [],
    setTasks: () => {}
})

export const Context = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([])
    return (
        <StateContext.Provider value={{tasks, setTasks}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)