import { Injectable } from "@angular/core";
import { Selector, State, StateContext } from "@ngxs/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { Instructor } from "src/app/service.service";
import { SearchAction } from "./search.actions";

export class SearchStateModel {
    searchResults!: Instructor[];
    searchText!: string
}

@State<SearchStateModel>({
    name: 'search'
})

@Injectable()
export class SearchState {
   // @Selector()
   // static filteredItems(state: SearchStateModel) {
       // return state.searchResults.filter((res: Instructor) => { //why?
            //if(state.searchText){
                //if (res.name.includes(state.searchText)) {return res}
           // }
           // else {return res}
       // })
    //}
// something doesnt work so im gonna comment it 

    //@Action(SearchAction)
    //setFilter({patchState}: StateContext<SearchStateModel>, {payload}: SearchAction) {
        //patchState({
            //searchText: payload.val
        //})
    //}
}