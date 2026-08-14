import { useNavigate } from "react-router-dom"

function ActivityComponent() {

    const navigate = useNavigate()

    const goToActivity = () => navigate(`/activity`)

    return (
        <button 
            className="rounded-full h-22 w-full p-2 hover:dark:bg-darkhover-1 hover:bg-lighthover-1 cursor-pointer flex gap-3 items-center"
            onClick={() => goToActivity()}
            >
            <div className="w-20 h-20 dark:bg-mist-700 rounded-full"/>
        </button>
    )
}

export default ActivityComponent