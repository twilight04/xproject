import Application from "./Application"

const Applications = () => {
    return (
        <div className="flex flex-col flex-wrap items-center gap-10 w-40 h-full p-8 ">
            <Application name="My Computer" src="/mycomputer.webp" />
            <Application name="Recycle Bin" src="/xp-recycle-bin.webp" />
            <Application name="Internet Explorer" src="/xp-internet-explorer.png" />
            <Application name="GTA: San Andreas" src="/gta-logo.png" />
            <Application name="Left 4 Dead" src="/l4d-logo.png" />
            <Application name="Plants VS Zombies" src="/pvz-logo.png" />
        </div>
        // <div className="flex flex-col flex-wrap items-center gap-10 w-[150px] h-full p-10">
        //     <Application name="My Computer" src="/mycomputer.webp" />
        //     <Application name="Recycle Bin" src="/xp-recycle-bin.webp" />
        //     <Application name="Internet Explorer" src="/xp-internet-explorer.png" />
        //     <Application name="GTA: San Andreas" src="/gta-logo.png" />
        //     <Application name="Left 4 Dead" src="/l4d-logo.png" />
        //     <Application name="Plants VS Zombies" src="/pvz-logo.png" />
        // </div>
    )
}
export default Applications