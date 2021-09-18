import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutCompntComponent } from './inout-compnt.component';

describe('InoutCompntComponent', () => {
  let component: InoutCompntComponent;
  let fixture: ComponentFixture<InoutCompntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoutCompntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InoutCompntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
