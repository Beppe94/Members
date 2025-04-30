type AdminUser = {
    role: "admin";
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    dashboardAccess: boolean;
}

type MemberUser = {
    role: "member";
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

