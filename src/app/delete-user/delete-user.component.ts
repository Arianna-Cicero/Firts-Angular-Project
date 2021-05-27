import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Users } from '../models/users';
import { User } from '../user';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})

export class DeleteUserComponent implements OnInit {

  constructor(private userService: UserService ) { }

    users_data!: Users[];

    users!: User[];


  ngOnInit(): void {

    // Mostrar los datos de la tabla de datos 
    this.userService.getUsers().subscribe(users => this.users_data = users);
  }

    // Funcion para eliminar usuario
    delete(id_string: string ): void {

    const id = Number(id_string)

    // warning antes de eliminar el utilizador
    if (window.confirm("Estas seguro que quieres eliminar este usuario?"))
    {
      // elimar el utilizador
      this.userService.deleteUser(id).subscribe(O_o => window.location.reload());
    }
  }
}
