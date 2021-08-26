export interface IpFetch {
  ip:        string;
  latitude:  string;
  longitude: string;
  time_zone: {
    name:              string;
    offset:            number;
    current_time:      string;
    current_time_unix: number;
    is_dst:            boolean;
    dst_savings:       number;
  }
}

export interface Thresholds {
  temperature: {
    low: number;
    high: number
  };
  windSpeed: number;
  probOfPrecip: number;
}

export interface TempHour {
  month:       number;
  day:         number;
  hour:        number;
  temperature: number;
}

export interface WindHour {
  month:       number;
  day:         number;
  hour:        number;
  windSpeed:   number;
}

export interface PreciptHour {
  month:       number;
  day:         number;
  hour:        number;
  precipProb:  number;
}

export interface CleanedHour {
  month:       number;
  day:         number;
  hour:        number;
  inCalendar:  boolean;
  temperature: number;
  windSpeed:   number;
  precipProb:  number;
}

export interface Notice {
  nice: boolean;
  hours: number;
}

export interface Time {
  number: number;
  name: string;
}

export interface HttpResponse {
  code: number;
  message: string;
  description: string;
}