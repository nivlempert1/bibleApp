import { Component, OnInit } from '@angular/core';
import {ReaderService} from "../../services/reader.service";

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  constructor(private readerService: ReaderService) { }

  async ngOnInit() {
    await this.readerService.fetchChapterText();
  }

  get chapterText(): string {
    return this.readerService.chapterText;
  }

  get chapter(): string {
    return this.readerService.chapter;
  }

  next() {
  }

  prev() {
  }
}
