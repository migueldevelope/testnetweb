import { Name } from './name';
import { Address } from './address';
import { RoleEnum, StatusEnum } from './enums/enums';

export interface ViewInputUser {
    email: string;
    username: string;
    password: string;
    name: Name;
    address: Address;
    phone: string;
    status: StatusEnum;
    role: RoleEnum;
}