import type {Nonconformity,RootCauseAnalysis} from "../domain/types";
import {isSameNcNumber} from "../integrations/microsoft/nc-number";
import {getActiveSource,getSnapshot} from "./data-store";
export interface QualityDataProvider{readonly sourceLabel:string;getNonconformities():Nonconformity[];getNonconformityById(id:string):Nonconformity|undefined;getNonconformityByNumber(numberOrCode:string):Nonconformity|undefined;getRootCauses():RootCauseAnalysis[];getRootCauseFor(nonconformityId:string):RootCauseAnalysis|undefined;}
const provider:QualityDataProvider={get sourceLabel(){return getActiveSource().label;},getNonconformities:()=>getSnapshot().nonconformities,getNonconformityById:id=>getSnapshot().nonconformities.find(n=>n.id===id),getNonconformityByNumber:n=>getSnapshot().nonconformities.find(n=>isSameNcNumber(n.ncNumber??n.code,n)||n.code===n),getRootCauses:()=>getSnapshot().rootCauses,getRootCauseFor:id=>{const s=getSnapshot();const direct=s.rootCauses.find(r=>r.nonconformityId===id);if(direct)return direct;const record=s.nonconformities.find(n=>n.id===id);const key=record?.ncNumber??record?.code;return key?s.rootCauses.find(r=>isSameNcNumber(r.nonconformityNumber,key)):undefined;}};
export function getDataProvider(){return provider;}
export {refreshData,setDataSource,subscribeToData,getDataState} from "./data-store";
