import * as Request from "request";
import { ScheduleResult } from "./types";

export function request (url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
        Request.post(url, { body: JSON.stringify(body) }, (error, response, body) => {
            error && reject(error);
            resolve(body);
        })
    });
}


export function schedule (param: any): Promise<ScheduleResult | undefined> {
    return request("http://localhost:8000/schedule", param)
        .then(r => JSON.parse(r)) as Promise<ScheduleResult | undefined>;
}

/*
schedule(
    [{
        "workpiece": '#W-5829-8',
        "process": '#P-3959-28',
        "machine": '#M-2304-14',
        "time": 5,
        "order": 2
    },
        {
            "workpiece": '#W-5829-8',
            "process": '#P-5852-27',
            "machine": '#M-671-13',
            "time": 11,
            "order": 1
        },
        {
            "workpiece": '#W-5829-8',
            "process": '#P-7792-26',
            "machine": '#M-8763-12',
            "time": 10,
            "order": 0
        },
        {
            "workpiece": '#W-554-9',
            "process": '#P-6810-29',
            "machine": '#M-671-13',
            "time": 5,
            "order": 0
        },
        {
            "workpiece": '#W-554-9',
            "process": '#P-8883-30',
            "machine": '#M-3836-15',
            "time": 10,
            "order": 1
        }]
).then(body => {
    console.log(body);
});*/
// Request.post("http://localhost:3000", { body: JSON.stringify({ data: [{ a: 1, b: 2 }, { c: 2, b: 2 }] }) }, (error, response, body) => {
//     console.log(body)
// });
