import dayjs from "dayjs"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils";


const Calendar = () => {

    function getDateInMonth(year = dayjs().year(), month = dayjs().month()) {
        const startDate = dayjs().year(year).month(month).date(1);
        const endDate = startDate.endOf("month");

        const datesArray = [];

        for (let i = startDate.date(); i <= endDate.date(); i++) {
            datesArray.push(startDate.date(i).format("YYYY-MM-DD"));
        }

        return datesArray;
    }

    getDateInMonth();

    const getColors = (value: number) => {
        if (value == 0) {
            return "bg-gray-100"
        } else if (value < 5) {
            return "bg-green-100"
        } else if (value < 10) {
            return "bg-green-300"
        } else {
            return "bg-green-500"
        }
    }

    const hour = 0;

    return (
        <div className="flex flex-wrap border border-dashed gap-2 p-10 justify-center rounded-md" >
            {getDateInMonth().map((value, index) => {
                return (
                    <HoverCard key={index}>
                        <HoverCardTrigger>
                            <div className={cn("h-5 w-5 rounded-sm cursor-pointer", getColors(hour || 0))} ></div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            {hour || 0} hours on {value}
                        </HoverCardContent>
                    </HoverCard>
                )
            })}
        </div>
    )
}

export default Calendar