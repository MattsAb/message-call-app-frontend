
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid"

type MessageModalProps = {
    isOpen: boolean
    select: () => void
    deleteMessage: () => void
}

function MessageModal({isOpen, select, deleteMessage}: MessageModalProps) {

    if (!isOpen) { return (<></>)}

    return (
        <div className="flex flex-col dark:bg-darktheme-3 absolute top-0 left-0 -translate-y-full -translate-x-30  w-30 gap-1 p-3 rounded-xl">
            <button className="hover:dark:bg-darkhover-1 rounded-2xl cursor-pointer flex gap-3 "
                onClick={select}
            >
                <PencilSquareIcon className="w-5 h-5"/>
                <h2>Edit</h2>
            </button>
            <button 
                className="hover:dark:bg-darkhover-1 rounded-2xl cursor-pointer flex gap-3"
                onClick={deleteMessage}
            >
                <TrashIcon className="w-5 h-5"/>
                <h2>Delete</h2>
            </button>
        </div>
    )
}

export default MessageModal