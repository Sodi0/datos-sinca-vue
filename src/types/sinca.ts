export interface TableRow {
  status?: string | null;
  color?: string | null;
  [key: string]: any;
}

export interface RealtimeEntry {
  tableRow?: TableRow | null;
  [key: string]: any;
}

export interface SincaStation {
  id?: string | number;
  nombre?: string | null;
  comuna?: string | null;
  region?: string | null;
  lat?: number | null;
  lon?: number | null;
  realtime?: RealtimeEntry[] | null;
  [key: string]: any;
}

export type SincaApiResponse = SincaStation[];
