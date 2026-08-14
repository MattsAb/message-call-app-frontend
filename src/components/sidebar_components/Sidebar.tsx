import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import ActivityPanel from "./ActivityPanel";
import { useNavigate } from "react-router-dom";

function Sidebar() {

    const [isOpen, setIsOpen] = useState(true)

    const navigate = useNavigate()

    const goToSettings = () => navigate('/settings')

    return (
        <>
            <div className={`
                    sticky z-40 w-30 ${isOpen && 'lg:w-70'}
                    h-screen dark:bg-darktheme-4 bg-lighttheme-1 dark:text-white flex-col items-center gap-3 border-r dark:border-darktheme-2
                `}>
                <div className="flex-col flex items-center w-full h-screen pt-2 px-2 gap-3">
                    <div className={`flex w-full items-center justify-between gap-3`}>
                        <div className="flex gap-3 items-center justify-center">
                            <button 
                                className="bg-slate-600 h-8 w-8 rounded-full cursor-pointer"
                                onClick={() => goToSettings()}
                            >

                            </button>
                            <h1 className={`font-semibold hidden ${isOpen && 'lg:block'}`}> Username </h1>
                        </div>
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex justify-center items-center cursor-pointer rounded-full"
                        >
                            <Bars3Icon className="w-8 h-8"/>
                        </button>
                    </div>
                    <div className="flex-1 min-h-0 w-full">
                        <ActivityPanel/>
                    </div>
                </div>
            </div>
        </>
    )

} 
export default Sidebar;