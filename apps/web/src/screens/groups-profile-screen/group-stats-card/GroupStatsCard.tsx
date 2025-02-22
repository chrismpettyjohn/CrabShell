import { getMonthDateYear } from "../../../App.util";
import { GroupsProfileScreenProps } from "../GroupsProfileScreen.types";

export function GroupStatsCard({ group }: GroupsProfileScreenProps) {
  return (
    <div class="card" style="width:100%;padding:0;margin:0;">
      <div class="high-scores-page scores-table active" style="height:100%;width:100%;padding:0;margin:0;">
        <table style="height:100%;width:100%;padding:0;margin:0;">
          <tbody>
            <tr>
              <td style="font-weight: bold;">Founded</td>
              <td>{getMonthDateYear(new Date(group().createdAt))}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Owned By</td>
              <td>LeChris</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Total Members</td>
              <td>1</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Headquarters</td>
              <td>#1 - Daddy's Home</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
