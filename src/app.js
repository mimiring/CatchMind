import Canvas from './Canvas.js';
import Palette from './Palette.js';
import Brush from './Brush.js';

const canvas = new Canvas;
const palette  = new Palette(canvas);
const brush = new Brush(canvas);