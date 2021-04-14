import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAdvertsComponent } from './add-adverts.component';
import { AppComponent } from 'src/app/app.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdvertService } from 'src/app/services/advert-service/advert.service'
import { FormsModule } from '@angular/forms'

describe('AddAdvertsComponent', () => {
  let component: AddAdvertsComponent;
  let fixture: ComponentFixture<AddAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertsComponent ],
      providers: [AppComponent, AdvertService, NgModule],
      imports: [FormsModule, AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertsComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.createAd();
    fixture.detectChanges();
  });

  // Test case 1
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
