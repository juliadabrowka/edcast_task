import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ValueStateActions } from "./value.actions";

export class ValueStateModel {
    value!: number;
}

@State<ValueStateModel>({
    name: 'value',
    defaults: {
        value: 0
    }
})

@Injectable()
export class ValueState {
    @Action(ValueStateActions.IncrementValue)
    incrementValue(ctx: StateContext<ValueStateModel>) {
        const state = ctx.getState();
        let stateValue = state.value;
        stateValue++;
        ctx.setState({
            ...state,
            value: stateValue
        })
    }

    @Action(ValueStateActions.DecrementValue)
    decrementValue(ctx: StateContext<ValueStateModel>) {
        const state = ctx.getState();
        let stateValue = state.value;
        stateValue--;
        ctx.setState({
            ...state,
            value: stateValue
        })
    }

    @Action(ValueStateActions.SetValueByUser)
    setValue(ctx: StateContext<ValueStateModel>, action: ValueStateActions.SetValueByUser){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            value: action.payload
        })
    }

    @Selector()
    static value(state: ValueStateModel) {
        return state.value
    }

}