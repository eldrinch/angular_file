import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirEstrComponent } from './dir-estr.component';

describe('DirEstrComponent', () => {
  let component: DirEstrComponent;
  let fixture: ComponentFixture<DirEstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirEstrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirEstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
