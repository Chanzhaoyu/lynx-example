import { root } from '@lynx-js/react';
import { furnituresPictures } from "./Pictures/furnitures/furnituresPictures.jsx";

import { Gallery } from './GalleryComplete/Gallery.jsx';

root.render(<Gallery pictureData={furnituresPictures} />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
