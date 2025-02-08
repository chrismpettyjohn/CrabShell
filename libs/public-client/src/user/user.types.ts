export interface UserWire {
  id: number;
  username: string;
  rankID: number;
  look: string;
  motto: string;
  online: boolean;
}

export type UsersOnlineResponse = UserWire[];

export type UserByIdResponse = UserWire;
