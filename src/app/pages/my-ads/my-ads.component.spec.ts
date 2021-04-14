import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAdsComponent } from './my-ads.component';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import { ApiService } from 'src/app/services/api-service/api.service';


describe('MyAdsComponent', () => {
  let component: MyAdsComponent;
  let fixture: ComponentFixture<MyAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdsComponent ],
      providers: [AppComponent, AdvertService, ApiService],
      imports: [FormsModule, AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
