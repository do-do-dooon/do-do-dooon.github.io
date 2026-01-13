
export interface WorkItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  isVideo?: boolean;
  accentColor?: string;
}

export enum WorkCategory {
  FILM = 'Film',
  THEATRE = 'Theatre',
  ALBUMS = 'Albums',
  SOUND_DESIGN = 'Sound Design'
}
