export interface IWeatherData {
    meta: IMeta;
    data: IData;
}

export interface IData {
    [x: string]: any;
    time: ITime[];
}

export interface ITime {
    from:      Date;
    to:        Date;
    variables: { [key: string]: IVariable };
    reason?:   IReason;
}

export interface IReason {
    variables: any[];
    sources:   any[];
}

export interface IVariable {
    value: number;
    units: string;
}

export interface IMeta {
    reftime:       Date;
    location:      ILocation;
    superlocation: ILocation;
    sublocations:  any[];
}

export interface ILocation {
    name:          string;
    path:          string;
    areacode:      string;
    longitude:     string;
    latitude:      string;
    areaclass:     string;
    superareacode: string;
}