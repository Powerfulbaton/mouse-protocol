import type { MouseStatus } from "../mouse-types.ts";
import { VENDOR_ID } from "../vendors.ts";

const PRODUCT_ID = 0xfc61;
const REPORT_ID = 0x02;
const OP_LOCK = 0xf5;

export class RedragonM612HidClient {
  readonly pollIntervalMs = 0;
  readonly device: HIDDevice;

  constructor(device: HIDDevice) {
    this.device = device;
  }

  static isSupported(device: HIDDevice): boolean {
    return device.vendorId === VENDOR_ID.redragon
      && device.productId === PRODUCT_ID;
  }

  async open(): Promise<void> {
    if (!this.device.opened) await this.device.open();
  }

  async close(): Promise<void> {
    if (this.device.opened) await this.device.close();
  }

  displayName(): string {
    return this.device.productName || "Redragon M612";
  }

  isWireless(): boolean {
    return false;
  }

  getDpiOptions(): number[] {
    return [500, 1000, 2000, 3000, 4000];
  }

  async readStatus(): Promise<MouseStatus> {
    await this.open();

    return {
      brand: "Redragon",
      name: this.displayName(),
      dpi: 500,
      pollingRateHz: 1000,
      supportedPollingRates: [125, 250, 500, 1000],
      batteryPercent: null,
      batteryState: "Unknown",
      activeProfile: 1,
      connectionType: "Wired",
      connectionDetail: "Wired USB · write-only config",
      firmware: [],
    };
  }

  async setDpi(dpi: number): Promise<number> {
    if (!this.getDpiOptions().includes(dpi)) {
      throw new Error(`This mouse does not support ${dpi} DPI.`);
    }

    await this.open();

    // Unlock configuration
    await this.device.sendFeatureReport(
      REPORT_ID,
      new Uint8Array([
        OP_LOCK,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
      ]),
    );

    const dpiRaw: Record<number, number> = {
      500: 0x000e,
      1000: 0x001b,
      2000: 0x0035,
      3000: 0x004f,
      4000: 0x006a,
    };

    const raw = dpiRaw[dpi];
    const lo = raw & 0xff;
    const hi = (raw >> 8) & 0xff;

    const offsets = [0x44, 0x4a, 0x50, 0x56, 0x5c];

    for (const offset of offsets) {
      const report = new Uint8Array([
        0xf3,
        offset,
        0x00,
        0x05,
        0x00,
        0x00,
        0x00,
        0x01,
        lo,
        hi,
        lo,
        hi,
        0x00,
        0x00,
        0x00,
      ]);

      await this.device.sendFeatureReport(REPORT_ID, report);
    }

    // Lock configuration
    await this.device.sendFeatureReport(
      REPORT_ID,
      new Uint8Array([
        OP_LOCK,
        0x01,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
      ]),
    );

    return dpi;
  }
}
