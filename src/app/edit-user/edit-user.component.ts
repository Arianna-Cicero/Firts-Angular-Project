import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Users } from '../models/users';
import { User } from '../user';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  constructor(
    private userService: UserService
  ) { }

    users_data!: Users[];

    users!: User[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users_data = users);
  }

    // Función para editar los datos de usuario
    edit(id_string: string, name: string, age_string: string, nationality: string): void {

      const id = Number(id_string)

      name = name.trim();
      if (!name) { return; }
  
      if(!age_string) { return; }
      const age = Number(age_string);
  
      if(!nationality) {return; }
      const data = JSON.stringify({  });
  
      // llamada al request para crear un usuario
      if (window.confirm("Estas seguro que quieres editar este usuario?"))
    {
      this.userService.edit_user({ id, name, age, nationality } as User)
      .subscribe(user => {
        this.users.push()
      });
      window.location.reload()
    }
    }

}
