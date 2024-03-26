function blockAsanaLayers() {
    const layers = document.querySelectorAll('div[data-layerid]');

    layers.forEach(layer => {
        const layerId = parseInt(layer.getAttribute('data-layerid'), 10);
        if (layerId > 0) {
            layer.style.display = 'none';
        }
    });
}

// Run the blocking function when the page loads and on any DOM changes.
document.addEventListener('DOMContentLoaded', blockAsanaLayers);
const observer = new MutationObserver(blockAsanaLayers);
observer.observe(document.body, { childList: true, subtree: true });
