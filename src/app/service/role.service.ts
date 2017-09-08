import { Injectable } from '@angular/core';

import { Role } from '../model/role.class';

const ROLES: Role[] = [
  {id: 1, name: 'Admin'},
  {id: 2, name: 'User'}
];

@Injectable()
export class RoleService {

  getRoles(): Role[] {
    return ROLES;
  }

  getRoleByName(name: string): Role {
    return ROLES.find(role => role.name === name);
  }

}