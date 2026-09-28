import { WORKFLOW_STATUSES } from "./constants";
export type WorkflowStage = (typeof WORKFLOW_STATUSES)[number];
export const WORKFLOW_LABELS: Record<WorkflowStage,string> = {
 "New":"Yeni", "Committee Review":"Kurul İncelemesi", "Action Assigned":"Aksiyon Atandı", "Waiting for Action":"Aksiyon Bekleniyor", "Root Cause Submitted":"Kök Neden Sunuldu", "Committee Approval":"Kurul Onayı", "Closed":"Kapalı"
};
export const OPEN_WORKFLOW_STATUSES = WORKFLOW_STATUSES.filter(s=>s!=="Closed");
export function isActive(status: WorkflowStage){ return status!=="Closed"; }
