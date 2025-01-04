export type Resource = {
  resource_id?: number;
  resource_name?: string;
  resource_desc?: string;
  resource_score?: number;
  resource_status?: number;
  resource_created_at?: string;
  resource_updated_at?: string;
};

export enum ResourceStatus {
    Inactive = 0,
    Active = 1
  }