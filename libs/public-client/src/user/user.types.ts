export interface UserWire {
  id: number;
  username: string;
  rankId: number;
  look: string;
  motto: string;
  online: boolean;
}

export type UsersOnlineResponse = UserWire[];

export type UserByIdResponse = UserWire;
