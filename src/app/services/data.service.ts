import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cache_: Record<string, string> = {};

  constructor() { }

  async fetchChapterText(chapter: string): Promise<string> {
    if (this.cache_[chapter]) {
      return this.cache_[chapter];
    }

    const response = await fetch(`http://www.sefaria.org/api/texts/${chapter}`);
    const json = await response.json()
    if (json.ref != chapter) {
      throw new Error(`Unexpected chapter. Expected ${chapter} but got ${json.ref}`)
    }

    const text = json.text.join();
    this.cache_[chapter] = text;

    return text;
  }
}
