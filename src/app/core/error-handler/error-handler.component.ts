import { Component, Inject, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, filter, take } from 'rxjs';
import { API_ERROR_TOKEN } from 'src/app/shared/constants';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {
  errorMessage: string | undefined = undefined;

  constructor(
    @Inject(API_ERROR_TOKEN) public apiError$$: BehaviorSubject<Error | null>
  ) { }

  ngOnInit(): void {
    let counter = 0
    this.apiError$$.asObservable()
      .pipe(
        filter(err => !!(err && err?.message))
      )
      .subscribe(err => {
        this.errorMessage = err?.message + `${counter++}`;
      })
  }

}
