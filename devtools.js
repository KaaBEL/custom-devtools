chrome.devtools.panels.applyStyleSheet(`/* old not working styles */
span.toolbar-glyph.spritesheet-record-stop.record-stop.icon-mask {
  --spritesheet-position: -84px 24px!important;
}
span.toolbar-glyph.spritesheet-clear.clear.icon-mask {
  --spritesheet-position: 0px 144px!important;
}
span.toolbar-glyph.spritesheet-filter.filter.icon-mask {
  --spritesheet-position: -56px 120px!important;
}
span.toolbar-glyph.spritesheet-search.search.icon-mask {
  --spritesheet-position: -196px 96px!important;
}
span.toolbar-glyph.spritesheet-import.import.icon-mask {
  --spritesheet-position: -196px 120px!important;
}
span.toolbar-glyph.spritesheet-download.download.icon-mask {
  --spritesheet-position: -196px 144px!important;
}
span.toolbar-glyph.spritesheet-gear.gear.icon-mask {
  --spritesheet-position: -168px 168px!important;
}
span.toolbar-glyph.spritesheet-select-element.select-element.icon-mask {
  --spritesheet-position: -140px 96px!important;
}
span.toolbar-glyph.spritesheet-devices.devices.icon-mask {
  --spritesheet-position: -112px 72px!important;
}
span.toolbar-glyph.spritesheet-dots-vertical.dots-vertical.icon-mask {
  --spritesheet-position: -56px 96px!important;
}
span.toolbar-glyph.spritesheet-left-panel-close.left-panel-close.icon-mask {
  --spritesheet-position: -112px 192px!important;
}
span.toolbar-glyph.spritesheet-pause.pause.icon-mask {
  --spritesheet-position: -56px 72px!important;
}
span.toolbar-glyph.spritesheet-brackets.brackets.icon-mask {
  --spritesheet-position: -56px 48px!important;
}
span.toolbar-glyph.spritesheet-play.play.icon-mask {
  --spritesheet-position: -28px 48px!important;
}
span.toolbar-glyph.spritesheet-bottom-panel-close.bottom-panel-close.icon-mask {
  --spritesheet-position: -112px 216px!important;
}
span.toolbar-glyph.spritesheet-step-over.step-over.icon-mask {
  --spritesheet-position: -56px 24px!important;
}
span.toolbar-glyph.spritesheet-step-into.step-into.icon-mask {
  --spritesheet-position: 0px 24px!important;
}
span.toolbar-glyph.spritesheet-step-out.step-out.icon-mask {
  --spritesheet-position: -28px 24px!important;
}
span.toolbar-glyph.spritesheet-step.step.icon-mask {
  --spritesheet-position: -196px 24px!important;
}
span.toolbar-glyph.spritesheet-breakpoint-crossed.breakpoint-crossed.icon-mask {
  --spritesheet-position: -56px 144px!important;
}
span.chevron-icon.spritesheet-chevron-double-right.chevron-double-right.icon-mask {
  --spritesheet-position: -56px 168px!important;
}
span.toolbar-glyph.spritesheet-plus.plus.icon-mask {
  --spritesheet-position: 0px 192px!important;
}
span.toolbar-glyph.spritesheet-plus.plus.icon-mask,
span.chevron-icon.spritesheet-chevron-double-right.chevron-double-right.icon-mask,
span.toolbar-glyph.spritesheet-breakpoint-crossed.breakpoint-crossed.icon-mask,
span.toolbar-glyph.spritesheet-step.step.icon-mask,
span.toolbar-glyph.spritesheet-step-out.step-out.icon-mask,
span.toolbar-glyph.spritesheet-step-into.step-into.icon-mask,
span.toolbar-glyph.spritesheet-step-over.step-over.icon-mask,
span.toolbar-glyph.spritesheet-bottom-panel-close.bottom-panel-close.icon-mask,
span.toolbar-glyph.spritesheet-play.play.icon-mask,
span.toolbar-glyph.spritesheet-brackets.brackets.icon-mask,
span.toolbar-glyph.spritesheet-pause.pause.icon-mask,
span.toolbar-glyph.spritesheet-left-panel-close.left-panel-close.icon-mask,
span.toolbar-glyph.spritesheet-dots-vertical.dots-vertical.icon-mask,
span.toolbar-glyph.spritesheet-devices.devices.icon-mask,
span.toolbar-glyph.spritesheet-select-element.select-element.icon-mask,
span.toolbar-glyph.spritesheet-gear.gear.icon-mask,
span.toolbar-glyph.spritesheet-download.download.icon-mask,
span.toolbar-glyph.spritesheet-import.import.icon-mask,
span.toolbar-glyph.spritesheet-search.search.icon-mask,
span.toolbar-glyph.spritesheet-filter.filter.icon-mask,
span.toolbar-glyph.spritesheet-clear.clear.icon-mask,
span.toolbar-glyph.spritesheet-record-stop.record-stop.icon-mask
{
  width: 28px!important;
  height: 24px!important;
  -webkit-mask-image: var(--image-file-largeIcons);
}
/*
<link href="http://localhost:5500/   .css" rel="stylesheet">
*/
div[style="width:16px;height:16px;display:block;-webkit-mask-image:url(devtools://devtools/bundled/devtools-frontend/front_end/Images/document.svg);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:99%;background-color:var(--icon-color, var(--icon-default));"] {
  -webkit-mask-position: -48px 48px!important;
  -webkit-mask-image: var(--image-file-mediumIcons)!important;
  -webkit-mask-repeat: unset!important;
  -webkit-mask-size: unset!important;
}
div div.tabbed-pane-header, 
div div.scripts-debug-toolbar {
  background-color: var(--color-background-elevation-1);
}
.-theme-with-dark-background .tabbed-pane-header-tab.selected, :host-context(.-theme-with-dark-background) .tabbed-pane-header-tab.selected {
  --override-tabbed-dark-mode-bg-color: rgb(0 0 0);
  background-color: var(--override-tabbed-dark-mode-bg-color);
}
.widget.vbox.flex-auto.view-container.overflow-auto,
#profile-views {
  background-color: var(--color-background);
  --sys-color-cdt-base-container: var(--color-background);
}
.widget.vbox.styles-pane {
  --webkit-css-property-color: rgb(53, 212, 199);
}
div div.console-message-wrapper {
  margin: unset;
  border-top: 1px solid var(--override-message-border-color);
  border-bottom: 1px solid transparent;
  border-radius: unset;
}
.console-verbose-level {
  color: #2774f0;
}
/* Chrome Refresh 2023 - patch for new icons system */
/* Sadly the DevTools themes were removed completely https://issues.chromium.org/issues/369788368 */
devtools-icon.toolbar-glyph:not([name="network-settings"]):not([name="replace"]),
devtools-icon.long-click-glyph[name="triangle-bottom-right"] {
  -webkit-mask-image: url(chrome-extension://idfnlpfgkmpnckenjmjpcbijchfcpglk/largeIcons.svg) !important;
  -webkit-mask-repeat: unset !important;
  -webkit-mask-size: unset !important;
  background: var(--icon-default);
}
.toolbar-button.toolbar-state-on devtools-icon.toolbar-glyph {
  background: var(--icon-toggled);
}
devtools-icon.toolbar-glyph[name="select-element"] {
  -webkit-mask-position: -144px 94px !important;
}
devtools-icon.toolbar-glyph[name="devices"] {
  -webkit-mask-position: -116px 70px !important;
}
devtools-icon.toolbar-glyph[name="gear"] {
  -webkit-mask-position: 79px 166px !important;
}
devtools-icon.toolbar-glyph[name="gear-filled"] {
  -webkit-mask-position: 79px 166px !important;
  background: var(--icon-toggled) !important;
}
devtools-icon.toolbar-glyph[name="dots-vertical"] {
  -webkit-mask-position: -63px 94px !important;
}
devtools-icon.long-click-glyph[name="triangle-bottom-right"] {
  -webkit-mask-position: -33px 93px !important;
}
devtools-icon.toolbar-glyph[name="plus"] {
  -webkit-mask-position: -4px 190px !important;
}
devtools-icon.toolbar-glyph[name="left-panel-open"] {
  -webkit-mask-position: -171px 118px !important;
}
devtools-icon.toolbar-glyph[name="clear"] {
  -webkit-mask-position: -4px 142px;
}
devtools-icon.toolbar-glyph[name="eye"] {
  -webkit-mask-position: 52px -2px !important;
}
devtools-icon.toolbar-glyph[name="record-stop"] {
  -webkit-mask-position: 164px 22.7px !important;
  background: var(--icon-error) !important;
}
devtools-icon.toolbar-glyph[name="filter"] {
  -webkit-mask-position: 192px 117px !important;
}
devtools-icon.toolbar-glyph[name="search"] {
  -webkit-mask-position: 50px 93px !important;
}
devtools-icon.toolbar-glyph[name="import"] {
  -webkit-mask-position: 51px 118px !important;
}
devtools-icon.toolbar-glyph[name="download"] {
  -webkit-mask-position: 52px 142px !important;
}
devtools-icon.toolbar-glyph[name="left-panel-close"] {
  -webkit-mask-position: 135px 190px !important;
}
devtools-icon.toolbar-glyph[name="left-panel-open"] {
  -webkit-mask-position: 79px 118px !important;
}
devtools-icon.toolbar-glyph[name="pause"] {
  -webkit-mask-position: 191px 70px !important;
}
devtools-icon.toolbar-glyph[name="resume"] {
  -webkit-mask-position: 107px 46px !important;
  background: var(--icon-toggled) !important;
}
devtools-icon.toolbar-glyph[name="step-over"] {
  -webkit-mask-position: 192px 23px !important;
}
devtools-icon.toolbar-glyph[name="step-into"] {
  -webkit-mask-position: 247px 23px !important;
}
devtools-icon.toolbar-glyph[name="step-out"] {
  -webkit-mask-position: 220px 23px !important;
}
devtools-icon.toolbar-glyph[name="step"] {
  -webkit-mask-position: 52px 23px !important;
}
devtools-icon.toolbar-glyph[name="breakpoint-crossed"] {
  -webkit-mask-position: 192px 142px !important;
}
devtools-icon.toolbar-glyph[name="breakpoint-crossed-filled"] {
  -webkit-mask-position: 192px 142px !important;
  background: var(--icon-toggled) !important;
}
devtools-icon.toolbar-glyph[name="brackets"] {
  -webkit-mask-position: 192px 46px !important;
}
devtools-icon.toolbar-glyph[name="bottom-panel-close"] {
  -webkit-mask-position: 136px 213px !important;
}
devtools-icon.toolbar-glyph[name="bottom-panel-open"] {
  -webkit-mask-position: 79px 142px !important;
}
devtools-icon.toolbar-glyph[name="record-start"] {
  -webkit-mask-position: 80px 46.7px !important;
}
devtools-icon.toolbar-glyph[name="color-picker"] {
  -webkit-mask-position: 220px 118px !important;
}
devtools-icon.toolbar-glyph[name="right-panel-open"] {
  -webkit-mask-position: 79px 94px !important;
}
devtools-icon.toolbar-glyph[name="right-panel-close"] {
  -webkit-mask-position: 136px 166px !important;
}
devtools-icon.toolbar-glyph[name="bin"],
devtools-icon.toolbar-glyph[name="mop"] {
  -webkit-mask-position: 108px 23px !important;
}
devtools-icon.toolbar-glyph[name="rotate"] {
  -webkit-mask-position: 108px 23px !important;
}
devtools-icon.toolbar-glyph[name="rotate-device"] {
  -webkit-mask-position: 108px 23px !important;
}
devtools-icon.toolbar-glyph[name="refresh"] {
  -webkit-mask-position: 164px 46.7px !important;
}
devtools-icon.toolbar-glyph[name="brush"] {
  -webkit-mask-position: 249px 118px !important;
}
devtools-icon.toolbar-glyph[name="play"] {
  -webkit-mask-position: 219px 47px !important;
}
devtools-icon.toolbar-glyph[name="stop"] {
  -webkit-mask-position: 51px 47px !important;
}
devtools-icon.toolbar-glyph[name="dock-window"] {
  -webkit-mask-position: 80px 22px !important;
}
devtools-icon.toolbar-glyph[name="dock-left"] {
  -webkit-mask-position: 164px 166px !important;
}
devtools-icon.toolbar-glyph[name="dock-bottom"] {
  -webkit-mask-position: 164px 190px !important;
}
devtools-icon.toolbar-glyph[name="dock-right"] {
  -webkit-mask-position: 164px 142px !important;
}
devtools-icon.toolbar-glyph[name="cross"] {
  -webkit-mask-position: 162px 214px !important;
}
devtools-icon.toolbar-glyph[name="chevron-double-right"] {
  -webkit-mask-position: 194px 166px !important;
}
devtools-icon.toolbar-glyph[name="feedback-large-icon"] {
  -webkit-mask-position: 26px 72px !important;
}
devtools-icon.toolbar-glyph[name="filter-filled"] {
  -webkit-mask-position: 50px 93px !important;
  background: var(--icon-toggled) !important;
}
devtools-icon.toolbar-glyph[name=""] {
  -webkit-mask-position: 136px 118px !important;
}`);
