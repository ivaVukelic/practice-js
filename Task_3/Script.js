window.onload = () => {
    anime({
        targets: 'div.box.red',
        translateX: [
            { value: 250, duration: 1000, delay: 500, elasticity: 0 },
            { value: 0, duration: 1000, delay: 500, elasticity: 0 }
        ],
        translateY: [
            { value: -40, duration: 500, elasticity: 100 },
            { value: 40, duration: 500, delay: 1000, elasticity: 100 },
            { value: 0, duration: 500, delay: 1000, elasticity: 100 },
        ],
        scaleX: [
            { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
            { value: 1, duration: 900, elasticity: 300 },
            { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
            { value: 1, duration: 900, elasticity: 300 }
        ],
        scaleY: [
            { value: [1.75, 1], duration: 500 },
            { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
            { value: 1, duration: 450 },
            { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
            { value: 1, duration: 450 }
        ],
        backgroundColor: [
            { value: 'rgb(255, 0, 0)' },
            { value: 'hsl(100, 60%, 60%)' }
        ],
        borderRadius: ['0em', '2em'],
        loop: true
    });
}