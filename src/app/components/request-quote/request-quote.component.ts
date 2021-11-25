import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { ValueState } from '../../states/value/value.state';
import { ValueStateActions } from 'src/app/states/value/value.actions';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.sass']
})

export class RequestQuoteComponent implements OnInit, OnDestroy {
  radioValue = 'A';
  radioValue2 = '1'
  @Select(ValueState.value) value$!: Observable<number>;
  value: number = 0;
  @Input() showRequest: boolean = false;
  private valueSub!: Subscription;

  constructor(private store: Store) {
  }

  ngOnDestroy(): void {
    this.valueSub.unsubscribe();
  }

  ngOnInit(): void {
    this.valueSub = this.store.select(ValueState.value).subscribe((value: number) => {
      this.value = value;
    })
  }

  closeComponent(): void {
    this.showRequest = !this.showRequest
  }

  increment(): void {
    this.store.dispatch(new ValueStateActions.IncrementValue())
  }

  decrement(): void {
    this.store.dispatch(new ValueStateActions.DecrementValue())
  }

  setValue(value: number | null): void {
    if (value) {
      this.store.dispatch(new ValueStateActions.SetValueByUser(value));
    } else {
      value = 0
    }
  }
}
