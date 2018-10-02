import _ from 'lodash';
import {masterArray} from './exercises/main';

require('./domscripts/header');
require('./domscripts/sidenav');
require('./exercises/main');

var domUtils = require('./helper-functions/domUtils');
const util = domUtils.domUtils;



function createPage(ray) {
  return ray.map((el) => {
    return util.masterCreator(el.question.slice(0,2), el.question, el.blockcode);
  })
}

createPage(masterArray)
