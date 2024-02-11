import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingSyntaxComponent } from './two-way-binding-syntax.component';

describe('TwoWayBindingSyntaxComponent', () => {
  let component: TwoWayBindingSyntaxComponent;
  let fixture: ComponentFixture<TwoWayBindingSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindingSyntaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoWayBindingSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
