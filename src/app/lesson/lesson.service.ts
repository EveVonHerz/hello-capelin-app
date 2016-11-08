import { Injectable } from '@angular/core';
import {Lesson} from "./lesson.model";

@Injectable()
export class LessonService {

  constructor() { }

  getLessons(): Lesson[] {
    let lesson1 = new Lesson('Test');
    return [lesson1];
  }

  createLesson(): Lesson {
    return new Lesson('Test 2', 'Test');
  }

}
