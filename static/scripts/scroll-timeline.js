import 'https://rawcdn.githack.com/flackr/scroll-timeline/55c54c10ccf3308f36c09cbca4935286fe99f14f/dist/scroll-timeline.js';

const $lis = document.querySelectorAll('.carousel__item');

for (let $li of $lis) {
  const viewTimeline = new ViewTimeline({
    subject: $li,
    axis: 'inline'
  });

  $li.animate(
    { zIndex: ['1', '100', '1000', '100', '1'] },
    { timeline: viewTimeline, fill: 'both' }
  );
  $li.querySelector('article').animate(
    {
      transform: ['scale(0)', 'scale(0)', 'scale(1)', 'scale(0)', 'scale(0)'],
      opacity: ['0', '.5', '1', '.5', '0']
    },
    { timeline: viewTimeline, fill: 'both' }
  );
}
