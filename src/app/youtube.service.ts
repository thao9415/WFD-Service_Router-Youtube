import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'IGyA9CxWwbs', song: 'Hahaha'},
    {id: 'IGyA9CxWwbs', song: 'Hahaha'},
    {id: 'IGyA9CxWwbs', song: 'Hahaha'},

    {id: '5QfXwgkJITA', song: 'Myta'}
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
