const Window = ({ className }: { className: string }) => {
    return (
        <div className={`absolute ${className}`}>
            <div className="flex leading-[14px] text-[11px] flex-col items-center bg-menu-wrapper rounded-t-md">
                <Header className={"flex self-start relative items-center pt-[2px] pb-[1px] px-[5px] w-full rounded-t-md bg-taskbar overflow-hidden"} />
                <Body />
            </div>
        </div>
    )
}

const Header = ({ className }: { className: string }) => {
    return (
        <header className={className}>
            <img className="w-[30px] me-1" src="/xp-warning.png"
                alt="Warning Icon" />
            <p className="text-white text-[13px] font-bold">Local Disk (C:)</p>
            <img className="h-6 ms-auto hover:brightness-105 active:brightness-90" src="/xp-close-win.png" alt="Close" />
        </header>
    )
}

const Body = () => {
    return (
        <div className="flex relative px-[2px] pb-[2px] border-t-blue-900 shadow-sm shadow-blue-900">
            <div className="flex flex-col w-96 py-2 px-1 bg-white">
                <div className="p-1 flex items-center mb-3">
                    <img className="w-16" src="/xp-warning.png" alt="Warning Icon" />
                    <p className="text-[12px]">Something went wrong</p>
                </div>
                <button className="border border-black w-[30%] mx-auto shadow-[-1px_-1px_1px_0px_rgba(0,0,0,0.75)_inset] active:shadow-[1px_1px_1px_0px_rgba(0,0,0,0.75)_inset] py-[0.2rem]">OK</button>
            </div>
        </div>
    )
}

export default Window