const options = {
    animation: {
        startup: false,
        duration: 200,
    },
    focusTarget: 'category',
    legend: {
        position: 'bottom',
    },
    interpolateNulls: true,
    selectionMode: 'single',
    explorer: {
        actions: [
            'dragToZoom',
            'rightClickToReset',
        ],
        maxZoomIn: 0.001,
        maxZoomOut: 1000,
        axis: 'horizontal',
    },
    height: '100%',
    width: '100%',
    crosshair: {
        trigger: 'both',
        opacity: 0.3,
    },
    fontName: 'Roboto',
    fontSize: 13,
}

export default options
