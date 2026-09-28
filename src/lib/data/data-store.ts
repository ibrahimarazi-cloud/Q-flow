import {mockDataSource} from "./mock-provider";
import {DATA_SOURCE,type DataSourceId} from "./source-config";
import type {DataSourceState,QualityDataSnapshot,QualityDataSource} from "./types";
let activeSource:QualityDataSource=mockDataSource; let snapshot:QualityDataSnapshot=mockDataSource.getInitialSnapshot!();
let state:DataSourceState={status:"ready",lastSyncedAt:snapshot.fetchedAt,errorMessage:null,sourceLabel:mockDataSource.label,sourceId:"mock"};
const listeners=new Set<()=>void>();let inFlight:Promise<void>|null=null;export function subscribeToData(l:()=>void){listeners.add(l);return()=>listeners.delete(l);}export function getSnapshot(){return snapshot;}export function getDataState(){return state;}export function getActiveSource(){return activeSource;}
export function refreshData(){if(inFlight)return inFlight;state={...state,status:"loading"};listeners.forEach(l=>l());inFlight=activeSource.load().then(next=>{snapshot=next;state={status:"ready",lastSyncedAt:next.fetchedAt,errorMessage:null,sourceLabel:activeSource.label,sourceId:activeSource.id};}).catch(e=>{state={...state,status:"error",errorMessage:e instanceof Error?e.message:"Veri alınamadı"};}).finally(()=>{inFlight=null;listeners.forEach(l=>l());});return inFlight;}
export function setDataSource(source:QualityDataSource){activeSource=source;snapshot=source.getInitialSnapshot?.()??{nonconformities:[],rootCauses:[],fetchedAt:new Date().toISOString(),source:source.id};state={status:source.getInitialSnapshot?"ready":"idle",lastSyncedAt:source.getInitialSnapshot?snapshot.fetchedAt:null,errorMessage:null,sourceLabel:source.label,sourceId:source.id};listeners.forEach(l=>l());}
export function selectDataSource(id:DataSourceId){void id;return refreshData();}
