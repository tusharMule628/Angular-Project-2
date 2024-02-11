import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding-syntax',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding-syntax.component.html',
  styleUrl: './two-way-binding-syntax.component.css'
})
export class TwoWayBindingSyntaxComponent {
variableName:string|undefined
}
