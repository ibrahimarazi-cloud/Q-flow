import type { Nonconformity, RootCauseAnalysis } from "../domain/types";
import type { DataSourceId } from "./source-config";
export interface QualityDataSnapshot { nonconformities: Nonconformity[]; rootCauses: RootCauseAnalysis[]; fetchedAt: string; source: DataSourceId; }
export interface QualityDataSource { readonly id: DataSourceId; readonly label: string; getInitialSnapshot?(): QualityDataSnapshot | null; load(): Promise<QualityDataSnapshot>; }
export type DataStatus = "idle" | "loading" | "ready" | "error";
export interface DataSourceState { status: DataStatus; lastSyncedAt: string | null; errorMessage: string | null; sourceLabel: string; sourceId: DataSourceId; }
