import type {Template} from './types';
import {additionalTemplates} from './additional-templates';

const rows=[
['happy-kitten','Happy kitten','Animals'],['playful-puppy','Playful puppy','Animals'],['friendly-elephant','Friendly elephant','Animals'],['turtle-pond','Turtle beside a pond','Animals'],['butterfly-flowers','Butterfly and flowers','Animals'],
['sunny-garden','Sunny garden','Nature'],['rainbow-hills','Rainbow over hills','Nature'],['apple-tree','Tree with apples','Nature'],['underwater-fish','Underwater fish scene','Nature'],['snail-mushrooms','Snail beside mushrooms','Nature'],
['small-car','Small car on a road','Vehicles'],['three-carriage-train','Train with three carriages','Vehicles'],['sailboat','Sailboat','Vehicles'],['cloud-airplane','Airplane among clouds','Vehicles'],['field-tractor','Tractor beside a field','Vehicles'],
['rocket-planets','Rocket and planets','Imagination'],['friendly-dinosaur','Friendly dinosaur','Imagination'],['small-castle','Small castle','Imagination'],['ice-cream-fruit','Ice cream and fruit','Imagination'],['toy-robot','Toy robot','Imagination']
] as const;
export const templates:Template[]=[...rows.map(([id,title,category])=>({id,title,category,file:`templates/${id}.svg`,version:1})),...additionalTemplates];
export const assetUrl=(path:string)=>`${import.meta.env.BASE_URL}${path}`;
