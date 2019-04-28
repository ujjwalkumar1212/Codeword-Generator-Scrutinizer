import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';

// import { PasswordComponent } from './password/password.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CodewordsetComponent } from './codewordset/codewordset.component';
import { PasswordComponent } from './password/password.component';
import { AddUserComponent, AddUserSnackBarComponent, HintDialog } from './add-user/add-user.component';
import { CoursestudentComponent } from './coursestudent/coursestudent.component';
import { CodewordComponent } from './codeword/codeword.component';
import { CreateCourseComponent,CreateCouse1Component, } from './create-course/create-course.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './service/contact.service';
import { AddCourseComponent, AddCourseSnackBarComponent } from './add-course/add-course.component';
import { RegisterfeedbackComponent } from './registerfeedback/registerfeedback.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddCodewordComponent, AddCodewordSnackBarComponent } from './add-codeword/add-codeword.component';
import { EditcodewordsetComponent } from './editcodewordset/editcodewordset.component';
import { DeletecodewordsetComponent } from './deletecodewordset/deletecodewordset.component';

import {MatNativeDateModule} from '@angular/material';
import { UpdateCodewordComponent } from './update-codeword/update-codeword.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PermernantDelComponent } from './permernant-del/permernant-del.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    CodewordsetComponent,
    PasswordComponent,
    AddUserComponent,
    AddUserSnackBarComponent,
    HintDialog,
    CoursestudentComponent,
    CodewordComponent,
    CreateCourseComponent,
    CreateCouse1Component,
    StudentdashboardComponent,
    SignUpComponent,
    ContactComponent,
    ContactListComponent,
    AddCourseComponent,
    AddCourseSnackBarComponent,
    RegisterfeedbackComponent,
    ResetpasswordComponent,
    AddCodewordComponent,
    AddCodewordSnackBarComponent,
    EditcodewordsetComponent,
    DeletecodewordsetComponent,
    UpdateCodewordComponent,
    PermernantDelComponent
   
  ],
  imports: [
    BrowserModule,
    MatMomentDateModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatGridListModule,    
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [ContactService],
    entryComponents: [
    AddUserComponent,
    AddUserSnackBarComponent,
    HintDialog,
    CreateCouse1Component,
    CreateCourseComponent,
    ContactComponent,
    AddCourseComponent,
    AddCourseSnackBarComponent,
    AddCodewordComponent,
    AddCodewordSnackBarComponent,
    EditcodewordsetComponent,
    DeletecodewordsetComponent,
    UpdateCodewordComponent,
    PermernantDelComponent
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
