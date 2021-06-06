"use strict";

import { Enemy } from "../../class/Enemy";
import { consts } from "../../main";
import { rand } from "../rand";

/********************************
 * enemyMove1()関数
 * - 敵キャラクターの動き（デフォルト）
 ********************************/
const enemyMove1 = (object: Enemy) => {
	/********************************/
	// 範囲外に出ていたら、ベクトルを逆向きにする
	const gap = 5;
	if (!(object.x >= object.radius && object.x <= consts.canvasWidth)) {
		if (!rand(0, 3)) {
			object.vectorX += rand(-gap, gap);
		}
		object.vectorX *= -1;
	}
	if (!(object.y >= object.radius && object.y <= consts.canvasHeight)) {
		if (!rand(0, 3)) {
			object.vectorY += rand(-gap, gap);
		}
		object.vectorY *= -1;
	}
	/********************************/

	object.x += object.vectorX;
	object.y += object.vectorY;
};

export { enemyMove1 };
