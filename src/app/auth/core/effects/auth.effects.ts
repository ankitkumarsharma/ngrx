import { sendEmptyAction } from './../../../core/state/actions/common.actions';
import { AuthService } from './../services/auth.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as authAction from "../actions/auth.actions";
import {map, switchMap} from "rxjs/operators"
import { Store } from '@ngrx/store';
@Injectable()
export class AuthEffects {
    constructor(private _actions$: Actions, private _authService:AuthService, private _store:Store<any>){}
    getLogin$ = createEffect(()=> 
        this._actions$.pipe(
            ofType(authAction.getLoginAction.type),
            switchMap(({payload})=>{
                return this._authService.login(payload).pipe(
                    map((data:any)=>{
                        console.log(data)
                        if(data == undefined){
                            // this._store.dispatch(
                            //     authAction.saveLoginAction({payload: json})
                            // )
                            return sendEmptyAction();
                        } else {
                            return authAction.saveLoginAction({payload: data});
                        }
                    })
                )
            })
        )
    )
}