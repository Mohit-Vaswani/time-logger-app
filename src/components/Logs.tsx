import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function Logs() {
    return (
        <Table>
            <TableCaption>A list of your recent logs.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-1/3">Date</TableHead>
                    <TableHead className="w-1/3">Hour</TableHead>
                    <TableHead className="w-1/3">Note</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>{new Date().toDateString()}</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>This is a note</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}