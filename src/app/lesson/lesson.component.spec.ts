/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LessonComponent } from './lesson.component';

describe('Component: Lesson', () => {
  it('should create an instance', () => {
    let component = new LessonComponent();
    expect(component).toBeTruthy();
  });
});
