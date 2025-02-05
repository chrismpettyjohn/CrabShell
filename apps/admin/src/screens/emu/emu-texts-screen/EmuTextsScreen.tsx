import {
  adminEmuTextsService,
  AdminEmuTextsWire,
} from "@crabshell/admin-client";
import { EmuLayout } from "../EmuLayout";
import { createSignal, onMount } from "solid-js";
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
      setTexts(response);
    } catch (e) {
      toast.error("Failed to load emu texts");
      throw e;
    }
  });

  const columns: ITableColumn<AdminEmuTextsWire>[] = [
    {
      header: "Key",
      selector: (row) => row.key,
      sortable: true,
    },
    {
      header: "Value",
      selector: (row) => row.value,
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
      <IntegratedTable columns={columns} rows={texts} />
    </EmuLayout>
  );
}

export default EmuTextsScreen;
