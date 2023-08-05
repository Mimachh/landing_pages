import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "../../public/t-shirt/threejs.png",
    fullDecal: "../../public/t-shirt/threejs.png"
});

export default state;