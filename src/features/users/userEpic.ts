import { ofType, Epic } from 'redux-observable';
import { map } from 'rxjs/operators';
import { Action } from 'redux';
import { login, logout } from './userSlice';

interface LoginAction extends Action {
  type: typeof login.type;
}

interface LogoutAction extends Action {
  type: typeof logout.type;
}

export type UserActions = LoginAction | LogoutAction;

export const userEpic: Epic<UserActions, UserActions> = (action$) =>
  action$.pipe(
    ofType(login.type),
    map(() => {
      console.log('User logged in!');
      return logout(); 
    })
  );
