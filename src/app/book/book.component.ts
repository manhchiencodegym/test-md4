import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Book} from '../book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookById;
  bookList: Book[] = [];
  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    const id = this.activatedRoute.snapshot.params.id;
    this.bookService.getById(id).subscribe((result) => {
      this.bookById = result;
    });
  }

  ngOnInit(): void {
    this.bookService.getAll().subscribe((result) => {
      this.bookList = result;
    });
  }

  delete(id) {
    alert('Are You Sure ?');

    this.bookService.delete(id).subscribe((next) => {
      this.router.navigate(['books']);
    });
    location.reload();
  }
}
