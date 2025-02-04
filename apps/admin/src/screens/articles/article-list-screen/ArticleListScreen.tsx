import { IMAGER_BASE_URL } from "../../../App.const";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { UserLayout } from "../../../components/user-layout/UserLayout";

export function ArticleListScreen() {
  return (
    <UserLayout>
      <SiteTitle>Articles</SiteTitle>
      <table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Edited At</th>
            <th>Posted At</th>
          </tr>
        </thead>
        <tbody>
          {[].map((_, i) => (
            <tr>
              <td>#{i + 1}</td>
              <td>
                <img
                  class="avatar"
                  src={`${IMAGER_BASE_URL}?figure=${_.look}&headonly=1`}
                  style="object-fit: contain"
                />
              </td>
              <td>{_.username}</td>
              <td>{_.respectsReceived}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserLayout>
  );
}

export default ArticleListScreen;
