import { getOnlyKey } from '../utils/index'

const defaultCanvas = {
    // 画布样式
    style: {
        // width: 320,
        height: "100%",
        padding: "10px",
        backgroundColor: "#fff",
        // backgroundImage: "",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // boxSizing: "content-box",
    },
    // 画布中的组件值
    //  cmps:[],
    cmps: [],
};
export default class Canvas {
    constructor(_canvas = defaultCanvas) {
        this.canvas = _canvas
        this.listeners = []
        // 被选中组件的下表
        this.selectedCmpIndex = null;
    }

    getSelectedCmpIndex = () => {
        return this.selectedCmpIndex
    }
    setSelectedCmpIndex = (index) => {
        if (this.selectedCmpIndex === index) return
        this.selectedCmpIndex = index
        this.updateApp();
    }

    getSelectedCmp = () => {
        const cmps = this.getCanvasCmps()
        return cmps[this.selectedCmpIndex]
    }

    upDateSelectedCmpStyle = (newStyle = {}, newValue) => {
        const SelectedCmp = this.getSelectedCmp()
        Object.assign(this.canvas.cmps[this.getSelectedCmpIndex()], {
            style: {
                ...SelectedCmp.style, ...newStyle
            }
        })

        this.updateApp();
    }

    //addCmp: 添加组件
    addCmp = (_cmp) => {
        // 1.更新画布
        const cmp = {
            key: getOnlyKey(),
            ..._cmp
        }
        const ind = this.canvas.cmps.push(cmp)
        // 2. 选中当前组件
        this.selectedCmpIndex = ind - 1
        // 2.更新组件
        this.updateApp();
    }

    updateApp = () => {
        this.listeners.forEach(lis => lis())
    }

    subscribe = (listener) => {
        this.listeners.push(listener)
        return () => {
            this.listeners = this.listeners.filter(lis => lis !== listener)
        }
    }

    // get
    getCanvas = () => {
        return { ...this.canvas };
    };

    getCanvasCmps = () => {
        return [...this.canvas.cmps];
    };

    // set
    setCanvas = (_canvas) => {
        Object.assign(this.canvas, _canvas);
    };

    getPublicCanvas = () => {
        const obj = {
            getCanvas: this.getCanvas,
            getCanvasCmps: this.getCanvasCmps,
            addCmp: this.addCmp,
            subscribe: this.subscribe
        };

        return obj;
    };
}
