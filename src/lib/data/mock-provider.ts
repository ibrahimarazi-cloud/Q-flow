import type {QualityDataSource} from "./types";
import type {Nonconformity,RootCauseAnalysis} from "../domain/types";
export const mockDataSource:QualityDataSource={id:"mock",label:"Mock Veri",getInitialSnapshot:()=>({nonconformities:[] as Nonconformity[],rootCauses:[] as RootCauseAnalysis[],fetchedAt:new Date().toISOString(),source:"mock"}),load:async()=>({nonconformities:[],rootCauses:[],fetchedAt:new Date().toISOString(),source:"mock"})};
