import { Component, OnInit } from '@angular/core';
import {Lesson} from "./lesson.model";
import {LessonService} from "./lesson.service";

@Component({
  moduleId: module.id,
  selector: 'app-lessons',
  providers: [LessonService],
  templateUrl: 'lessons.component.html',
  styleUrls: ['lesson.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Lesson[];
  lessonService: LessonService;

  constructor() {
    this.lessonService = new LessonService();
  }

  ngOnInit() {
    this.lessons = this.lessonService.getLessons();
  }

  addLesson(): void {
    this.lessons.push(this.lessonService.createLesson());
  }

}
