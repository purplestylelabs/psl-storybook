
// ————————————————————————————————————————————————————————————————
// 1) Utility types & helpers
// ————————————————————————————————————————————————————————————————

/** e.g. "0px", "25px", ... */
export type Pixel = `${number}px`;

/**
 * Build a spacing scale of `<step>` increments up to `<max>`,
 * keyed by the numeric string: "0","5","10",…
 */
export function makeSpacing<
  Step extends number = 5,
  Max extends number = 100
>(step: Step, max: Max) {
  const result = {} as Record<`${number}`, Pixel>;
  const count = Math.floor(max / step);
  for (let i = 0; i <= count; i++) {
    const key = `${i * step}` as const;
    result[key] = `${i * step}px`;
  }
  return result;
}

/** Turn an array into a readonly literal tuple + union type helper */
export function makeTuple<const T extends string[]>(...arr: T) {
  return arr;
}


// ————————————————————————————————————————————————————————————————
// 2) Token definitions
// ————————————————————————————————————————————————————————————————

export const spacing = makeSpacing(5, 100);
export type SpacingKey   = keyof typeof spacing;      // "0" | "5" | … | "100"
export type SpacingValue = typeof spacing[SpacingKey]; // "0px" | "5px" | …


export const colors = {
  black:              '#000',
  white:              '#fff',
  pernia:             '#e83647',
  'pernia-lite':      '#f9d9e4',
  'pernia-lighter':   '#ffe7ef',
  'pernia-black':     '#212121',
  'pernia-dark-grey': '#757575',
  'pernia-red':       '#ef3e00',
  'loyalty-bg':       '#f4f1ff',
  loyalty:            '#6030ff',
  'grey-light':       '#c2c2c2',
  placeholder:        '#fafafa',
  'placeholder-bg':   '#dbdbdb',
  'account-input':    '#8c8c8c',
  disabled:           '#bbb',
  success:            '#4BB543',
  slate:              '#eef0f5',
  'light-grey':       '#f4f4f4',
  'light-pink':       '#ffdee1',
  'special-red':      '#9f0032',
  'warning-red':      '#ff3800',
  label:              '#333',
  grey:               '#acacac',
  'dark-grey':        '#666',
} as const;
export type ColorKey   = keyof typeof colors;     // union of all color names
export type ColorValue = typeof colors[ColorKey];  // union of all hex strings


export const colorOverrides = makeTuple(
  'pernia-black',
  'pernia-white',
  'pernia',
);
export type ColorOverride = typeof colorOverrides[number];


export const colorsOnHover = makeTuple(
  'pernia-black',
  'pernia-white',
  'pernia',
);
export type ColorOnHover = typeof colorsOnHover[number];


export const breakpointsMin = {
  xs:     '959px',
  sm:     '1279px',
  md:     '1439px',
  lg:     '1919px',
  b0:     '2559px',
  b1:     '1919px',
  b2:     '1679px',
  b3:     '1439px',
  b4:     '1279px',
  b5:     '1079px',
  tablet: '768px',
} as const;
export type BreakpointKey   = keyof typeof breakpointsMin;
export type BreakpointValue = typeof breakpointsMin[BreakpointKey];


export const containerWidths = {
  xs:     '840px',
  sm:     '960px',
  md:     '1080px',
  lg:     '1440px',
  b0:     '2304px',
  b1:     '1728px',
  b2:     '1512px',
  b3:     '1296px',
  b4:     '1152px',
  b5:     '1020px',
  tablet: '768px',
} as const;
export type ContainerKey   = keyof typeof containerWidths;
export type ContainerValue = typeof containerWidths[ContainerKey];


export const borders = {
  none: '0',
  sm:   '1px solid #ccc',
  md:   '2px solid #bbb',
} as const;
export type BorderKey   = keyof typeof borders;
export type BorderValue = typeof borders[BorderKey];


// ————————————————————————————————————————————————————————————————
// 3) Aggregate all tokens for easy theme injection
// ————————————————————————————————————————————————————————————————

export const tokens = {
  spacing,
  colors,
  colorOverrides,
  colorsOnHover,
  breakpointsMin,
  containerWidths,
  borders,
} as const;
export type Tokens = typeof tokens;
