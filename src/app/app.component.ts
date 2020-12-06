import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ItemMenuComponent } from './Components/item-menu/item-menu.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PizzaStore';
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private router: Router) {

  }

  ngOnInit() {

  }

  addContainer() {
    this.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(ItemMenuComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  redirect() {
    this.router.navigateByUrl('/dashboard');
  }


}
