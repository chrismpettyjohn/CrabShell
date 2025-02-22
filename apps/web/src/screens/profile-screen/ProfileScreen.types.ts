import { UserWire } from "@crabshell/public-client";

export interface ProfileScreenProps {
  user(): UserWire | null;
}
