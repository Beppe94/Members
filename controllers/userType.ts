type AdminUser = {
    role: "admin";
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    adminPermission: boolean;
}

type MemberUser = {
    role: "member";
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

type GuestUser = {
    role: "guest";

}

type User = AdminUser | MemberUser | GuestUser;

export default User;