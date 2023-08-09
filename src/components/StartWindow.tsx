const StartWindow = () => {
    return (
        <div className="flex leading-[14px] text-[11px] flex-col items-center bg-menu-wrapper rounded-t-md">
            <Header className={"flex self-start relative items-center h-[54px] pt-[6px] pb-[5px] px-[5px] w-full rounded-t-md bg-win-head overflow-hidden"} />
            <Body />
            <Footer />
        </div>
    )
}

const Header = ({ className }: { className: string }) => {
    return (
        <header className={className}>
            <img className="w-[42px] h-[42px] me-[5px] rounded-[3px] border-[2px] border-[rgba(222, 222, 222, 0.8)]" src="/chess.jpg" alt="Chess" />
            <p className="text-white text-[14px] font-bold">John Carlo Tecson</p>
        </header>
    )
}

const Body = () => {
    const bodyStyle = {
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(218, 136, 74) 50%, rgba(0, 0, 0, 0) 100%)'
    }

    return (
        <div className="flex relative px-[2px] border-t-blue-800 shadow-sm shadow-blue-800">
            <hr className="block absolute left-0 right-0 top-0 h-[2px]" style={bodyStyle} />
            <LeftMenu />
            <RightMenu />
        </div>
    )
}

const LeftMenu = () => {
    const separator = {
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)'
    }
    return (
        <div className="flex flex-col w-48 py-2 px-1 bg-white">
            <LeftItem name="Internet" fontWeight="font-bold" subname="Internet Explorer" src="/xp-internet-explorer.png" />
            <LeftItem name="Email" fontWeight="font-bold" subname="Outlook Express" src="data:image/png;base64,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" />
            <div className="h-[2px]" style={separator}></div>
            <LeftItem name="Notepad" src="/xp-notepad.webp" />
            <LeftItem name="Windows Media Player" src="/xp-media-player.ico" />
            <LeftItem name="Windows Movie Maker" src="/xp-movie-maker.webp" />
            <LeftItem name="Recycle Bin" src="/xp-recycle-bin.webp" />
            <LeftItem name="Paint" src="/xp-paint.webp" />
            <div className="h-[2px]" style={separator}></div>
            <div className="p-1 flex items-center justify-center hover:bg-blue-800 hover:text-white">
                <p className="font-bold me-2">All Programs</p>
                <img src="https://winxp.vercel.app/static/media/all-programs.bcaf5973986a068c6a92.ico" alt="Green Arrow" />
            </div>
        </div>
    )
}

const RightMenu = () => {
    const separator = {
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(135, 179, 226, 0.71) 50%, rgba(0, 0, 0, 0) 100%)'
    }

    const rightMenuStyle = {
        backgroundColor: 'rgb(203, 227, 255)',
        color: 'rgb(0, 19, 107)',
        borderLeft: '1px solid rgba(58, 58, 255, 0.37)'
    }
    return (
        <div className="w-48 py-2 px-1" style={rightMenuStyle}>
            <RightItem name="My Documents" fontWeight="font-bold" src="/xp-docs-folder.webp" />
            <RightItem name="File Explorer" fontWeight="font-bold" src="/xp-file-explorer.webp" />
            <RightItem name="My Music" fontWeight="font-bold" src="/xp-music-folder.webp" />
            <RightItem name="My Computer" fontWeight="font-bold" src="/mycomputer.webp" />
            <div className="h-[2px]" style={separator}></div>
            <RightItem name="Control Panel" src="/xp-control-panel.webp" />
            <div className="h-[2px]" style={separator}></div>
            <RightItem name="Help and Support" src="data:image/png;base64,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" />
            <RightItem name="Search" src="data:image/png;base64,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" />
            <RightItem name="Run..." src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANoSURBVFhH7ZVrSFNhGMff2QXbOTPTIspdMzJYboNCnUdhJhGVkX2SvvglIhDKUEu3qUVll1W2MLqCuGiRRheLQEuyhqPQZvPyoTVIIaM5iRNMZSH6dN63KcuOszb7lD/4c97B9vyf9/887KB55pnnj1AVJgjUpnsC9TmHQH22S6A62y1QnQlLSH1+cOXmqxCVfOJWtFwnDzjMgvrCG7SjEdaUdMK6si5gLvRFJHSgBxanXgOhPHMXcnn9bOfHIba99yNr73CyrTYb29z0lL1ZXaUj5hqzBqXVAipy/bWuvwVYUdIz9YTCTeSJG0C6OyCUZRqQxXoHyo9WgrHCCAajHvSGI1BaVgzVJ/XHsL9AddoSv+8VJFl8cyZsHr1mt5tWMFXkkqFYnl034XC+A9b7fk7k/tBN4heJU+yUjCkJ2MyAxpwbv7mWt1C4OnmtBRYlFYyIJKkPKbl2D7cD31nHhy+s3dFD5v+s6Ymbi59sJ7e1jXvPPCI/9Ax0Q+MjS1jqdbZONaDIsXDLt62flmgv0zImi9sB64SxsgIM5Xoo0x+GoqKDeP4a3EBw/LhQaemhvxY2x+Aa0+OnpYwS+/AzLf7JBjAmkwm8Xi9RKCbNR32DpAaJf33BMC1Oe0BLmLwlYm1CwO13guMf6O+camBsbAzy8/OJud/vJwZ8jI+PTzXwbchN6vwSvzxDFyvXxSLnpxGwO13w/MVL6O1yuAP+vPFjLLet0NDQQM6h8Hr6Z49frF2CzpvN3PwNZP4Xq02jxD1E/Njc4/GQcyiw+bCPJWdcgz9+3ULiN53g+L8OukixcPTT3EXq8MaPUNRPx2kExx8puMaM8XN3Rd19Q9Dy0gaWK+dyifu/+vOZKX6b3T5hvlQN9+utnfgzjv9UXTNvoXAVFH/NrPEjzUWf9XEbvO5wzImaX7WT+Glxio2SpBf/Ej8f3NuvLSr5+OcFGyp8C5RGP6fvEcofnZjXT0nSakXyzFzuFbxqxu3HCBMzNlKyjCJamn6DkqbfpaTa+ogk0VqFMqZGKGf2U4pMFVLqaM6GN34BUioXU4rslUIp14SC2cJ1u4M750QkGbMdz51em6WMEW+NQ7oQt+cgTaAkRrRUmrFMlJAdH6lixNo4snSrdwoD5vyzDwJ/AQvHNJea1Xie/xGEfgA5zX5WeH/3AwAAAABJRU5ErkJggg==" />
        </div>
    )
}

const LeftItem = ({ name, fontWeight, subname, src }: { name: string, fontWeight?: string, subname?: string, src: string }) => {
    return (
        <div className="flex items-center mb-1 h-[34px] p-[1px] hover:bg-blue-800 hover:text-white hover:cursor-pointer">
            <img className="w-8 h-8 me-1" src={src} alt={name} />
            <div className="flex flex-col justify-center h-full relative">
                <p className={fontWeight}>{name}</p>
                {subname && <p className="text-gray-400">{subname}</p>}
            </div>
        </div>
    )
}

const RightItem = ({ name, fontWeight, src }: { name: string, fontWeight?: string, src: string }) => {
    return (
        <div className="flex items-center mb-1 h-7 leading-3 p-[1px] hover:bg-blue-800 hover:text-white hover:cursor-pointer">
            <img className="w-6 h-6 me-1" src={src} alt={name} />
            <div className="flex flex-col justify-center relative h-full">
                <p className={fontWeight}>{name}</p>
            </div>
        </div>
    )
}

const Footer = () => {
    const footerStyle = {
        background: 'linear-gradient(rgb(66, 130, 214) 0%, rgb(59, 133, 224) 3%, rgb(65, 138, 227) 5%, rgb(65, 138, 227) 17%, rgb(60, 135, 226) 21%, rgb(55, 134, 228) 26%, rgb(52, 130, 227) 29%, rgb(46, 126, 225) 39%, rgb(35, 116, 223) 49%, rgb(32, 114, 219) 57%, rgb(25, 110, 219) 62%, rgb(23, 107, 216) 72%, rgb(20, 104, 213) 75%, rgb(17, 101, 210) 83%, rgb(15, 97, 203) 88%)'
    }
    return (
        <footer className="flex self-end items-center justify-end text-white h-9 w-full" style={footerStyle}>
            <button className="flex me-3 items-center p-[3px] hover:bg-blue-600">
                <img className="m-1 w-6 h-6" src="data:image/png;base64,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" alt="Log Off" />
                <p>Log Off</p>
            </button>
            <button className="flex me-3 items-center p-[3px] hover:bg-blue-600">
                <img className="m-1 w-6 h-6" src="data:image/png;base64,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" alt="Log Off" />
                <p>Shut Down</p>
            </button>
        </footer>
    )
}

export default StartWindow