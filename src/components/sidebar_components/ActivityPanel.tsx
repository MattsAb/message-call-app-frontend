import ActivityComponent from "./ActivityComponent"


function ActivityPanel() {



    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex-1 min-h-0 overscroll-contain overflow-y-auto scrollbar-none">
                <div className="space-y-3">
                    {/*tests*/}
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                    <ActivityComponent/>
                </div>
            </div>
        </div>
    )
}

export default ActivityPanel