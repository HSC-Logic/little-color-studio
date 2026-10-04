export type Point={x:number;y:number};
export type Stroke={points:Point[];color:string;size:number;erase?:boolean};
export type Snapshot={regions:Record<string,string>;strokes:Stroke[]};
export type Artwork={id:string;templateId:string;templateVersion:number;title:string;regions:Record<string,string>;strokes:Stroke[];preview:string;createdAt:string;updatedAt:string};
export type Template={id:string;title:string;category:'Animals'|'Nature'|'Vehicles'|'Imagination';file:string;version:number};
