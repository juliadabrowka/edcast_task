export class SearchAction {
    static readonly type = '[Instructor] search';
    constructor(public payload: {val: string}) {}
}