export type ScheduleHistory = { id: string, time: string };
export type ScheduleResult = {
    fulfillTime: number
    result: Array<{
        workpiece: string
        process: string
        machine: string
        startTime: number
        endTime: number
    }>
};