import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { A, useParams } from "@solidjs/router";
import { RankLayout } from "../RankLayout";

export function RankMembersScreen() {
  const { rankId } = useParams();

  return (
    <RankLayout rankId={Number(rankId)}>
      <SiteTitle>Rank Members</SiteTitle>
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;width:100%;">
        <h1>Members</h1>
        <A href={`/ranks/${rankId}/members/add`}>
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Add
          </button>
        </A>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {Array({ length: 10 }).map((_, i) => (
            <tr>
              <td>1</td>
              <td>Chris</td>
            </tr>
          ))}
        </tbody>
      </table>
    </RankLayout>
  );
}

export default RankMembersScreen;
