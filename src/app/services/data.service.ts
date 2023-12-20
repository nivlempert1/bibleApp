import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async fetchChapter(chapter: string): Promise<string> {
    const response = await fetch(`http://www.sefaria.org/api/texts/${chapter}`);
    const json = await response.json()
    if (json.ref != chapter) {
      throw new Error(`Unexpected chapter. Expected ${chapter} but got ${json.ref}`)
    }
    return json.text.join();
  }
}
