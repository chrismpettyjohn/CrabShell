import { createSignal } from "solid-js";
import { ProfileScreenProps } from "../ProfileScreen.types";

export function MyRoomsCard({ user: profile }: ProfileScreenProps) {
  const [rooms, setRooms] = createSignal<any[]>([]);
  return (
    <div class="card">
      <h2>Rooms ({rooms().length})</h2>
    </div>
  );
}
