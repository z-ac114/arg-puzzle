(function () {
    const iframe = document.querySelector('iframe[title="SoundCloud music player"]');

    if (!iframe) {
        return;
    }

    function setupWidget() {
        const widget = SC.Widget(iframe);

        widget.bind(SC.Widget.Events.FINISH, function () {
            widget.seekTo(0);
            widget.play();
        });
    }

    if (window.SC && window.SC.Widget) {
        setupWidget();
        return;
    }

    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.onload = setupWidget;
    document.head.appendChild(script);
})();
