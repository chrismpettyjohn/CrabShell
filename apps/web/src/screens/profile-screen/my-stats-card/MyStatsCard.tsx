import { ProfileScreenProps } from "../ProfileScreen.types";

export function MyStatsCard({ user: profile }: ProfileScreenProps) {
  return (
    <div class="card" style="width:100%;padding:0;margin:0;">
      <div class="high-scores-page scores-table active" style="height:100%;width:100%;padding:0;margin:0;">
        <table style="height:100%;width:100%;padding:0;margin:0;">
          <tbody>
            <tr>
              <td style="font-weight: bold;">Credits</td>
              <td>3,000</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Time Online</td>
              <td>48 hours</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Games Played</td>
              <td>48</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Events Won</td>
              <td>4</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Messages Sent</td>
              <td>4,320</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Furniture Owned</td>
              <td>7,203</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
