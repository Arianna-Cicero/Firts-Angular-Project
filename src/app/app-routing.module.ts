import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateeUserComponent} from './createe-user/createe-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MainComponent } from './main/main.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  {path: 'create', component: CreateeUserComponent},
  {path: 'delete', component: DeleteUserComponent},
  {path: 'edit', component: EditUserComponent},
  {path: 'show', component: ShowUserComponent},
  {path: 'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
