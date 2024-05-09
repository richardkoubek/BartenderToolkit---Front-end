import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsinputComponent } from './tipsinput.component';

describe('TipsinputComponent', () => {
  let component: TipsinputComponent;
  let fixture: ComponentFixture<TipsinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipsinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipsinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
