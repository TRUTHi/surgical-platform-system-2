import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sspcgl: AppRouteModule = {
  path: '/operation',
  name: 'Operation',
  component: LAYOUT,
  redirect: '/operation/application',
  meta: {
    hideChildrenInMenu: false,
    icon: 'simple-icons:about-dot-me',
    title: t('手术排程管理'),
    orderNo: 1,
  },
  children: [
    {
      path: 'application',
      name: 'Application',
      component: () => import('/@/views/sspcgl/OperationApplication.vue'),
      meta: {
        title: t('手术申请'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
  ],
};

export default sspcgl;
