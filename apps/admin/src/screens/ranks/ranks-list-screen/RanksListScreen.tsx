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
      console.log("Loaded ranks:", response);
      setRanks(response);
    } catch (e) {
      toast.error("Failed to fetch ranks");
      throw e;
    }
  });

  const handleRowEdit = async (
    originalRow: AdminRankWire,
    modifiedRow: AdminRankWire
  ) => {
    try {
      await adminRankService.updateById(originalRow.id, modifiedRow);
      setRanks((prevRanks) =>
        prevRanks.map((rank) =>
          rank.id === originalRow.id ? modifiedRow : rank
        )
      );
      toast.success(`Updated rank: ${modifiedRow.name}`);
    } catch (e) {
      toast.error(`Failed to update rank: ${modifiedRow.name}`);
      console.error(e);
    }
  };

  const columns: ITableColumn<AdminRankWire>[] = [
    {
      key: "id",
      header: "ID",
      filterable: true,
      sortable: true,
      selector: (row) => row.id,
      width: 60,
    },
    {
      key: "badgeCode",
      header: "Badge",
      filterable: true,
      sortable: true,
      editable: true,
      selector: (row) => row.badgeCode,
      customEdit: (row: AdminRankWire) => (
        <>
          <img
            src={`${BADGE_BASE_URL}/${row.badgeCode}${BADGE_EXT}`}
            style="object-fit: contain; height: 45px;"
          />
          <input type="text" value={row.badgeCode} />
        </>
      ),
      customRender: (badgeCode) => (
        <img
          src={`${BADGE_BASE_URL}/${badgeCode}${BADGE_EXT}`}
          style="object-fit: contain; height: 45px;"
        />
      ),
      width: 80,
    },
    {
      key: "name",
      header: "Name",
      selector: (row) => row.name,
      filterable: true,
      sortable: true,
      editable: true,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Ranks</SiteTitle>
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;width:100%;">
        <h1>Ranks</h1>
        <A href="/ranks/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={ranks}
          getRowId={(row) => `${row.id}`}
          onRowClick={(row) => navigate(`/ranks/${row.id}`)}
          onRowEdit={handleRowEdit}
        />
      </div>
    </UserLayout>
  );
}

export default RanksListScreen;
