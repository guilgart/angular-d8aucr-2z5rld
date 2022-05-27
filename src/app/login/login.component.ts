import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    usuario: '',
    password: ''
  });

  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,  private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    const datosUsuario = this.http.get<{dataUsuario: string, dataPassword: string}[]>('/assets/shipping.json');
    
    datosUsuario.pipe(take(1)).subscribe((users: any) => {
      this.datosUsuario = users;
    });




    if (this.loginForm.get('usuario')?.value == 'admin' && this.loginForm.get('password')?.value == 'pass') {
      window.alert( this.loginForm.get('usuario')?.value + ' Bienvenido de nuevo a nuestra tienda!' );
      // window.URL('/product-list')
      // this.router.navigate(['/app-product-list']);
      this.router.navigate(['../productList'], { relativeTo: this.route });
    } else
    {
      window.alert('Error!, Usuario o password incorrectos!.' );
    }
    
    // window.alert('Your order has been submitted');

    this.loginForm.reset();
  }

}
