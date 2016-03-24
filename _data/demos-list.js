const React  = require("react");
const ReactDOM = require("react-dom");
const antd  = require("../");
const BrowserDemo = require("../site/component/BrowserDemo");
module.exports = {
  'components/affix/index.md': [
    require('antd-md?demo!../components/affix/demo/basic.md'),
    require('antd-md?demo!../components/affix/demo/bottom.md'),
    require('antd-md?demo!../components/affix/demo/offset.md'),
  ],
  'components/alert/index.md': [
    require('antd-md?demo!../components/alert/demo/basic.md'),
    require('antd-md?demo!../components/alert/demo/closable.md'),
    require('antd-md?demo!../components/alert/demo/close-text.md'),
    require('antd-md?demo!../components/alert/demo/description.md'),
    require('antd-md?demo!../components/alert/demo/icon.md'),
    require('antd-md?demo!../components/alert/demo/style.md'),
  ],
  'components/badge/index.md': [
    require('antd-md?demo!../components/badge/demo/99plus.md'),
    require('antd-md?demo!../components/badge/demo/basic.md'),
    require('antd-md?demo!../components/badge/demo/change.md'),
    require('antd-md?demo!../components/badge/demo/dot.md'),
    require('antd-md?demo!../components/badge/demo/link.md'),
    require('antd-md?demo!../components/badge/demo/no-wrapper.md'),
    require('antd-md?demo!../components/badge/demo/overflow.md'),
  ],
  'components/breadcrumb/index.md': [
    require('antd-md?demo!../components/breadcrumb/demo/basic.md'),
    require('antd-md?demo!../components/breadcrumb/demo/router.md'),
    require('antd-md?demo!../components/breadcrumb/demo/separator.md'),
    require('antd-md?demo!../components/breadcrumb/demo/withIcon.md'),
  ],
  'components/button/index.md': [
    require('antd-md?demo!../components/button/demo/basic.md'),
    require('antd-md?demo!../components/button/demo/button-group.md'),
    require('antd-md?demo!../components/button/demo/disabled.md'),
    require('antd-md?demo!../components/button/demo/icon.md'),
    require('antd-md?demo!../components/button/demo/loading.md'),
    require('antd-md?demo!../components/button/demo/shape.md'),
    require('antd-md?demo!../components/button/demo/size.md'),
  ],
  'components/calendar/index.md': [
    require('antd-md?demo!../components/calendar/demo/basic.md'),
    require('antd-md?demo!../components/calendar/demo/card.md'),
    require('antd-md?demo!../components/calendar/demo/custom-render.md'),
    require('antd-md?demo!../components/calendar/demo/locale.md'),
    require('antd-md?demo!../components/calendar/demo/notice-calendar.md'),
  ],
  'components/card/index.md': [
    require('antd-md?demo!../components/card/demo/basic.md'),
    require('antd-md?demo!../components/card/demo/grid.md'),
    require('antd-md?demo!../components/card/demo/loading.md'),
    require('antd-md?demo!../components/card/demo/no-padding.md'),
    require('antd-md?demo!../components/card/demo/simple.md'),
  ],
  'components/carousel/index.md': [
    require('antd-md?demo!../components/carousel/demo/autoplay.md'),
    require('antd-md?demo!../components/carousel/demo/basic.md'),
    require('antd-md?demo!../components/carousel/demo/fade.md'),
    require('antd-md?demo!../components/carousel/demo/vertical.md'),
  ],
  'components/cascader/index.md': [
    require('antd-md?demo!../components/cascader/demo/basic.md'),
    require('antd-md?demo!../components/cascader/demo/change-on-select.md'),
    require('antd-md?demo!../components/cascader/demo/custom-trigger.md'),
    require('antd-md?demo!../components/cascader/demo/default-value.md'),
    require('antd-md?demo!../components/cascader/demo/disabled-option.md'),
    require('antd-md?demo!../components/cascader/demo/hover.md'),
    require('antd-md?demo!../components/cascader/demo/size.md'),
  ],
  'components/checkbox/index.md': [
    require('antd-md?demo!../components/checkbox/demo/basic.md'),
    require('antd-md?demo!../components/checkbox/demo/controller.md'),
    require('antd-md?demo!../components/checkbox/demo/disable.md'),
    require('antd-md?demo!../components/checkbox/demo/group.md'),
  ],
  'components/collapse/index.md': [
    require('antd-md?demo!../components/collapse/demo/accordion.md'),
    require('antd-md?demo!../components/collapse/demo/basic.md'),
    require('antd-md?demo!../components/collapse/demo/mix.md'),
  ],
  'components/date-picker/index.md': [
    require('antd-md?demo!../components/date-picker/demo/basic.md'),
    require('antd-md?demo!../components/date-picker/demo/disabled-date.md'),
    require('antd-md?demo!../components/date-picker/demo/disabled.md'),
    require('antd-md?demo!../components/date-picker/demo/formatter.md'),
    require('antd-md?demo!../components/date-picker/demo/locale.md'),
    require('antd-md?demo!../components/date-picker/demo/month-picker.md'),
    require('antd-md?demo!../components/date-picker/demo/range.md'),
    require('antd-md?demo!../components/date-picker/demo/size.md'),
    require('antd-md?demo!../components/date-picker/demo/start-end.md'),
    require('antd-md?demo!../components/date-picker/demo/time.md'),
    require('antd-md?demo!../components/date-picker/demo/with-time-picker.md'),
  ],
  'components/dropdown/index.md': [
    require('antd-md?demo!../components/dropdown/demo/basic.md'),
    require('antd-md?demo!../components/dropdown/demo/dropdown-button.md'),
    require('antd-md?demo!../components/dropdown/demo/event.md'),
    require('antd-md?demo!../components/dropdown/demo/item.md'),
    require('antd-md?demo!../components/dropdown/demo/sub-menu.md'),
    require('antd-md?demo!../components/dropdown/demo/trigger.md'),
  ],
  'components/form/index.md': [
    require('antd-md?demo!../components/form/demo/advanced-search-form.md'),
    require('antd-md?demo!../components/form/demo/form-controls.md'),
    require('antd-md?demo!../components/form/demo/horizontal-form.md'),
    require('antd-md?demo!../components/form/demo/inline-form.md'),
    require('antd-md?demo!../components/form/demo/input-group.md'),
    require('antd-md?demo!../components/form/demo/input.md'),
    require('antd-md?demo!../components/form/demo/mix.md'),
    require('antd-md?demo!../components/form/demo/search-input.md'),
    require('antd-md?demo!../components/form/demo/validate-basic.md'),
    require('antd-md?demo!../components/form/demo/validate-customized.md'),
    require('antd-md?demo!../components/form/demo/validate-other.md'),
    require('antd-md?demo!../components/form/demo/validate-static.md'),
  ],
  'components/input-number/index.md': [
    require('antd-md?demo!../components/input-number/demo/basic.md'),
    require('antd-md?demo!../components/input-number/demo/disabled.md'),
    require('antd-md?demo!../components/input-number/demo/size.md'),
  ],
  'components/layout/index.md': [
    require('antd-md?demo!../components/layout/demo/basic.md'),
    require('antd-md?demo!../components/layout/demo/flex-align.md'),
    require('antd-md?demo!../components/layout/demo/flex-order.md'),
    require('antd-md?demo!../components/layout/demo/flex.md'),
    require('antd-md?demo!../components/layout/demo/gutter.md'),
    require('antd-md?demo!../components/layout/demo/offset.md'),
    require('antd-md?demo!../components/layout/demo/reponsive-more.md'),
    require('antd-md?demo!../components/layout/demo/reponsive.md'),
    require('antd-md?demo!../components/layout/demo/sort.md'),
  ],
  'components/locale-provider/index.md': [
    require('antd-md?demo!../components/locale-provider/demo/all.md'),
    require('antd-md?demo!../components/locale-provider/demo/basic.md'),
  ],
  'components/menu/index.md': [
    require('antd-md?demo!../components/menu/demo/horizontal.md'),
    require('antd-md?demo!../components/menu/demo/sider-current.md'),
    require('antd-md?demo!../components/menu/demo/sider.md'),
    require('antd-md?demo!../components/menu/demo/theme.md'),
    require('antd-md?demo!../components/menu/demo/vertical.md'),
  ],
  'components/message/index.md': [
    require('antd-md?demo!../components/message/demo/duration.md'),
    require('antd-md?demo!../components/message/demo/info.md'),
    require('antd-md?demo!../components/message/demo/loading.md'),
    require('antd-md?demo!../components/message/demo/other.md'),
  ],
  'components/modal/index.md': [
    require('antd-md?demo!../components/modal/demo/async.md'),
    require('antd-md?demo!../components/modal/demo/basic.md'),
    require('antd-md?demo!../components/modal/demo/confirm-promise.md'),
    require('antd-md?demo!../components/modal/demo/confirm.md'),
    require('antd-md?demo!../components/modal/demo/footer.md'),
    require('antd-md?demo!../components/modal/demo/info.md'),
    require('antd-md?demo!../components/modal/demo/locale.md'),
  ],
  'components/notification/index.md': [
    require('antd-md?demo!../components/notification/demo/basic.md'),
    require('antd-md?demo!../components/notification/demo/duration.md'),
    require('antd-md?demo!../components/notification/demo/with-btn.md'),
    require('antd-md?demo!../components/notification/demo/with-icon.md'),
  ],
  'components/pagination/index.md': [
    require('antd-md?demo!../components/pagination/demo/basic.md'),
    require('antd-md?demo!../components/pagination/demo/changer.md'),
    require('antd-md?demo!../components/pagination/demo/controlled.md'),
    require('antd-md?demo!../components/pagination/demo/jump.md'),
    require('antd-md?demo!../components/pagination/demo/mini.md'),
    require('antd-md?demo!../components/pagination/demo/more.md'),
    require('antd-md?demo!../components/pagination/demo/simple.md'),
    require('antd-md?demo!../components/pagination/demo/total.md'),
  ],
  'components/popconfirm/index.md': [
    require('antd-md?demo!../components/popconfirm/demo/basic.md'),
    require('antd-md?demo!../components/popconfirm/demo/dynamic-trigger.md'),
    require('antd-md?demo!../components/popconfirm/demo/locale.md'),
    require('antd-md?demo!../components/popconfirm/demo/placement.md'),
  ],
  'components/popover/index.md': [
    require('antd-md?demo!../components/popover/demo/basic.md'),
    require('antd-md?demo!../components/popover/demo/control.md'),
    require('antd-md?demo!../components/popover/demo/placement.md'),
    require('antd-md?demo!../components/popover/demo/triggerType.md'),
  ],
  'components/progress/index.md': [
    require('antd-md?demo!../components/progress/demo/circle-dynamic.md'),
    require('antd-md?demo!../components/progress/demo/circle-mini.md'),
    require('antd-md?demo!../components/progress/demo/circle.md'),
    require('antd-md?demo!../components/progress/demo/dynamic.md'),
    require('antd-md?demo!../components/progress/demo/format.md'),
    require('antd-md?demo!../components/progress/demo/line-mini.md'),
    require('antd-md?demo!../components/progress/demo/line.md'),
  ],
  'components/queue-anim/index.md': [
    require('antd-md?demo!../components/queue-anim/demo/basic.md'),
    require('antd-md?demo!../components/queue-anim/demo/change.md'),
    require('antd-md?demo!../components/queue-anim/demo/custom.md'),
    require('antd-md?demo!../components/queue-anim/demo/enter-leave.md'),
    require('antd-md?demo!../components/queue-anim/demo/form.md'),
    require('antd-md?demo!../components/queue-anim/demo/page.md'),
    require('antd-md?demo!../components/queue-anim/demo/router.md'),
    require('antd-md?demo!../components/queue-anim/demo/simple.md'),
  ],
  'components/radio/index.md': [
    require('antd-md?demo!../components/radio/demo/basic.md'),
    require('antd-md?demo!../components/radio/demo/disable.md'),
    require('antd-md?demo!../components/radio/demo/radiobutton.md'),
    require('antd-md?demo!../components/radio/demo/radiogroup-more.md'),
    require('antd-md?demo!../components/radio/demo/radiogroup.md'),
    require('antd-md?demo!../components/radio/demo/size.md'),
  ],
  'components/select/index.md': [
    require('antd-md?demo!../components/select/demo/basic.md'),
    require('antd-md?demo!../components/select/demo/combobox.md'),
    require('antd-md?demo!../components/select/demo/coordinate.md'),
    require('antd-md?demo!../components/select/demo/multiple.md'),
    require('antd-md?demo!../components/select/demo/optgroup.md'),
    require('antd-md?demo!../components/select/demo/search-box.md'),
    require('antd-md?demo!../components/select/demo/search.md'),
    require('antd-md?demo!../components/select/demo/size.md'),
    require('antd-md?demo!../components/select/demo/tags.md'),
  ],
  'components/slider/index.md': [
    require('antd-md?demo!../components/slider/demo/basic.md'),
    require('antd-md?demo!../components/slider/demo/event.md'),
    require('antd-md?demo!../components/slider/demo/icon-slider.md'),
    require('antd-md?demo!../components/slider/demo/input-number.md'),
    require('antd-md?demo!../components/slider/demo/mark.md'),
    require('antd-md?demo!../components/slider/demo/tip-formatter.md'),
  ],
  'components/spin/index.md': [
    require('antd-md?demo!../components/spin/demo/basic.md'),
    require('antd-md?demo!../components/spin/demo/inside.md'),
    require('antd-md?demo!../components/spin/demo/nested.md'),
    require('antd-md?demo!../components/spin/demo/size.md'),
    require('antd-md?demo!../components/spin/demo/tip.md'),
  ],
  'components/steps/index.md': [
    require('antd-md?demo!../components/steps/demo/icon.md'),
    require('antd-md?demo!../components/steps/demo/simple.md'),
    require('antd-md?demo!../components/steps/demo/small-size.md'),
    require('antd-md?demo!../components/steps/demo/step-next.md'),
    require('antd-md?demo!../components/steps/demo/vertical-small.md'),
    require('antd-md?demo!../components/steps/demo/vertical.md'),
  ],
  'components/switch/index.md': [
    require('antd-md?demo!../components/switch/demo/basic.md'),
    require('antd-md?demo!../components/switch/demo/disabled.md'),
    require('antd-md?demo!../components/switch/demo/size.md'),
    require('antd-md?demo!../components/switch/demo/text.md'),
  ],
  'components/table/index.md': [
    require('antd-md?demo!../components/table/demo/ajax.md'),
    require('antd-md?demo!../components/table/demo/basic.md'),
    require('antd-md?demo!../components/table/demo/bordered.md'),
    require('antd-md?demo!../components/table/demo/colspan-rowspan.md'),
    require('antd-md?demo!../components/table/demo/expand-children.md'),
    require('antd-md?demo!../components/table/demo/expand.md'),
    require('antd-md?demo!../components/table/demo/fixed-columns-header.md'),
    require('antd-md?demo!../components/table/demo/fixed-columns.md'),
    require('antd-md?demo!../components/table/demo/fixed-header.md'),
    require('antd-md?demo!../components/table/demo/head.md'),
    require('antd-md?demo!../components/table/demo/loading.md'),
    require('antd-md?demo!../components/table/demo/nopagination.md'),
    require('antd-md?demo!../components/table/demo/paging.md'),
    require('antd-md?demo!../components/table/demo/row-selection-and-operation.md'),
    require('antd-md?demo!../components/table/demo/row-selection-props.md'),
    require('antd-md?demo!../components/table/demo/row-selection.md'),
    require('antd-md?demo!../components/table/demo/size.md'),
  ],
  'components/tabs/index.md': [
    require('antd-md?demo!../components/tabs/demo/basic.md'),
    require('antd-md?demo!../components/tabs/demo/card-top.md'),
    require('antd-md?demo!../components/tabs/demo/card.md'),
    require('antd-md?demo!../components/tabs/demo/disabled.md'),
    require('antd-md?demo!../components/tabs/demo/editable-card.md'),
    require('antd-md?demo!../components/tabs/demo/extra.md'),
    require('antd-md?demo!../components/tabs/demo/icon.md'),
    require('antd-md?demo!../components/tabs/demo/position.md'),
    require('antd-md?demo!../components/tabs/demo/size.md'),
    require('antd-md?demo!../components/tabs/demo/slide.md'),
  ],
  'components/tag/index.md': [
    require('antd-md?demo!../components/tag/demo/basic.md'),
    require('antd-md?demo!../components/tag/demo/colorful.md'),
    require('antd-md?demo!../components/tag/demo/control.md'),
  ],
  'components/time-picker/index.md': [
    require('antd-md?demo!../components/time-picker/demo/basic.md'),
    require('antd-md?demo!../components/time-picker/demo/disable-options.md'),
    require('antd-md?demo!../components/time-picker/demo/disabled.md'),
    require('antd-md?demo!../components/time-picker/demo/hide-options.md'),
    require('antd-md?demo!../components/time-picker/demo/size.md'),
    require('antd-md?demo!../components/time-picker/demo/value.md'),
    require('antd-md?demo!../components/time-picker/demo/without-seconds.md'),
  ],
  'components/timeline/index.md': [
    require('antd-md?demo!../components/timeline/demo/basic.md'),
    require('antd-md?demo!../components/timeline/demo/color.md'),
    require('antd-md?demo!../components/timeline/demo/pending.md'),
  ],
  'components/tooltip/index.md': [
    require('antd-md?demo!../components/tooltip/demo/basic.md'),
    require('antd-md?demo!../components/tooltip/demo/placement.md'),
  ],
  'components/transfer/index.md': [
    require('antd-md?demo!../components/transfer/demo/advanced.md'),
    require('antd-md?demo!../components/transfer/demo/basic.md'),
    require('antd-md?demo!../components/transfer/demo/search.md'),
  ],
  'components/tree/index.md': [
    require('antd-md?demo!../components/tree/demo/basic-controlled.md'),
    require('antd-md?demo!../components/tree/demo/basic.md'),
    require('antd-md?demo!../components/tree/demo/draggable.md'),
    require('antd-md?demo!../components/tree/demo/dynamic.md'),
  ],
  'components/tree-select/index.md': [
    require('antd-md?demo!../components/tree-select/demo/basic.md'),
    require('antd-md?demo!../components/tree-select/demo/checkable.md'),
    require('antd-md?demo!../components/tree-select/demo/treeData.md'),
  ],
  'components/upload/index.md': [
    require('antd-md?demo!../components/upload/demo/basic.md'),
    require('antd-md?demo!../components/upload/demo/beforeUpload.md'),
    require('antd-md?demo!../components/upload/demo/defaultFileList.md'),
    require('antd-md?demo!../components/upload/demo/drag.md'),
    require('antd-md?demo!../components/upload/demo/fileList.md'),
    require('antd-md?demo!../components/upload/demo/multiple.md'),
    require('antd-md?demo!../components/upload/demo/picture-card.md'),
    require('antd-md?demo!../components/upload/demo/picture-style.md'),
  ],
  'docs/spec/layout/index.md': [
    require('antd-md?demo!../docs/spec/layout/demo/aside.md'),
    require('antd-md?demo!../docs/spec/layout/demo/ceiling.md'),
    require('antd-md?demo!../docs/spec/layout/demo/top-aside.md'),
    require('antd-md?demo!../docs/spec/layout/demo/top.md'),
  ],
};
Object.keys(module.exports).map((key) => module.exports[key])
  .forEach((demos) => {
    demos.forEach((demo) => {
      if (typeof demo.preview !== "function") return;
      demo.preview = demo.preview(React, ReactDOM, antd, BrowserDemo);
    });
  });