import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  title = 'Pipe';
  today = new Date();
  student = {
    name: 'Nguyen Van A',
    age: 20,
    mark: 8.5
  }

  courses = ["HTML", "CSS", "JS", "Angular", "React", "NodeJS"]
}
