import Layzr from 'layzr.js';
import prestashop from 'prestashop';

const instance = Layzr();
const classAfterLoad = 'load-img-lazy';

function checkImageLoad() {
  instance
    .update()
    .check()
    .handlers(true);
}

export { instance, checkImageLoad };

export default function() {
  instance.on('src:before', image => {
    image.addEventListener('load', event => {
      event.target.classList.add(classAfterLoad);
    });
  });
  checkImageLoad();
}
