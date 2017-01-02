//    Copyright 2017 underdolphin(masato sueda)
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

import Global from './global';
import { DEFAULT_CANVAS_WIDTH, DEFAULT_CANVAS_HEIGHT } from './global';
const global = new Global();

export default class {
    /**
     * Initialize library
     * @return {number} 0 : Success,1 : Error
     */
    public lib_Init(): number {
        if (global.initialized === true) {
            return;
        }

        // Make canvas
        global.canvas = document.createElement('canvas');
        global.canvas.width = DEFAULT_CANVAS_WIDTH;
        global.canvas.height = DEFAULT_CANVAS_HEIGHT;
        global.canvasContenxt = global.canvas.getContext('webgl');
        document.body.appendChild(global.canvas);

        global.initialized = true;
        return 0;
    }

    /**
     * End of use library
     * @return {number} 0 : Success,1 : Error
     */
    public lib_End(): number {
        return -1;
    }
}