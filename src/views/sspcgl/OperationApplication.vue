<template>
  <BasicTable
    @register="registerTable"
    :rowSelection="{ type: 'checkbox', selectedRowKeys: checkedKeys, onChange: onSelectChange }"
  >
    <template #form-custom> custom-slot </template>
    <template #headerTop>
      <a-alert type="info" show-icon>
        <template #message>
          <template v-if="checkedKeys.length > 0">
            <span>已选中{{ checkedKeys.length }}条记录(可跨页)</span>
            <a-button type="link" @click="checkedKeys = []" size="small">清空</a-button>
          </template>
          <template v-else>
            <span>未选中任何项目</span>
          </template>
        </template>
      </a-alert>
    </template>
    <template #toolbar>
      <a-button type="primary" @click="getFormValues">获取表单数据</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getFormConfig, demoListApi } from './tableData';
  import { Alert } from 'ant-design-vue';
  //import { demoListApi } from '/@/api/demo/table';
  import { defHttp } from '/@/utils/http/axios';

  export default defineComponent({
    components: { BasicTable, AAlert: Alert },
    async setup() {
      // 获取表头字段数据
      async function getheaderField() {
        return await defHttp.get({
          url: '/adminapi/OperationApplication/hqbt',
          headers: {
            // @ts-ignore
            ignoreCancelToken: true,
          },
          // requestOptions:{
          //   isTransformResponse: true,
          // }
        });
      }
      const headerFields = await getheaderField();
      // console.log(headerFields);

      const checkedKeys = ref<Array<string | number>>([]);
      const [registerTable, { getForm }] = useTable({
        // title: '开启搜索区域',
        api: demoListApi,
        columns: headerFields,
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
      });

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      function onSelectChange(selectedRowKeys: (string | number)[]) {
        console.log(selectedRowKeys);
        checkedKeys.value = selectedRowKeys;
      }

      return {
        registerTable,
        getFormValues,
        checkedKeys,
        onSelectChange,
      };
    },
  });
</script>

<style scoped>
  .table-column-drag-icon {
    display: none;
  }

  .vben-basic-column-setting__fixed-left,
  .vben-basic-column-setting__fixed-right {
    display: none !important;
  }

  .ant-divider-vertical {
    display: none;
  }

  .vben-basic-column-setting__check-item {
    min-width: 50%;
    float: left;
    padding: 0;
  }

  .vben-basic-column-setting__cloumn-list .ant-checkbox-group {
    width: 260px;
  }

  .scroll-container .scrollbar__view {
    display: flex;
    justify-content: center;
  }
</style>