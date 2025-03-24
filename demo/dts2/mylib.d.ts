export type Status = "success" | "fail";

// Using type assertion because it's likely that we might want to loop over these department options
const Departments = ["Electronics", "Home & Kitchen", "Toys & Games"] as const;
export type Department = (typeof Departments)[number];

export interface ApiResponseItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    department: Department;
}

export interface ApiResponse {
    status: Status;
    data: {
        items: ApiResponseItem[]
    }
}

export function apiResponse(): ApiResponse | undefined;
