import MessageComponent from "../components/activity_components/MessageComponent"

function ActivityPage() {
    return (
        <div className="h-screen w-full flex flex-col">
            <div className="w-full flex-1 flex-col dark:bg-darktheme-3 bg-lighttheme-2 p-5 shrink-0">
                <h1 className="font-semibold text-2xl">
                    Activity Title
                </h1>
            </div>

            <div className="flex-5 flex flex-col h-full justify-end p-5">
                <MessageComponent type="user" message="hello guys whats up?"/>
                <MessageComponent type="other" message="nothing much really"/>
            </div>
            
            <div className="flex-1 justify-center min-h-0 flex flex-col border-t dark:border-darktheme-1 bg-lighttheme-2 ">
                <div className="flex items-center justify-center px-5 gap-3">
                    <textarea 
                        className="py-3 px-5 w-2/3 dark:bg-darktheme-2  bg-lighttheme-1 border dark:border-none rounded-full resize-none outline-none"
                        rows={2}
                    />
                    <button className="dark:bg-app-2 bg-app-1 hover:dark:bg-apphover-1 text-white p-3 rounded-full font-semibold cursor-pointer">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ActivityPage