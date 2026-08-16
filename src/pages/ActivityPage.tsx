import { useState } from "react"
import MessageComponent from "../components/activity_components/MessageComponent"

function ActivityPage() {

    const [input, setInput] = useState('')

    return (
        <div className="h-screen w-full flex flex-col">
            <div className="w-full dark:bg-darktheme-3 bg-lighttheme-2 p-5 shrink-0">
                <h1 className="font-semibold text-2xl">
                    Activity Title
                </h1>
            </div>

            <div className="flex-1 min-h-0 flex flex-col items-center">
                <div className="flex-1 border-x border-darktheme-2 flex flex-col-reverse gap-4 w-full lg:w-2/3 p-5 min-h-0 overscroll-contain overflow-y-auto scrollbar-none">
                    <MessageComponent type="user" message="hello guys whats up?hello guys whats up?hello guys whats up?hello guys whats up?hello guys whats up?hello guys whats up?hello guys whats up?hello guys whats up?hello guys whats up?" />
                    <MessageComponent type="other" message="nothing much"/>
                    <MessageComponent type="user" message="hello guys whats up?fdhdfgh" />
                    <MessageComponent type="other" message="hello guys whats up?hgfhgfhfghfhfdhhdfghfdhd" />
                    <MessageComponent type="other" message="nothing much really" />
                    <MessageComponent type="user" message="hello" />
                    <MessageComponent type="user" message="hello guys whats up?" />
                    <MessageComponent type="other" message="nothing much really" />
                    <MessageComponent type="user" message="hello guys whats up?dsfsdfsdf " />
                    <MessageComponent type="user" message="hello guys whats up?" />
                </div>
            </div>
            
            <div className="justify-center flex flex-col border-t dark:border-darktheme-1 dark:bg-darktheme-4 bg-lighttheme-2 shrink-0">
                <div className="flex items-center justify-center px-5 py-4 gap-3">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="py-3 px-5 w-2/3 dark:bg-darktheme-2 bg-lighttheme-1 border dark:border-none rounded-full resize-none outline-none"
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
