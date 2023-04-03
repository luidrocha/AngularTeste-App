import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefaltComponent } from './page-defalt.component';

describe('PageDefaltComponent', () => {
  let component: PageDefaltComponent;
  let fixture: ComponentFixture<PageDefaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDefaltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDefaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
