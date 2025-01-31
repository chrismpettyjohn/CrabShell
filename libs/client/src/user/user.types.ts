export interface UserWire {
  id: number;
  username: string;
  look: string;
  motto: string;
}

export type UsersOnlineResponse = UserWire[];

export type UserByIdResponse = UserWire;
