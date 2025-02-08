import { createSignal, onMount } from "solid-js";
import { EmuLayout } from "../EmuLayout";
import {
  adminEmuTextsService,
  AdminEmuTextsWire,
} from "@crabshell/admin-client";
import toast from "solid-toast";
import { A } from "@solidjs/router";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";

export function EmuTextsScreen() {
  const [texts, setTexts] = createSignal<AdminEmuTextsWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminEmuTextsService.getAll();
      console.log("Loaded texts:", response);
      setTexts(response);
    } catch (e) {
      toast.error("Failed to load emu texts");
      throw e;
    }
  });

  const handleRowEdit = async (
    originalRow: AdminEmuTextsWire,
    modifiedRow: AdminEmuTextsWire
  ) => {
    try {
      await adminEmuTextsService.updateByKey(originalRow.key, modifiedRow);
      setTexts((prevTexts) =>
        prevTexts.map((text) =>
          text.key === originalRow.key ? modifiedRow : text
        )
      );
      toast.success(`Updated text for key: ${modifiedRow.key}`);
    } catch (e) {
      toast.error(`Failed to update text for key: ${modifiedRow.key}`);
      console.error(e);
    }
  };

  const columns: ITableColumn<AdminEmuTextsWire>[] = [
    {
      key: "key",
      header: "Key",
      selector: (row) => row.key,
      filterable: true,
      sortable: true,
      editable: true,
    },
    {
      key: "value",
      header: "Value",
      filterable: true,
      selector: (row) => row.value,
      editable: true,
    },
  ];

  return (
    <EmuLayout>
      <SiteTitle>EMU Texts</SiteTitle>
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;width:100%;">
        <h1>EMU Texts</h1>
        <A href="/emu-texts/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={texts}
          getRowId={(row) => row.key}
          onRowEdit={handleRowEdit}
        />
      </div>
    </EmuLayout>
  );
}

export default EmuTextsScreen;
