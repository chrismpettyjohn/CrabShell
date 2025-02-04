import { createSignal, onMount } from "solid-js";
import { EmuLayout } from "../EmuLayout";
import {
  adminEmuSettingsService,
  AdminEmuSettingsWire,
} from "@crabshell/admin-client";
import toast from "solid-toast";

export function EmuSettingsScreen() {
  const [settings, setSettings] = createSignal<AdminEmuSettingsWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminEmuSettingsService.getAll();
      setSettings(response);
    } catch (e: any) {
      toast.error("Failed to load emu settings");
      throw e;
    }
  });

  return (
    <EmuLayout>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {settings().map((_, index) => (
            <tr>
              <td>{_.key}</td>
              <td>{_.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </EmuLayout>
  );
}

export default EmuSettingsScreen;
