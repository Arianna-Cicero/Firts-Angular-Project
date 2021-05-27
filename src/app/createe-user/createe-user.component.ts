import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-createe-user',
  templateUrl: './createe-user.component.html',
  styleUrls: ['./createe-user.component.css']
})
export class CreateeUserComponent implements OnInit {
  
  users!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  // Función para añadir los datos de usuario
  add(name: string, age_string: string, nationality: string): void {
    name = name.trim();
    if (!name) { return; }

    if(!age_string) { return; }
    const age = Number(age_string);

    if(!nationality) {return; }
    const data = JSON.stringify({  });

    // llamada al request para crear un usuario
    this.userService.createUsers({ name, age, nationality } as User)
    .subscribe(user => {
      this.users.push();
    });
  }

}
