import { EllipsisHorizontalIcon, CheckIcon, XMarkIcon } from "@heroicons/react/20/solid"
import MessageModal from "./MessageModal"
import { useEffect, useRef, useState } from "react"
import imgtest from "../../../public/favicon.svg"

type MessageProps = {
    type: "user" | "other"
    message: string
}

function MessageComponent({type, message}: MessageProps) {

    const [modalOpen, setModalOpen] = useState(false)
    const [editValue, setEditValue] = useState('')
    const [inEdit, setInEdit] = useState(false)

    const ref = useRef<HTMLDivElement>(null)
     
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            const target = e.target as Node;
            const clickedInsideMenu = ref.current?.contains(target);

            if (!clickedInsideMenu) {
                setModalOpen(false);
                setInEdit(false)
            }
        }
        if (modalOpen) document.addEventListener('mousedown', handleClickOutside);
        if (inEdit) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [modalOpen, inEdit]);

    async function handleEdit() {

    }
    async function handleDelete() {

    }

    return (
            <div ref={ref} className={`flex gap-3 max-w-1/2 ${type == "user" && 'self-end'}`}>
                <div className={`${type == "user" ? "dark:bg-app-2 bg-app-1 self-end text-white" : "dark:bg-darktheme-1 bg-lighttheme-2"} rounded-3xl p-3 items-center flex gap-3`}>

                    { !inEdit ? (
                        <>
                            {type == "other" && <img src={imgtest} className="w-5 h-5"/>}
                            <p>{message}</p>
                        </>
                    ) : (
                        <textarea
                            className="dark:bg-darktheme-2 wrap-break-word min-w-0 w-full rounded-2xl py-1 px-2 outline-none scrollbar-none"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                    )}

                </div>
                {type == "user" && !inEdit && 
                        <button
                            className="rounded-full h-8 w-8 p-1 bg-darktheme-2 relative flex items-center justify-center cursor-pointer"
                            onClick={() => setModalOpen(!modalOpen)}
                            >
                            <EllipsisHorizontalIcon className="h-6= w-6"/>
                            <MessageModal 
                                isOpen={modalOpen} 
                                select={() => {
                                    setInEdit(true)
                                    setEditValue(message)
                                }}
                                deleteMessage={() => handleDelete()}
                            />
                        </button>
                    }
                {type == "user" && inEdit &&
                        <div className="flex gap-2">
                            <button
                                className="rounded-full h-8 w-8 bg-darktheme-2 relative flex items-center justify-center cursor-pointer"
                                onClick={() => {
                                    handleEdit()
                                    setInEdit(false)
                                }}
                                >
                                <CheckIcon className="h-6 w-6"/>
                            </button>

                            <button
                                className="rounded-full h-8 w-8 bg-darktheme-2 relative flex items-center justify-center cursor-pointer"
                                onClick={() => {
                                    setInEdit(false)
                                }}
                                >
                                <XMarkIcon className="h-6 w-6"/>
                            </button>
                        </div>
                    }
            </div>
    )
}

export default MessageComponent