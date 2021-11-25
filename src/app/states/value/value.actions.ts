export namespace ValueStateActions {
    export class IncrementValue {
        static readonly type = '[Value] increment'
    }

    export class DecrementValue {
        static readonly type = '[Value] decrement'
    }

    export class DefaultValue {
        static readonly type = '[Value] set default value'
    }

    export class SetValueByUser {
        static readonly type = '[Value] set value by user'
        constructor(public payload: number) {    }
    }

}