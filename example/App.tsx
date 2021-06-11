import React, { useEffect } from "react";
import { LottieRenderer } from "../src";
import {  Camera,  Vector3, Vector4, WebGLEngine } from "oasis-engine";
import { OrbitControl } from "@oasis-engine/controls";
import "./App.css";

function App() {
	useEffect(() => {
		const engine = new WebGLEngine("canvas");

		engine.canvas.resizeByClientSize();

		const root = engine.sceneManager.activeScene.createRootEntity();

		const cameraEntity = root.createChild("camera");
		const camera = cameraEntity.addComponent(Camera);
		camera.backgroundColor = new Vector4(0.3, 0.3, 0.3, 1);
		cameraEntity.transform.setPosition(0, 0, 10);
		cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
		cameraEntity.addComponent(OrbitControl);

		engine.resourceManager.load({
			urls: [
				'https://gw.alipayobjects.com/os/OasisHub/20759aba-867f-4256-8504-935743240c78/data.json',
				'https://gw.alipayobjects.com/os/bmw-prod/083ff1ac-15d9-42cb-8d7a-5b7c39b81f5f.json',
				'https://gw.alipayobjects.com/mdn/rms_e54b79/afts/img/A*Ax4DSrekVhEAAAAAAAAAAAAAARQnAQ'
			],
			type: 'lottie'
		}).then((lottieEntity) => {
			root.addChild(lottieEntity);
			const lottie:LottieRenderer = lottieEntity.getComponent(LottieRenderer);
			lottie.infinite = true;
			lottie.timeScale = 1;
			lottie.play();
		});

		engine.run();
	}, []);

	return <canvas id="canvas"></canvas>;
}

export default App;
