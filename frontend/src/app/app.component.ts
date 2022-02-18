import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public title = 'Chaleng WALLY';
  public listUsers: any[] = <any>[];
  public usuarioForm = {
    id: 0,
    name: '',
    dni: ''
  }
  public isConectionServer = false;


  constructor(
    private _userService: AppService,
  ) { }



  private async RegistrarNuevoUsuario(): Promise<boolean> {

    return await Promise.resolve(true).then(
      result => {

        if (!this.usuarioForm.name) { alert('Ingrese un nombre'); throw '' }
        if (!this.usuarioForm.dni) { alert('Ingrese un DNI'); throw '' }

        if (this.isConectionServer) {

          return this._userService.Create(this.usuarioForm).pipe().toPromise()
        } else {

          let ultimoId = 1;
          let cantUsers = this.listUsers.length;
          if (cantUsers > 0) {
            ultimoId = this.listUsers[cantUsers - 1].id + 1;
          }
          this.usuarioForm.id = ultimoId;
          this.listUsers.push(this.usuarioForm);


          this.listUsers.push()
          return this.usuarioForm;
        }
      }
    ).then(
      result => {

        return true;
      }
    )
  }



  private async ActualizarUnUsuario(): Promise<boolean> {

    return await Promise.resolve(true).then(
      result => {

        if (!this.usuarioForm.name) { alert('Ingrese un nombre'); throw '' }
        if (!this.usuarioForm.dni) { alert('Ingrese un DNI'); throw '' }

        if (this.isConectionServer) {
          return this._userService.Update(this.usuarioForm).pipe().toPromise()
        } else {
          // Recorremos los usuarios que tenemos en cache.
          this.listUsers.forEach(user => {
            // Buscamos el usuario con el mismo id para editarlo.
            if (user.id == this.usuarioForm.id) {
              user.name = this.usuarioForm.name;
              user.dni = this.usuarioForm.dni;
            }
          });

          return this.usuarioForm;
        }
      }
    ).then(
      result => {

        return true;
      }
    )
  }

  public async ClickSave() {

    return await Promise.resolve(true).then(
      result => {
        if (!this.usuarioForm.id) {
          return this.RegistrarNuevoUsuario();
        } else {
          return this.ActualizarUnUsuario();
        }
      }
    ).then(
      result => {

        if (!result) {
          console.error('No se registraron correctamente los datos.')
        }

        return this.ObtenerListaDeUsuarios();
      }
    ).then(
      result => {

        if (!result) {
          console.error('No se pudo conectar al servidor para obtener la lista usuario.')
        };

        if (!this.usuarioForm.id) {

          alert('Se registro los datos correctamente.')

        } else {

          alert('Se actualizaron los datos correctamente.')

        }

        this.RefreshForm();

        return true;
      }
    )


  }


  public async ClickEditar(userId: number) {

    return await Promise.resolve(true).then(
      result => {

        let buscarUser = this.listUsers.find(user => user.id == userId);
        if (!buscarUser) { alert('No se encontro el usuario que busca.') }
        else {

          this.usuarioForm = JSON.parse(JSON.stringify(buscarUser));
        }
        return true;
      }
    )
  }


  public async ClickCancel() {

    return await Promise.resolve(true).then(
      result => {


        this.RefreshForm();

        return true;
      }
    )
  }

  public RefreshForm() {
    this.usuarioForm = {
      id: 0,
      name: '',
      dni: ''
    };
  }

  public async ClickDelete(userId: number) {
    if (confirm('Esta seguro que desea eliminar el siguiente registro?')) {
      await this.EliminarUsuario(userId);
    } else {

    }
  }

  public async EliminarUsuario(userId: number) {

    return await Promise.resolve(true).then(
      result => {

        if (this.isConectionServer) {
          return this._userService.Delete(userId).pipe().toPromise()
        } else {
          let users = this.listUsers.filter(user => user.id != userId);

          return users;
        }
      }
    ).then(
      result => {

        this.listUsers = result;

        this.RefreshForm()
        return true;
      }
    )
  }


  public async ObtenerListaDeUsuarios(): Promise<boolean> {

    return await Promise.resolve(true).then(
      result => {

        if (this.isConectionServer) {

          return this._userService.Get().pipe().toPromise()
        }
        else {
          return this.listUsers;
        }
      }
    ).then(
      result => {
        this.listUsers = result;
        return true;
      }
    )
  }

}
