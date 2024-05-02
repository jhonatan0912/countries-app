import { Component, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  onSearch = output<string>();

  term: FormControl = new FormControl();

  ngOnInit(): void {
    this.term.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(200),
      ).subscribe({
        next: (term) => {
          this.onSearch.emit(term);
        }
      });
  }
}
