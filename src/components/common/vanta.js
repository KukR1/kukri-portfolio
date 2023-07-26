import { onMounted, onBeforeUnmount, ref } from 'vue';

export function useVantaRings(selector) {
  const vantaElement = ref(null);
  let vantaInstance = null;

  const initVantaRINGS = () => {
    vantaInstance = VANTA.HALO({
      el: vantaElement.value,
      color: 0xff9919,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0
    });
  };

  onMounted(() => {
    initVantaRINGS();
  });

  onBeforeUnmount(() => {
    if (vantaInstance) {
      vantaInstance.destroy();
    }
  });
  return {
    vantaElement
  };
}
