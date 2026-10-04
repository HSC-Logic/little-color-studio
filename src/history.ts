import type {Snapshot} from './types';
export class History{
  private items:Snapshot[]=[]; private index=-1;
  constructor(initial:Snapshot,private max=50){this.push(initial)}
  push(value:Snapshot){this.items=this.items.slice(0,this.index+1);this.items.push(structuredClone(value));if(this.items.length>this.max)this.items.shift();this.index=this.items.length-1}
  undo(){if(this.index>0)this.index--;return structuredClone(this.items[this.index])}
  redo(){if(this.index<this.items.length-1)this.index++;return structuredClone(this.items[this.index])}
  get canUndo(){return this.index>0} get canRedo(){return this.index<this.items.length-1}
}
