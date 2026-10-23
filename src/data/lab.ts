// Lab page items. Add a new entry to show it on /lab/.
// kind: 'sketch' (places), 'automotive' or 'fabrication'. Images live in public/lab/.
export type LabItem = {
  src: string;
  title: string;
  kind: 'sketch' | 'automotive' | 'fabrication';
  meta: string; // place · date · medium
  alt: string;
  width: number;
  height: number;
};

export const lab: LabItem[] = [
  { src: '/lab/seine-riverbank.webp', title: 'On the Seine', kind: 'sketch', meta: 'Paris · September 2025 · Fineliner on paper', alt: 'A fineliner sketch held up over the Seine, matching the river, moored barges and the Eiffel Tower behind it', width: 1800, height: 1350 },
  { src: '/lab/heidelberg-castle.webp', title: 'Heidelberg Castle', kind: 'sketch', meta: 'Heidelberg · March 2025 · Fineliner on paper', alt: 'Loose fineliner sketch of the ruined towers of Heidelberg Castle behind bare winter trees', width: 1800, height: 1350 },
  { src: '/lab/rs27-lamp.webp', title: 'Porsche 911 Carrera RS 2.7 lamp', kind: 'fabrication', meta: '2024 · Laser-engraved acrylic, wooden base, LED', alt: 'Glowing edge-lit acrylic panel engraved with the side profile of a classic Porsche 911, on a wooden base engraved with its name', width: 1080, height: 810 },
  { src: '/lab/doku-zentrum.webp', title: 'Documentation Centre, Nuremberg', kind: 'sketch', meta: 'Nuremberg · March 2025 · Fineliner on paper', alt: 'Fineliner sketch of the angular glass and steel walkway piercing the old stone building of the Nuremberg Documentation Centre', width: 1800, height: 1350 },
  { src: '/lab/singer-911-targa.webp', title: 'Singer 911 Targa', kind: 'automotive', meta: 'February 2022 · Rollerball pen and pencil', alt: 'Drawing of a restored Porsche 911 Targa in front of a row of pencil-drawn arches', width: 1800, height: 1350 },
  { src: '/lab/tokyo-tower.webp', title: 'Beneath Tokyo Tower', kind: 'sketch', meta: 'Tokyo · July 2025 · Fineliner on paper', alt: 'Detailed fineliner drawing of a shaped pine in a temple garden, with Tokyo Tower rising behind the tiled roofs', width: 1189, height: 1800 },
  { src: '/lab/laser-cutting.webp', title: 'Laser cutting', kind: 'fabrication', meta: 'Process · Laser cutter', alt: 'Animated close-up of a laser cutter head tracing shapes in a sheet of board', width: 658, height: 494 },
  { src: '/lab/street-dome.webp', title: 'City moat by the Opera House', kind: 'sketch', meta: 'Nuremberg · March 2025 · Fineliner on paper', alt: 'Quick fineliner sketch of the green moat below Nuremberg\'s old city wall, with a path curving past the domed Opera House', width: 1800, height: 1350 },
  { src: '/lab/ford-gt40.webp', title: 'Ford GT40', kind: 'automotive', meta: '2019 · Watercolour', alt: 'Watercolour of a light blue Ford GT40 with red nose stripes racing along a track, motion streaks behind it', width: 1206, height: 801 },
  { src: '/lab/city-map-model.webp', title: 'Dongshi fishponds', kind: 'fabrication', meta: 'Dongshi, Chiayi · Laser-cut chipboard, layered', alt: 'Close-up of a layered laser-cut chipboard model of the Dongshi fishpond grid, with embankments raised above the recessed ponds', width: 1477, height: 1108 },
  { src: '/lab/pont-de-bir-hakeim.webp', title: 'Pont de Bir-Hakeim', kind: 'sketch', meta: 'Paris · September 2025 · Fineliner on paper', alt: 'A fineliner sketch held up on site in front of the Pont de Bir-Hakeim, its iron columns framing the Eiffel Tower', width: 1800, height: 1350 },
  { src: '/lab/rose.webp', title: 'Rose', kind: 'sketch', meta: '2023 · Coloured pencil', alt: 'Coloured pencil drawing of a single pink rose on a long stem with one leaf', width: 1350, height: 1800 },
  { src: '/lab/bmw-welt.webp', title: 'BMW Welt', kind: 'sketch', meta: 'Munich · March 2023 · Ballpoint pen', alt: 'Quick ballpoint sketch of the swirling double-cone roof of BMW Welt, with a small tree and figure for scale', width: 1800, height: 1382 },
  { src: '/lab/maserati-granturismo.webp', title: 'Maserati GranTurismo', kind: 'automotive', meta: 'December 2024 · Fineliner and pencil', alt: 'Fineliner and pencil drawing of a new Maserati GranTurismo from the front three-quarter view', width: 1800, height: 1350 },
  { src: '/lab/twisted-vase.webp', title: 'Twisted vase', kind: 'fabrication', meta: '2025 · Designed in Grasshopper · 3D-printed PLA', alt: 'White 3D-printed vase with twisting ribs on the bed of a printer', width: 1058, height: 793 },
  { src: '/lab/812-n-largo.webp', title: 'Ferrari 812 N-Largo', kind: 'automotive', meta: '2024 · Coloured pencil', alt: 'Coloured pencil drawing of a red Novitec N-Largo Ferrari 812 from the front three-quarter view', width: 1800, height: 1350 },
  { src: '/lab/singer-911-martini.webp', title: 'Singer 911', kind: 'automotive', meta: '2020 · Coloured pencil', alt: 'Coloured pencil drawing of a man leaning on a silver Singer 911 with Martini racing stripes', width: 1206, height: 886 },
  { src: '/lab/964-rwb.webp', title: 'Porsche 964 RWB', kind: 'automotive', meta: '2019 · Graphite pencil', alt: 'Pencil drawing of a widebody RWB Porsche 964 from the rear, with a large wing and quad exhausts', width: 1206, height: 892 },
  { src: '/lab/huayra-pearl.webp', title: 'Pagani Huayra Pearl', kind: 'automotive', meta: '2020 · Coloured pencil', alt: 'Coloured pencil drawing of a blue Pagani Huayra Pearl with gullwing doors open and its name in script', width: 1206, height: 833 },
  { src: '/lab/812-rear.webp', title: 'Ferrari 812, rear', kind: 'automotive', meta: '2020 · Fineliner', alt: 'Close cropped fineliner hatching study of the rear lights and exhausts of a Ferrari 812', width: 878, height: 1242 },
  { src: '/lab/laferrari-doors.webp', title: 'LaFerrari', kind: 'automotive', meta: '2019 · Watercolour', alt: 'Watercolour of a red LaFerrari head-on with both butterfly doors open', width: 1206, height: 786 },
  { src: '/lab/sls-black-series.webp', title: 'Mercedes-AMG SLS Black Series', kind: 'automotive', meta: '2019 · Graphite pencil', alt: 'Pencil drawing of a Mercedes-AMG SLS Black Series from the front three-quarter view', width: 1206, height: 811 },
  { src: '/lab/rs6-watercolour.webp', title: 'Audi RS6 Avant', kind: 'automotive', meta: '2020 · Watercolour', alt: 'Grey watercolour of an Audi RS6 Avant with gold wheels under a cloudy sky', width: 1206, height: 808 },
  { src: '/lab/mclaren-720s.webp', title: 'McLaren 720S', kind: 'automotive', meta: '2019 · Coloured pencil', alt: 'Coloured pencil drawing of a blue McLaren 720S from the rear with both dihedral doors raised', width: 1206, height: 814 },
  { src: '/lab/rolls-royce.webp', title: 'Rolls-Royce Wraith', kind: 'automotive', meta: '2020 · Watercolour', alt: 'Watercolour study of a two-tone blue Rolls-Royce Wraith, with a side view and the Spirit of Ecstasy mascot', width: 1206, height: 806 },
  { src: '/lab/f430-spider.webp', title: 'Ferrari F430 Spider', kind: 'automotive', meta: '2020 · Graphite pencil', alt: 'Pencil drawing of a Ferrari F430 Spider from the front three-quarter view', width: 1206, height: 741 },
  { src: '/lab/gt3-992.webp', title: 'Porsche 911 GT3', kind: 'automotive', meta: '2022 · Coloured pencil', alt: 'Coloured pencil drawing of a blue Porsche 911 GT3 with a rear wing and a personalised number plate', width: 1800, height: 1321 },
  { src: '/lab/vanquish.webp', title: 'Aston Martin Vanquish', kind: 'automotive', meta: '2021 · Rollerball pen', alt: 'Rollerball pen drawing of a dark Aston Martin Vanquish with bright highlights', width: 1206, height: 889 },
  { src: '/lab/shelby-gt500.webp', title: 'Ford Mustang Shelby GT500', kind: 'automotive', meta: '2019 · Watercolour', alt: 'Watercolour of a silver Ford Mustang Shelby GT500 with blue racing stripes', width: 1206, height: 889 },
  { src: '/lab/rs6-front.webp', title: 'Audi RS6, front', kind: 'automotive', meta: '2021 · Fineliner', alt: 'Cropped fineliner drawing of the headlight and grille of a dark Audi RS6', width: 1091, height: 660 },
  { src: '/lab/488-pista.webp', title: 'Ferrari 488 Pista', kind: 'automotive', meta: '2020 · Coloured pencil', alt: 'Coloured pencil drawing of a red Ferrari 488 Pista with blue and white stripes on a seaside road', width: 1206, height: 805 },
  { src: '/lab/964-rs.webp', title: 'Porsche 964 RS', kind: 'automotive', meta: '2022 · Graphite pencil', alt: 'Pencil drawing of a Porsche 964 RS with Carrera side script and a roll cage', width: 1440, height: 809 },
  { src: '/lab/991-gt3-rs.webp', title: 'Porsche 991.2 GT3 RS', kind: 'automotive', meta: '2021 · Fineliner', alt: 'Fineliner drawing of a white Porsche 991.2 GT3 RS with a black bonnet and red brake callipers', width: 1206, height: 793 },
  { src: '/lab/918-spyder.webp', title: 'Porsche 918 Spyder', kind: 'automotive', meta: '2019 · Graphite pencil', alt: 'Pencil drawing of a Porsche 918 Spyder seen from the rear three-quarter view', width: 1258, height: 946 },
  { src: '/lab/laferrari-ballpoint.webp', title: 'LaFerrari', kind: 'automotive', meta: '2021 · Rollerball pen', alt: 'Blue rollerball pen drawing of a LaFerrari from the rear three-quarter view', width: 1206, height: 783 },
  { src: '/lab/gt3-rs-mr.webp', title: 'Porsche 911 GT3 RS MR', kind: 'automotive', meta: 'January 2024 · Ink and coloured pencil', alt: 'Detailed ink drawing of a Manthey-Racing Porsche 911 GT3 RS with yellow brake callipers', width: 1800, height: 1390 },
];
