// import StarsLine from './ddzy/canvas/stars-line/index';
import {
  StarsLine,
} from './ddzy/canvas/stars-line';


// ! BUG: 鼠标进画布, 关闭定时器

new StarsLine({
  container: '#cvs',
  cvsBgColor: '#fff',
  cvsWidth: window.innerWidth,
  cvsHeight: window.innerHeight,
  ballNum: 200,
  safeDistance: 80,
  allowMouse: true,
});