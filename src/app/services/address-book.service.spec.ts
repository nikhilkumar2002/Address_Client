import { TestBed } from '@angular/core/testing';

import { AddressBookService } from './address-book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from '../components/header/header.component';

describe('AddressBookService', () => {
  let service: AddressBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeaderComponent],
    });
    service = TestBed.inject(AddressBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
