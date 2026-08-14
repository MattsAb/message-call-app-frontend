

type MessageProps = {
    type: "user" | "other"
    message: string
}

function MessageComponent({type, message}: MessageProps) {



    return (
        <div className={`${type == "user" ? "dark:bg-app-2 bg-app-1 self-end text-white" : "dark:bg-darktheme-1 bg-lighttheme-2 self-start"} rounded-3xl p-3 items-center flex`}>
            <p>
                {message}
            </p>
        </div>
    )
}

export default MessageComponent