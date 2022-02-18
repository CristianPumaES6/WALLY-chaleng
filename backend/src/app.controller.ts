import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('person')
export class AppController {
  constructor(private readonly appService: AppService) {}

  public datosUsers:any[]=[];
 

  // Permite crear al usuario
  @Post('create')
  Create(@Body() userCreate: any): any {
  
    let ultimoId = this.datosUsers.length +1;
    userCreate.id = ultimoId;
    this.datosUsers.push(userCreate);

    return userCreate;
  }

  // Actualizar usuario.
  @Put(':id/delete')
  Update(@Body() userUpdate: any): any {

    // Recorremos los usuarios que tenemos en cache.
    this.datosUsers.forEach(user => {
        // Buscamos el usuario con el mismo id para editarlo.
      if(user.id== userUpdate.id){
        user.name = userUpdate.name;
        user.dni = userUpdate.dni;
      }
    });

    return userUpdate;
  }

  
  // Obtener todos los usuarios
  @Get()
  Gets():any[] {
    let users = this.datosUsers;
    return users;
  }

  
  // Obtener todos los usuarios
  @Delete(':id/delete')
  Delete(@Param('id') id):any[] {
    let users = this.datosUsers.filter(user => user.id != id);

    this.datosUsers = users;
    return users;
  }
}
