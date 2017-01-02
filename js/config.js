// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    slideNumber: true,
    center: true,
    keyboard: true,
    overview: true,

    // The "normal" size of the presentation, aspect ratio will be preserved
    // when the presentation is scaled to fit different resolutions. Can be
    // specified using percentage units.
    width: 1024,
    height: 768,
    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.1,
    maxScale: 1.0,

    transition: 'convex', // none/fade/slide/convex/concave/zoom 

    menu: {
        numbers: true,
        custom: [
            { title: 'More', icon: '<i class="fa fa-external-link"></i>', src: '../../plugin/menu/more.html'}
        ],
        transitions: false
    },
    chalkboard: { // font-awesome.min.css must be available
        toggleChalkboardButton: { left: "80px" },
        toggleNotesButton: { left: "130px" },
        theme: "chalkboard",
        color: [ 'rgba(255,255,0,1)', 'rgba(255,255,255,0.5)' ],
    },

    // Optional reveal.js plugins
    dependencies: [
        { src: '../../lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: '../../plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '../../plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '../../plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: '../../plugin/zoom-js/zoom.js', async: true },
        { src: '../../plugin/notes/notes.js', async: true },
        { src: '../../plugin/math/math.js', async: true },
        { src: '../../plugin/menu/menu.js' },
        { src: '../../plugin/chalkboard/chalkboard.js' }
    ],
    keyboard: {
        67: function() { RevealChalkboard.toggleNotesCanvas()  },    // toggle notes canvas when 'c' is pressed
        66: function() { RevealChalkboard.toggleChalkboard()  }, // toggle chalkboard when 'b' is pressed
        46: function() { RevealChalkboard.clear()  },    // clear chalkboard when 'DEL' is pressed
        8: function() { RevealChalkboard.reset()  },    // reset chalkboard data on current slide when 'BACKSPACE' is pressed
        68: function() { RevealChalkboard.download()  }, // downlad recorded chalkboard drawing when 'd' is pressed
    },
});
