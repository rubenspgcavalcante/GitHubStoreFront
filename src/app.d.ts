declare module "is" {
    interface isInterface {
        not:isInterface,

        undefined(val:any):boolean,
        'null'(val:any):boolean,
        string(val:any):boolean,
        number(val:any):boolean,
        object(val:any):boolean
    }
    var _is:isInterface;
    export = _is;
}