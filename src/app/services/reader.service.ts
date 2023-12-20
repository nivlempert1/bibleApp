import { Injectable } from '@angular/core';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  private chapter_: string = "Genesis 1";
  private chapterText_: string = "";

  constructor(private dataService: DataService) { }

  async fetchChapterText(): Promise<string> {
    const text = await this.dataService.fetchChapterText(this.chapter);
    this.chapterText_ = text;
    return text;
  }

  get chapterText(): string {
    return this.chapterText_;
  }

  get chapter(): string {
    return this.chapter_;
  }
}
