import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMoviePageComponent } from './detail-movie-page.component';

describe('DetailMoviePageComponent', () => {
  let component: DetailMoviePageComponent;
  let fixture: ComponentFixture<DetailMoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailMoviePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
