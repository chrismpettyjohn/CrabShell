import { createSignal, onMount } from "solid-js";
import { EmuLayout } from "../EmuLayout";
import {
  adminEmuSettingsService,
  AdminEmuSettingsWire,
} from "@crabshell/admin-client";
import toast from "solid-toast";
import { A } from "@solidjs/router";
import { SiteTitle } from "../../../components/site-title/SiteTitle";
import {
  IntegratedTable,
  ITableColumn,
} from "../../../components/integrated-table/IntegratedTable";

export function EmuSettingsScreen() {
  const [settings, setSettings] = createSignal<AdminEmuSettingsWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminEmuSettingsService.getAll();
      setSettings(response);
    } catch (e) {
      toast.error("Failed to load emu settings");
      throw e;
    }
  });

  const columns: ITableColumn<AdminEmuSettingsWire>[] = [
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
      <SiteTitle>EMU Settings</SiteTitle>
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;width:100%;">
        <h1>EMU Settings</h1>
        <A href="/emu-settings/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <IntegratedTable columns={columns} rows={settings} />
    </EmuLayout>
  );
}

export default EmuSettingsScreen;
