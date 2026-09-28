import type { DEPARTMENTS, FAILURE_CATEGORIES, FAILURE_FAMILIES, PRODUCTION_STATIONS, SEVERITIES, WORKFLOW_STATUSES } from "./constants";

export type ProductionStation = (typeof PRODUCTION_STATIONS)[number];
export type Department = (typeof DEPARTMENTS)[number];
export type WorkflowStatus = (typeof WORKFLOW_STATUSES)[number];
export type Severity = (typeof SEVERITIES)[number];
export type FailureCategory = (typeof FAILURE_CATEGORIES)[number];
export type FailureFamily = (typeof FAILURE_FAMILIES)[number];

export interface Nonconformity {
  id: string; code: string; title: string; description: string;
  station: ProductionStation; department: Department; category: FailureCategory;
  failureFamily: FailureFamily; severity: Severity; status: WorkflowStatus;
  openedAt: string; dueDate: string; closedAt: string | null; reportedBy: string;
  assignedTo: string; productCode: string; quantityAffected: number; workOrder: string;
  ncNumber?: string; nonconformityType?: string; detectedAt?: string | null;
  detectionMethod?: string; isAccepted?: boolean | null; actionOwner?: string;
  projectCode?: string; affectsProject?: boolean | null;
}

export interface RootCauseAnalysis {
  id: string; nonconformityId: string; method: "5 Why" | "Ishikawa" | "8D";
  rootCause: string; correctiveAction: string; preventiveAction: string;
  submittedBy: string; submittedAt: string; approvedAt: string | null;
  effectiveness: "Effective" | "Partially Effective" | "Not Effective" | "Pending";
  nonconformityNumber?: string; startedAt?: string | null; possibleCauses?: string;
  proposedSolutions?: string; decision?: string; performedAction?: string; closingNote?: string;
}
export type SeverityLevel = "low" | "medium" | "high" | "critical";
