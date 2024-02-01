import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCoverSmallCard:string = "assets/placeholder_img.jpg"

  @Input()
  photoAlt: string = ""

  @Input()
  smallCardTitle:string = ""

  @Input()
  smallCardDescription:string = ""

  @Input()
  id:string = "0"

}
