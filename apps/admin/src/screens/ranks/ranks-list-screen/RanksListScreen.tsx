// RanksListScreen.tsx
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import { adminRankService, AdminRankWire } from "@crabshell/admin-client";
import { A, useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { BADGE_BASE_URL, BADGE_EXT } from "../../../App.const";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";

export function RanksListScreen() {
  const navigate = useNavigate();

  const fetchRanks = async ({
    page,
    sort,
    filter,
  }: {
    page: number;
    sort?: string;
    filter?: Record<number, any>;
  }) => {
    try {
      return await adminRankService.getAll();
    } catch (e) {
      toast.error("Failed to fetch ranks");
      throw e;
    }
  };

  const columns: ITableColumn<AdminRankWire>[] = [
    {
      header: "ID",
      selector: (row) => row.id,
      sortable: true,
      filterable: true,
      filterType: "number",
      width: 20,
    },
    {
      header: "Badge",
      selector: (row) => (
        <img
          src={`${BADGE_BASE_URL}/${row.badgeCode}${BADGE_EXT}`}
          style="object-fit: contain; height: 45px;"
        />
      ),
      width: 20,
    },
    {
      header: "Name",
      selector: (row) => row.name,
      sortable: true,
      filterable: true,
      filterType: "string",
      width: 60,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Ranks</SiteTitle>
      <div style="display:flex;justify-content:flex-end;margin-bottom:14px;width:100%;">
        <A href="/ranks/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <IntegratedTable
        columns={columns}
        fetchData={fetchRanks}
        onRowClick={(row) => navigate(`/ranks/${row.id}`)}
      />
    </UserLayout>
  );
}

export default RanksListScreen;
