import { createSignal, onMount } from "solid-js";
import { EmuLayout } from "../EmuLayout";
import {
  adminEmuSettingsService,
  AdminEmuSettingsWire,
} from "@crabshell/admin-client";
import toast from "solid-toast";
import { A } from "@solidjs/router";
import {
  SiteTitle,
  IntegratedTable,
  ITableColumn,
} from "@crabshell/shared-web";

export function EmuSettingsScreen() {
  const [settings, setSettings] = createSignal<AdminEmuSettingsWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminEmuSettingsService.getAll();
      console.log("Loaded settings:", response);
      setSettings(response);
    } catch (e) {
      toast.error("Failed to load emu settings");
      throw e;
    }
  });

  const handleRowEdit = async (
    originalRow: AdminEmuSettingsWire,
    modifiedRow: AdminEmuSettingsWire
  ) => {
    try {
      await adminEmuSettingsService.updateByKey(originalRow.key, modifiedRow);
      setSettings((prevSettings) =>
        prevSettings.map((setting) =>
          setting.key === originalRow.key ? modifiedRow : setting
        )
      );
      toast.success(`Updated setting for key: ${modifiedRow.key}`);
    } catch (e) {
      toast.error(`Failed to update setting for key: ${modifiedRow.key}`);
      console.error(e);
    }
  };

  const columns: ITableColumn<AdminEmuSettingsWire>[] = [
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
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={settings}
          getRowId={(row) => row.key}
          onRowEdit={handleRowEdit}
        />
      </div>
    </EmuLayout>
  );
}

export default EmuSettingsScreen;
