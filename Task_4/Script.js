window.onload = () => {
    //anime({
    //    targets: 'div.circle',
    //    scale: 5, 
    //    backgroundColor: [
    //        '#FF9BCD', '#A4A4FF', '#A7C8FE'
    //    ],
    //    direction: 'alternate',
    //    loop: true,
    //    duration: 3000
    //});

    var basicTimeline = anime.timeline({
        direction: 'normal',
        loop: true,
        duration: 2000
    });

    basicTimeline
      .add({
          targets: 'div.circle',
          scale: [1, 2.5],
          backgroundColor: [
             '#FF9BCD', '#A4A4FF'
          ]
      })
      .add({
          targets: 'div.circle',
          scale: [2.5, 5],
          backgroundColor: [
            '#A4A4FF', '#A7C8FE'
          ]
      })
    .add({
        targets: 'div.circle',
        scale: [5, 2.5],
        backgroundColor: [
          '#A7C8FE', '#A4A4FF'
        ]
    })
    .add({
        targets: 'div.circle',
        scale: [2.5, 1],
        backgroundColor: [
           '#A4A4FF', '#FF9BCD'
        ]
    })
    ;

}





