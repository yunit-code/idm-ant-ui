import defaultRenderEmpty from './renderEmpty';

export const ConfigConsumerProps = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return `idm-ant-${suffixCls}`;
  },
  renderEmpty: defaultRenderEmpty,
};
