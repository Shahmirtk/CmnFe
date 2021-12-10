export interface ITask {
    user: string,
    mentor: string,
    cotask: number,
    title: string,
    summary: string,
    details: string,
    time: string,
    is_contest: boolean,
    main_category: string,
    tags: Array<string>,
    completed: boolean,
}

export interface ISubTask {
    parentTask: string,
    title: string,
    details: string,
    time: string,
    is_update: boolean,
}

export interface IWork {
    worker: string,
    task: number,
    subTask: number,
    title: string,
    details: string,
    time: string,
}

export interface IWorkReview {
    user: string,
    reviewer: string,
    work: number,
    title: string,
    details: string,
    time: string,
}

export interface IBid {
    bidder: string,
    task: number,
    title: string,
    details: string,
    time: string,
}