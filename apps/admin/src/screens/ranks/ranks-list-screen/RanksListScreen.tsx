import { createSignal, onMount } from "solid-js";
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
  const [ranks, setRanks] = createSignal<AdminRankWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminRankService.getAll();
      setRanks(response);
    } catch (e) {
      toast.error("Failed to fetch ranks");
      throw e;
    }
  });

  const columns: ITableColumn<AdminRankWire>[] = [
    {
      header: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: 60,
    },
    {
      header: "Badge",
      selector: (row) => row.badgeCode,
      customRender: (badgeCode) => (
        <img
          src={`${BADGE_BASE_URL}/${badgeCode}${BADGE_EXT}`}
          style="object-fit: contain; height: 45px;"
        />
      ),
      width: 80,
    },
    {
      header: "Name",
      selector: (row) => row.name,
      sortable: true,
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
        rows={ranks}
        onRowClick={(row) => navigate(`/ranks/${row.id}`)}
      />
    </UserLayout>
  );
}

export default RanksListScreen;
