import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  public datosUsers:any[]=[];

  @Get()
  GetsUsers(): any[] {
    let users = this.datosUsers;
    return users;
  }


  
  @Post()
  Create(@Body() userUpdate: any): any[] {
    this.datosUsers.push(userUpdate);


    return this.datosUsers;
  }

  // Actualizar usuario.
  @Put()
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

  
  //Obtener usurio por ID
  Get(@Param('id') id): any {
    let user = this.datosUsers.find(user => user.id==id)
    return user;
  }

  // Obtener todos los usuarios
  @Get()
  Gets():any[] {
    let users = this.datosUsers;
    return users;
  }
}
