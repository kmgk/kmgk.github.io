let animation3Open = anime({
  targets: '#animation3 svg path',
  easing: 'linear',
  duration: 300,
  d: function (el, i) {
    if (i === 0) return ['M 0 0 L 0 2 L 20 2 L 20 0 Z', 'M 0 2 L 18 18 L 20 16 L 2 0  Z'];
    if (i === 1) return ['M 0 8 L 0 10 L 20 10 L 20 8 Z', 'M 10 10 L 10 10.01 L 10.01 10.01 L 10.01 10 Z'];
    return ['M 0 16 L 0 18 L 20 18 L 20 16 Z', 'M 18 0 L 20 2 L 2 18 L 0 16 Z'];
  },
  autoplay: false,
});

document.querySelector('#animation3 svg').onclick = animation3Open.play;