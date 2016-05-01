declare module "EventEmitter" {
    export = Wolfy87EventEmitter.EventEmitter;
}

declare module Flux {
    interface IAction<T> {
        actionType:T,
        [payload:string]:any
    }
}