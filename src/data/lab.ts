// Lab page items. Add a new entry to show it on /lab/.
// kind: 'sketch' or 'fabrication'. Images live in public/lab/.
export type LabItem = {
  src: string;
  title: string;
  kind: 'sketch' | 'fabrication';
  meta: string; // place · date · medium
  alt: string;
  width: number;
  height: number;
};

export const lab: LabItem[] = [
  { src: '/lab/heidelberg-castle.webp', title: 'Heidelberg Castle', kind: 'sketch', meta: 'Heidelberg · March 2025 · Pen on paper', alt: 'Loose pen sketch of the ruined towers of Heidelberg Castle behind bare winter trees', width: 1800, height: 1350 },
  { src: '/lab/rs27-lamp.webp', title: 'Porsche 911 Carrera RS 2.7 lamp', kind: 'fabrication', meta: '2024 · Laser-engraved acrylic, wooden base, LED', alt: 'Glowing edge-lit acrylic panel engraved with the side profile of a classic Porsche 911, on a wooden base engraved with its name', width: 1080, height: 810 },
  { src: '/lab/doku-zentrum.webp', title: 'Documentation Centre, Nuremberg', kind: 'sketch', meta: 'Nuremberg · March 2025 · Pen on paper', alt: 'Pen sketch of the angular glass and steel walkway piercing the old stone building of the Nuremberg Documentation Centre', width: 1800, height: 1350 },
  { src: '/lab/laser-cutting.webp', title: 'Laser cutting', kind: 'fabrication', meta: 'Process · Laser cutter', alt: 'Animated close-up of a laser cutter head tracing shapes in a sheet of board', width: 658, height: 494 },
  { src: '/lab/gt3-rs-mr.webp', title: 'Porsche 911 GT3 RS MR', kind: 'sketch', meta: 'January 2024 · Ink and coloured pencil', alt: 'Detailed ink drawing of a Manthey-Racing Porsche 911 GT3 RS with yellow brake callipers', width: 1800, height: 1390 },
  { src: '/lab/city-map-model.webp', title: 'Layered city map', kind: 'fabrication', meta: 'Laser-cut chipboard, layered', alt: 'Close-up of a laser-cut chipboard city map, with street grid raised above recessed blocks', width: 1477, height: 1108 },
  { src: '/lab/street-dome.webp', title: 'Street study', kind: 'sketch', meta: '2025 · Pen on paper', alt: 'Quick pen sketch of a street curving past a domed church and a long row of buildings', width: 1800, height: 1350 },
  { src: '/lab/twisted-vase.webp', title: 'Twisted vase', kind: 'fabrication', meta: 'Parametric form · 3D-printed PLA', alt: 'White 3D-printed vase with twisting ribs on the bed of a printer', width: 1058, height: 793 },
  { src: '/lab/918-spyder.webp', title: 'Porsche 918 Spyder', kind: 'sketch', meta: 'Graphite pencil', alt: 'Pencil drawing of a Porsche 918 Spyder seen from the rear three-quarter view', width: 1258, height: 946 },
];
