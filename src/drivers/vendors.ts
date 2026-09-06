import { ATK_COMPX_PRODUCT_IDS } from "./atk/products.ts";
import { EGG_WE_HID_FILTERS } from "./endgame/egg-we-control.ts";
import { LINGBAO_PRODUCTS, LINGBAO_VENDOR_ID } from "./lingbao/hid.ts";
import { GWOLVES_PRODUCTS } from "./gwolves/products.ts";
import { LAMZU_INCA_PRODUCTS, LAMZU_INCA_VENDOR_ID } from "@openmouse/protocol/lamzu";
import {
  MCHOSE_CONFIG_USAGE,
  MCHOSE_CONFIG_USAGE_PAGE,
  MCHOSE_DOCK_PRODUCT_ID,
  MCHOSE_DOCK_USAGE,
  MCHOSE_DOCK_USAGE_PAGE,
} from "@openmouse/protocol/mchose";
import {
  LOGITECH_BOLT_PRODUCT_IDS,
  LOGITECH_DIRECT_PRODUCT_IDS,
} from "@openmouse/protocol/logitech";
import { RAZER_PRODUCTS, RAZER_PRODUCT_IDS } from "@openmouse/protocol/razer-devices";
import { PULSAR_XS1_PRODUCT_IDS } from "@openmouse/protocol/pulsar";
import {
  BITMOUSE_PRODUCT_IDS,
  BITMOUSE_USAGE,
  BITMOUSE_USAGE_PAGE,
} from "@openmouse/protocol/bitmouse";
import {
  NINJUTSO_LEGACY_MOUSE_PRODUCT_IDS,
  NINJUTSO_LEGACY_RECEIVER_PRODUCT_IDS,
  NINJUTSO_LEGACY_VENDOR_ID,
  NINJUTSO_MOUSE_PRODUCT_IDS,
  NINJUTSO_RECEIVER_PRODUCT_IDS,
  NINJUTSO_VENDOR_ID,
} from "@openmouse/protocol/ninjutso";
import {
  ZAUNKOENIG_PRODUCT_IDS,
  ZAUNKOENIG_USAGE_PAGE,
  ZAUNKOENIG_VENDOR_ID,
} from "@openmouse/protocol/zaunkoenig";
import {
  TEEVOLUTION_LCD_USAGE,
  TEEVOLUTION_LCD_USAGE_PAGE,
} from "@openmouse/protocol/teevolution";
import {
  WOOTING_CONFIG_USAGE,
  WOOTING_CONFIG_USAGE_PAGE,
  WOOTING_PRODUCT_IDS,
  WOOTING_VENDOR_ID,
} from "@openmouse/protocol/wooting";
import {
  STEELSERIES_PRODUCTS,
  STEELSERIES_VENDOR_ID,
} from "@openmouse/protocol/steelseries";
import {
  WALLHACK_KEYBOARD_ALT_VENDOR_ID,
  WALLHACK_KEYBOARD_PRODUCT_IDS,
  WALLHACK_KEYBOARD_USAGE,
  WALLHACK_KEYBOARD_USAGE_PAGE,
  WALLHACK_MOUSE_PRODUCT_IDS,
  WALLHACK_MOUSE_USAGE,
  WALLHACK_MOUSE_USAGE_PAGE,
  WALLHACK_VENDOR_ID,
} from "@openmouse/protocol/wallhack";

export const VENDOR_ID = {
  pulsar: 0x3710,
  endgameGear: 0x3367,
  wlmouse: 0x36a7,
  lamzu: 0x373e,
  lamzuInca: LAMZU_INCA_VENDOR_ID,
  attackshark: 0x373e,
  logitech: 0x046d,
  orbital: 0x1915,
  razer: 0x1532,
  teevolution: 0x3554,
  vgn: 0x3554,
  atk: 0x373b,
  finalmouse: 0x361d,
  keychron: 0x3434,
  moddo: 0x2fe3,
  attackShark: 0x25a7,
  attackSharkX: 0x1d57,
  ninjutsoLegacy: NINJUTSO_LEGACY_VENDOR_ID,
  ninjutso: NINJUTSO_VENDOR_ID,
  zaunkoenig: ZAUNKOENIG_VENDOR_ID,
  fantech: 0x3151,
  wooting: WOOTING_VENDOR_ID,
  wallhack: WALLHACK_VENDOR_ID,
  wallhackKeyboardAlt: WALLHACK_KEYBOARD_ALT_VENDOR_ID,
  gwolves: 0x33e4,
  steelseries: STEELSERIES_VENDOR_ID,
  glorious: 0x093a,
  gloriousClassic: 0x258a,
  gloriousClassicI: 0x22d4,
  gloriousClassicIWired: 0x320f,
  gloriousO3: 0x3794,
  mchose: 0x3837,
  ksnakeUsb: 0xa8a4,
  ksnakeDongle: 0xa8a5,
  redragon: 0x04d9,
} as const;

/**
 * SteelSeries ships keyboards, headsets, and USB audio under 0x1038, so there
 * must never be a VID-only SteelSeries filter.
 */
export const STEELSERIES_RIVAL3_FILTERS: HIDDeviceFilter[] = [...STEELSERIES_PRODUCTS.keys()].map(
  (productId) => ({ vendorId: STEELSERIES_VENDOR_ID, productId }),
);

export const GLORIOUS_PRODUCTS: ReadonlyMap<number, { name: string; wireless: boolean }> = new Map([
  [0x821d, { name: "Model I 2 Wireless", wireless: false }],
  [0x822a, { name: "Model O 2 Wireless", wireless: false }],
  [0x822b, { name: "Model O 2 Bluetooth", wireless: true }],
  [0x822d, { name: "Model O 2 Wireless receiver", wireless: true }],
  [0x826a, { name: "Model O 2 Mini Wireless", wireless: false }],
  [0x826d, { name: "Model O 2 Mini Wireless receiver", wireless: true }],
]);

export const GLORIOUS_CLASSIC_PRODUCTS: ReadonlyMap<
  number,
  { name: string; wireless: boolean; generation: "core1" | "core2" }
> = new Map([
  [0x2011, { name: "Model O Wireless", wireless: false, generation: "core1" }],
  [0x2022, { name: "Model O Wireless", wireless: true, generation: "core1" }],
  [0x2012, { name: "Model D Wireless", wireless: false, generation: "core1" }],
  [0x2023, { name: "Model D Wireless", wireless: true, generation: "core1" }],
  [0x2013, { name: "Model O- Wireless", wireless: false, generation: "core1" }],
  [0x2024, { name: "Model O- Wireless receiver", wireless: true, generation: "core1" }],
  [0x2014, { name: "Model D- Wireless", wireless: false, generation: "core1" }],
  [0x2025, { name: "Model D- Wireless", wireless: true, generation: "core1" }],
  [0x2033, { name: "Model O 2 Wireless", wireless: true, generation: "core1" }],
  [0x823a, { name: "Model O V2 Wired", wireless: false, generation: "core1" }],
  [0x2015, { name: "Model O Pro", wireless: false, generation: "core1" }],
  [0x2027, { name: "Model O Pro Wireless receiver", wireless: true, generation: "core1" }],
  [0x2018, { name: "Series One Pro", wireless: false, generation: "core1" }],
  [0x2031, { name: "Series One Pro Wireless receiver", wireless: true, generation: "core1" }],
  [0x201a, { name: "Model D 2 PRO", wireless: false, generation: "core1" }],
  [0x2034, { name: "Model D 2 PRO Wireless receiver", wireless: true, generation: "core1" }],
  [0x1503, { name: "Model I", wireless: false, generation: "core1" }],
  [0x821a, { name: "Model I 2 Wireless", wireless: false, generation: "core1" }],
  [0x831a, { name: "Model I 2 Wired", wireless: false, generation: "core1" }],
  [0xa312, { name: "Model O3 Wireless", wireless: true, generation: "core2" }],
  [0xa300, { name: "Model O3 Wireless receiver", wireless: true, generation: "core2" }],
  [0x201b, { name: "Model O2 Pro 4K/8K", wireless: false, generation: "core2" }],
  [0x2035, { name: "Model O2 Pro 4K/8K Wireless receiver", wireless: true, generation: "core2" }],
  [0x201c, { name: "Model D 2 PRO 4K/8KHz Edition", wireless: false, generation: "core2" }],
  [0x2036, { name: "Model D 2 PRO 4K/8KHz Edition receiver", wireless: true, generation: "core2" }],
]);

export const GLORIOUS_CLASSIC_HID_FILTERS: HIDDeviceFilter[] = [
  ...GLORIOUS_CLASSIC_PRODUCTS.keys(),
].flatMap((productId) => [
  { vendorId: VENDOR_ID.gloriousClassic, productId },
  { vendorId: VENDOR_ID.gloriousClassicI, productId },
  { vendorId: VENDOR_ID.gloriousClassicIWired, productId },
  { vendorId: VENDOR_ID.gloriousO3, productId },
]);

export const KEYCHRON_NAPE_PRODUCT_IDS = [0x0440, 0xd026, 0xd029] as const;

export const KEYCHRON_NAPE_HID_FILTERS: HIDDeviceFilter[] = KEYCHRON_NAPE_PRODUCT_IDS.map(
  (productId) => ({
    vendorId: VENDOR_ID.keychron,
    productId,
    usagePage: 0xff60,
    usage: 0x61,
  }),
);

export const KEYCHRON_M6_HID_FILTERS: HIDDeviceFilter[] = [
  { vendorId: VENDOR_ID.keychron, productId: 0xd060, usagePage: 0xffc1, usage: 0x01 },
  { vendorId: VENDOR_ID.keychron, productId: 0xd029, usagePage: 0xffc1, usage: 0x01 },
];

export const MODDO_HID_FILTERS: HIDDeviceFilter[] = [
  { vendorId: VENDOR_ID.moddo, usagePage: 0xff, usage: 0x01 },
  { vendorId: VENDOR_ID.moddo, usagePage: 0xff, usage: 0x02 },
];

export const PULSAR_XS1_HID_FILTERS: HIDDeviceFilter[] = [...PULSAR_XS1_PRODUCT_IDS].map(
  (productId) => ({
    vendorId: VENDOR_ID.pulsar,
    productId,
    usagePage: 0xffff,
    usage: 0x01,
  }),
);

export const RAZER_MOUSE_DOCK_PRO_CONTROL_FILTERS: HIDDeviceFilter[] = [0x00a4].map(
  (productId) => ({
    vendorId: VENDOR_ID.razer,
    productId,
    usagePage: 0x01,
    usage: 0x02,
  }),
);

export const RAZER_VIPER_V2_CONTROL_FILTERS: HIDDeviceFilter[] = [0x00a5, 0x00a6].map(
  (productId) => ({
    vendorId: VENDOR_ID.razer,
    productId,
    usagePage: 0x01,
    usage: 0x02,
  }),
);

export const RAZER_VIPER_V3_CONTROL_FILTERS: HIDDeviceFilter[] = [0x00c0, 0x00c1].map(
  (productId) => ({
    vendorId: VENDOR_ID.razer,
    productId,
    usagePage: 0x01,
    usage: 0x02,
  }),
);

export const RAZER_VIPER_MINI_CONTROL_FILTERS: HIDDeviceFilter[] = [0x008a].map(
  (productId) => ({
    vendorId: VENDOR_ID.razer,
    productId,
    usagePage: 0x01,
    usage: 0x02,
  }),
);

export const RAZER_VIPER_CONTROL_FILTERS: HIDDeviceFilter[] = [0x0078].map(
  (productId) => ({
    vendorId: VENDOR_ID.razer,
    productId,
    usagePage: 0x01,
    usage: 0x02,
  }),
);

export const RAZER_VIPER_V4_CONTROL_FILTERS: HIDDeviceFilter[] = [0x00e5, 0x00e6].flatMap(
  (productId) =>
    [0x01, 0x0c].map((usagePage) => ({
      vendorId: VENDOR_ID.razer,
      productId,
      usagePage,
    })),
);

export const RAZER_DEATHADDER_ESSENTIAL_FILTERS: HIDDeviceFilter[] = [
  0x006e,
  0x0071,
  0x0098,
].map((productId) => ({ vendorId: VENDOR_ID.razer, productId }));

export const RAZER_COBRA_FILTERS: HIDDeviceFilter[] = [0x00a3].map(
  (productId) => ({ vendorId: VENDOR_ID.razer, productId }),
);

const RAZER_NARROWED_PRODUCT_IDS: ReadonlySet<number> = new Set([
  0x00a4,
  0x00a5,
  0x00a6,
  0x00c0,
  0x00c1,
  0x006e,
  0x0071,
  0x0098,
  0x0084,
]);

export const RAZER_REGISTRY_FILTERS: HIDDeviceFilter[] = RAZER_PRODUCT_IDS
  .filter((productId) => !RAZER_NARROWED_PRODUCT_IDS.has(productId))
  .filter((productId) => !RAZER_PRODUCTS.get(productId)?.nativeOnly)
  .map((productId) => ({ vendorId: VENDOR_ID.razer, productId }));

export const RAZER_DEATHADDER_V2_FILTERS: HIDDeviceFilter[] = [0x0084].map(
  (productId) => ({ vendorId: VENDOR_ID.razer, productId }),
);

export const TEEVOLUTION_PRODUCT_IDS = [0xf520, 0xf523, 0xf5bb, 0xf522] as const;

export const LOGITECH_RECEIVER_PRODUCT_IDS = [
  0xc54d,
  0xc539,
  0xc0a8,
  0xc547,
  ...LOGITECH_BOLT_PRODUCT_IDS,
] as const;

export const LOGITECH_PRODUCT_IDS = [
  ...LOGITECH_RECEIVER_PRODUCT_IDS,
  ...LOGITECH_DIRECT_PRODUCT_IDS,
] as const;

export const LOGITECH_RECEIVER_FILTERS: HIDDeviceFilter[] = [
  { vendorId: VENDOR_ID.logitech, usagePage: 0xff00, usage: 0x0001 },
  { vendorId: VENDOR_ID.logitech, usagePage: 0xff00, usage: 0x0002 },
];

export const LOGITECH_RECEIVER_FILTER: HIDDeviceFilter = LOGITECH_RECEIVER_FILTERS[0];

export const WLMOUSE_PRODUCTS: ReadonlyMap<
  number,
  { name: string; wireless: boolean }
> = new Map([
  [0xa860, { name: "Beast G", wireless: true }],
  [0xa861, { name: "Beast G", wireless: false }],
  [0xa863, { name: "Huan", wireless: true }],
  [0xa864, { name: "Huan", wireless: false }],
  [0xa866, { name: "Beast Miao", wireless: true }],
  [0xa867, { name: "Beast Miao", wireless: false }],
  [0xa868, { name: "Beast Mini Pro", wireless: true }],
  [0xa869, { name: "Beast Mini Pro", wireless: false }],
  [0xa870, { name: "Beast X Pro", wireless: true }],
  [0xa871, { name: "Beast X Pro", wireless: false }],
  [0xa872, { name: "Strider", wireless: true }],
  [0xa873, { name: "Strider", wireless: false }],
  [0xa874, { name: "Ying", wireless: true }],
  [0xa875, { name: "Ying", wireless: false }],
  [0xa878, { name: "Sword X", wireless: true }],
  [0xa879, { name: "Sword X", wireless: false }],
  [0xa880, { name: "Beast Max", wireless: true }],
  [0xa881, { name: "Beast Max", wireless: false }],
  [0xa882, { name: "WLmouse 1K receiver", wireless: true }],
  [0xa883, { name: "Beast X", wireless: true }],
  [0xa884, { name: "Beast X", wireless: false }],
  [0xa885, { name: "Beast Mini", wireless: true }],
  [0xa886, { name: "Beast Mini", wireless: false }],
]);

export const WLMOUSE_MAX_POLLING_HZ: ReadonlyMap<number, number> = new Map([
  [0xa882, 1000],
]);

export const WOOTING_HID_FILTERS: HIDDeviceFilter[] = WOOTING_PRODUCT_IDS.map(
  (productId) => ({
    vendorId: WOOTING_VENDOR_ID,
    productId,
    usagePage: WOOTING_CONFIG_USAGE_PAGE,
    usage: WOOTING_CONFIG_USAGE,
  }),
);

export const WALLHACK_HID_FILTERS: HIDDeviceFilter[] = [
  ...[...WALLHACK_MOUSE_PRODUCT_IDS].map((productId) => ({
    vendorId: WALLHACK_VENDOR_ID,
    productId,
    usagePage: WALLHACK_MOUSE_USAGE_PAGE,
    usage: WALLHACK_MOUSE_USAGE,
  })),
  ...[...WALLHACK_KEYBOARD_PRODUCT_IDS].flatMap((productId) =>
    [WALLHACK_VENDOR_ID, WALLHACK_KEYBOARD_ALT_VENDOR_ID].map((vendorId) => ({
      vendorId,
      productId,
      usagePage: WALLHACK_KEYBOARD_USAGE_PAGE,
      usage: WALLHACK_KEYBOARD_USAGE,
    })),
  ),
];

export const LAMZU_INCA_HID_FILTERS: HIDDeviceFilter[] = [...LAMZU_INCA_PRODUCTS.keys()].map(
  (productId) => ({
    vendorId: VENDOR_ID.lamzuInca,
    productId,
    usagePage: 0xffff,
  }),
);

export const LINGBAO_HID_FILTERS: HIDDeviceFilter[] = [...LINGBAO_PRODUCTS.keys()].map(
  (productId) => ({
    vendorId: LINGBAO_VENDOR_ID,
    productId,
    usagePage: 0xffff,
    usage: 0x02,
  }),
);

export const SUPPORTED_HID_FILTERS: HIDDeviceFilter[] = [
  ...ZAUNKOENIG_PRODUCT_IDS.map((productId) => ({
    vendorId: ZAUNKOENIG_VENDOR_ID,
    productId,
    usagePage: ZAUNKOENIG_USAGE_PAGE,
  })),

  { vendorId: VENDOR_ID.finalmouse, productId: 0x0100, usagePage: 0xff00, usage: 0x0001 },
  { vendorId: VENDOR_ID.pulsar },
  ...PULSAR_XS1_HID_FILTERS,

  { vendorId: VENDOR_ID.vgn },
  { vendorId: VENDOR_ID.endgameGear },
  { vendorId: VENDOR_ID.wlmouse },
  { vendorId: VENDOR_ID.lamzu },
  ...LAMZU_INCA_HID_FILTERS,

  { vendorId: VENDOR_ID.orbital, usagePage: 0xff0a, usage: 1 },

  { vendorId: VENDOR_ID.mchose, usagePage: MCHOSE_CONFIG_USAGE_PAGE, usage: MCHOSE_CONFIG_USAGE },
  {
    vendorId: VENDOR_ID.mchose,
    productId: MCHOSE_DOCK_PRODUCT_ID,
    usagePage: MCHOSE_DOCK_USAGE_PAGE,
    usage: MCHOSE_DOCK_USAGE,
  },

  ...TEEVOLUTION_PRODUCT_IDS.map((productId) => ({
    vendorId: VENDOR_ID.teevolution,
    productId,
  })),

  ...TEEVOLUTION_PRODUCT_IDS.map((productId) => ({
    vendorId: VENDOR_ID.teevolution,
    productId,
    usagePage: TEEVOLUTION_LCD_USAGE_PAGE,
    usage: TEEVOLUTION_LCD_USAGE,
  })),

  ...RAZER_MOUSE_DOCK_PRO_CONTROL_FILTERS,
  ...RAZER_VIPER_V2_CONTROL_FILTERS,
  ...RAZER_VIPER_V3_CONTROL_FILTERS,
  ...RAZER_VIPER_MINI_CONTROL_FILTERS,
  ...RAZER_VIPER_CONTROL_FILTERS,

  { vendorId: VENDOR_ID.vgn, productId: 0xfb56 },
  { vendorId: VENDOR_ID.vgn, productId: 0xfb57 },

  { vendorId: VENDOR_ID.atk, usagePage: 0xff02, usage: 2 },

  ...BITMOUSE_PRODUCT_IDS.map((productId) => ({
    vendorId: VENDOR_ID.atk,
    productId,
    usagePage: BITMOUSE_USAGE_PAGE,
    usage: BITMOUSE_USAGE,
  })),

  ...ATK_COMPX_PRODUCT_IDS.map((productId) => ({
    vendorId: VENDOR_ID.vgn,
    productId,
    usagePage: 0xff02,
    usage: 2,
  })),

  { vendorId: VENDOR_ID.attackShark },
  { vendorId: VENDOR_ID.attackSharkX },

  ...RAZER_VIPER_V4_CONTROL_FILTERS,
  ...RAZER_DEATHADDER_ESSENTIAL_FILTERS,
  ...RAZER_COBRA_FILTERS,

  ...KEYCHRON_NAPE_HID_FILTERS,
  ...RAZER_REGISTRY_FILTERS,
  ...RAZER_DEATHADDER_V2_FILTERS,
  ...EGG_WE_HID_FILTERS,
  ...MODDO_HID_FILTERS,
  ...WOOTING_HID_FILTERS,

  ...[...NINJUTSO_LEGACY_MOUSE_PRODUCT_IDS, ...NINJUTSO_LEGACY_RECEIVER_PRODUCT_IDS].map(
    (productId) => ({
      vendorId: NINJUTSO_LEGACY_VENDOR_ID,
      productId,
    }),
  ),

  ...[...NINJUTSO_MOUSE_PRODUCT_IDS, ...NINJUTSO_RECEIVER_PRODUCT_IDS].map(
    (productId) => ({
      vendorId: NINJUTSO_VENDOR_ID,
      productId,
    }),
  ),

  ...LOGITECH_RECEIVER_FILTERS,
  ...LINGBAO_HID_FILTERS,

  { vendorId: VENDOR_ID.fantech, usagePage: 0xffff, usage: 0x02 },

  ...WALLHACK_HID_FILTERS,

  ...[...GWOLVES_PRODUCTS.keys()].map((productId) => ({
    vendorId: VENDOR_ID.gwolves,
    productId,
    usagePage: 0xff02,
  })),

  ...STEELSERIES_RIVAL3_FILTERS,

  { vendorId: VENDOR_ID.glorious },
  ...GLORIOUS_CLASSIC_HID_FILTERS,

  { vendorId: VENDOR_ID.ksnakeUsb, productId: 0x2255, usagePage: 0xff01, usage: 0x10 },
  { vendorId: VENDOR_ID.ksnakeDongle, productId: 0x2255, usagePage: 0xff01, usage: 0x10 },

  // Redragon M612 — VID 0x04d9, PID 0xfc61.
  { vendorId: VENDOR_ID.redragon, productId: 0xfc61 },
];
