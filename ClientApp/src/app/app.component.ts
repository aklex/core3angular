import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SampleService } from 'src/share/apiService/sample.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';
  client_env_name: string = environment.env_name;
  server_env_name: string = null;

  constructor(private SampleService: SampleService) {

  }

  ngOnInit(): void {
    this.SampleService.getAppSettings().subscribe(
      (value: string) => this.server_env_name = value,
      (err: any) => console.error("Error from angular", err)
    )
  }
}
