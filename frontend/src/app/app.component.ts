import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chaleng WALLY';
  public listUser = [];

  constructor(
    private _userService: AppService,
  ) { }



  public async ClickRegistrarUsuario() {

    return await Promise.resolve(true).then(
      result => {

        let createUser = {
          name: 'Juan',
          dni: '77871220'
        };

        return this._userService.Create(createUser).pipe().toPromise()
      }
    )
  }



  public async ClickActualizarUsuario() {

    return await Promise.resolve(true).then(
      result => {

        let updateUser = {
          name: 'Juan',
          dni: '77871220'
        };

        return this._userService.Update(updateUser).pipe().toPromise()
      }
    )
  }


  public async ClickListarUsurio() {

    return await Promise.resolve(true).then(
      result => {

        let updateUser = {
          name: 'Juan',
          dni: '77871220'
        };

        return this._userService.Get(1).pipe().toPromise()
      }
    ).then(
      result => {
        this.listUser = result;
      }
    )
  }

}
