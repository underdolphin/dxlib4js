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
export default class {
    /**
     * Confirm to library initialized or not
     */
    public initialized = false;

    /**
     * canvas element for display
     */
    public canvas: HTMLCanvasElement = null;
    public canvasContenxt : WebGLRenderingContext = null;
}

export const DEFAULT_CANVAS_WIDTH = 640;
export const DEFAULT_CANVAS_HEIGHT = 480;