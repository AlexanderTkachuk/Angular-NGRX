import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistentService {
  set(key: string, data: any) {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }
  get(key: string): any {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
      console.error('Error gatting from localStorage', error);
      return window.localStorage.getItem(null);
    }
  }
  remove(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  }
}
