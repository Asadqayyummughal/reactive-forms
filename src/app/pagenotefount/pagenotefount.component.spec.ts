import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotefountComponent } from './pagenotefount.component';

describe('PagenotefountComponent', () => {
  let component: PagenotefountComponent;
  let fixture: ComponentFixture<PagenotefountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotefountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotefountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
