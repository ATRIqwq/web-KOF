import { Player } from "./base.js";
import { GIF } from "../utils/gif.js";

export class Kyo extends Player {
    constructor(root, info) {
        super(root, info);
        this.init_animations();
    }

    init_animations() {
        let outer = this;
        for (let i = 0; i < 7; i++) {
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            let offset = [0, -22, -22, -140, 0, 0, 0];
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,   //总图片数
                frame_rate: 12, //每10帧过度一次
                offset_y: offset[i], //y方向上的偏移量
                loaded: false,  //是否加载完成
                scale: 2,  //放大多少倍
            });

            gif.onload = function () {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if (i === 3) {
                    obj.frame_rate = 8;
                }
            }




        }
    }
}
