import { useContext, useRef } from "react";
import Canvas from './canvas.js'
import { CanvasContext } from "../Context";

// 获取 canvas数据
export function useCanvasData() {
    const canvas = useContext(CanvasContext);
    return canvas.getCanvas();
}

// 获取canvas实例
export function useCanvasByContext() {
    const canvas = useContext(CanvasContext);
    return canvas
}

// 获取canvas下所有组件
export function useCanvasCmps() {
    const canvas = useContext(CanvasContext);
    return canvas.getCanvasCmps();
}

// 初始化canvas
export function useCanvas(canvas) {
    const canvasRef = useRef();

    if (!canvasRef.current) {
        if (canvas) {
            canvasRef.current = canvas;
        } else {
            const canvas = new Canvas();
            canvasRef.current = canvas.getPublicCanvas();
        }
    }

    return canvasRef.current;
}