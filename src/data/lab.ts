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
  { src: '/lab/heidelberg-castle.webp', title: 'Heidelberg Castle', kind: 'sketch', meta: 'Heidelberg · March 2025 · Fineliner on paper', alt: 'Loose fineliner sketch of the ruined towers of Heidelberg Castle behind bare winter trees', width: 1800, height: 1350 },
  { src: '/lab/rs27-lamp.webp', title: 'Porsche 911 Carrera RS 2.7 lamp', kind: 'fabrication', meta: '2024 · Laser-engraved acrylic, wooden base, LED', alt: 'Glowing edge-lit acrylic panel engraved with the side profile of a classic Porsche 911, on a wooden base engraved with its name', width: 1080, height: 810 },
  { src: '/lab/doku-zentrum.webp', title: 'Documentation Centre, Nuremberg', kind: 'sketch', meta: 'Nuremberg · March 2025 · Fineliner on paper', alt: 'Fineliner sketch of the angular glass and steel walkway piercing the old stone building of the Nuremberg Documentation Centre', width: 1800, height: 1350 },
  { src: '/lab/laser-cutting.webp', title: 'Laser cutting', kind: 'fabrication', meta: 'Process · Laser cutter', alt: 'Animated close-up of a laser cutter head tracing shapes in a sheet of board', width: 658, height: 494 },
  { src: '/lab/gt3-rs-mr.webp', title: 'Porsche 911 GT3 RS MR', kind: 'sketch', meta: 'January 2024 · Ink and coloured pencil', alt: 'Detailed ink drawing of a Manthey-Racing Porsche 911 GT3 RS with yellow brake callipers', width: 1800, height: 1390 },
  { src: '/lab/city-map-model.webp', title: 'Dongshi fishponds', kind: 'fabrication', meta: 'Dongshi, Chiayi · Laser-cut chipboard, layered', alt: 'Close-up of a layered laser-cut chipboard model of the Dongshi fishpond grid, with embankments raised above the recessed ponds', width: 1477, height: 1108 },
  { src: '/lab/street-dome.webp', title: 'City moat by the Opera House', kind: 'sketch', meta: 'Nuremberg · March 2025 · Fineliner on paper', alt: 'Quick fineliner sketch of the green moat below Nuremberg\'s old city wall, with a path curving past the domed Opera House', width: 1800, height: 1350 },
  { src: '/lab/twisted-vase.webp', title: 'Twisted vase', kind: 'fabrication', meta: '2025 · Designed in Grasshopper · 3D-printed PLA', alt: 'White 3D-printed vase with twisting ribs on the bed of a printer', width: 1058, height: 793 },
  { src: '/lab/918-spyder.webp', title: 'Porsche 918 Spyder', kind: 'sketch', meta: '2019 · Graphite pencil', alt: 'Pencil drawing of a Porsche 918 Spyder seen from the rear three-quarter view', width: 1258, height: 946 },
];
