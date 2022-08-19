import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = "My new App";
  formattedDate: string;
  isDisabled: boolean = true;
  image: string;
  inputPlaceholder: string; 
  subtitle: string = "";
  color: string = "white";

  constructor() {
    this.formattedDate = new Date().toLocaleDateString("es-ES");
    this.image = "https://picsum.photos/200/300";
    this.inputPlaceholder = "Write something...";
   }

  ngOnInit(): void {

  }

  enableButton(): void {
    alert("Botones activados");
    this.isDisabled = false;
  }

  updateTitle(): void {
    this.name = "This title has been updated";
  }

  isInputEmpty(): boolean {
    return this.subtitle.length <= 0;
  }

  getStyle(): void {
    
    if 
      (this.subtitle.length > 0 && this.subtitle.length < 5) {
      this.color= "green";
    } else if (this.subtitle.length >= 5 && this.subtitle.length < 10) {
      this.color= "yellow";
    } else {
      this.color = "red";
    }
    
    
  }

}
