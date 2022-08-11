import { Queue } from "./queue";

export enum MessageTypeEnum{
    INCOMING,
    OUTGOING,
}

export class Message{
    type:number;
    from:number;
    to:number;
    when:number;
    value:string;

    constructor(type:number,from:number,to:number,when:number,value:string){
        this.type = type;
        this.from = from;
        this.to = to;
        this.when = when;
        this.value = value;
    }
    
}


export class Task{
    thread: number;
    from: number;
    value: string;
}

let __QUEUE = new Queue();

export function register_new_task(task:Task){
    __QUEUE.enqueue(task);

}

export function get_new_task(){
    if(__QUEUE.isEmpty){
        return;
    }
    return __QUEUE.peek();
}