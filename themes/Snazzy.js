var foregroundColor = '#eff0eb';
var backgroundColor = '#282a36';
var red             = '#ff5c57';
var green           = '#5af78e';
var yellow          = '#f3f99d';
var blue            = '#57c7ff';
var magenta         = '#ff6ac1';
var cyan            = '#9aedfe';
var white           = '#f1f1f0';

var black       = backgroundColor;
var lightBlack  = '#686868';
var lightRed    = red
var lightGreen  = green
var lightYellow = yellow
var lightBlue   = blue
var lightMagenta= magenta
var lightCyan   = cyan
var lightWhite  = foregroundColor;

t.prefs_.set('color-palette-overrides',
                 [ black    , red         , green     , yellow,
                  blue      , magenta     , cyan      , white,
                  lightBlack, lightRed    , lightGreen, lightYellow,
                  lightBlue , lightMagenta, lightCyan , lightWhite ]);

t.prefs_.set('cursor-color', '9#7979b');
t.prefs_.set('foreground-color', foregroundColor);
t.prefs_.set('background-color', backgroundColor);
