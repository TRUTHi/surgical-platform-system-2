<template>
  <div class="application_container">
    <BasicTable
      @register="registerTable"
      :rowSelection="{ type: 'checkbox', selectedRowKeys: checkedKeys, onChange: onSelectChange }"
    >
      <!-- 患者名字 -->
      <template #form-hzname>
        <a-input placeholder="请输入患者姓名" v-model:value="queryListForm.patientName">
          <template #suffix>
            <svg
              t="1662606045984"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3273"
              width="16"
              height="14"
            >
              <path
                d="M204.8 955.2H33.6c-20.8 0-33.6-12.8-33.6-33.6V756.8c0-9.6 3.2-17.6 9.6-24l683.2-656c12.8-12.8 33.6-12.8 48 0L912 241.6c6.4 6.4 9.6 14.4 9.6 24s-3.2 17.6-9.6 24L228.8 944c-6.4 8-14.4 11.2-24 11.2z m-136-68.8H192l648-620.8-123.2-116.8L68.8 771.2v115.2z"
                fill="#999999"
                p-id="3274"
              />
              <path
                d="M747.2 432c-6.4 0-17.6-3.2-24-9.6L553.6 257.6c-12.8-14.4-12.8-33.6 0-48 12.8-14.4 33.6-14.4 48 0l171.2 163.2c12.8 14.4 12.8 33.6 0 48-4.8 8-14.4 11.2-25.6 11.2z"
                fill="#999999"
                p-id="3275"
              />
              <path
                d="M990.4 955.2H436.8c-20.8 0-33.6-12.8-33.6-33.6s14.4-33.6 33.6-33.6h553.6c20.8 0 33.6 12.8 33.6 33.6s-12.8 33.6-33.6 33.6z"
                fill="#999999"
                p-id="3276"
              />
            </svg>
          </template>
        </a-input>
      </template>

      <!-- 住院号 -->
      <template #form-zynumber>
        <a-input placeholder="请输入住院号" v-model:value="userName">
          <template #suffix>
            <svg
              t="1662606045984"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3273"
              width="16"
              height="14"
            >
              <path
                d="M204.8 955.2H33.6c-20.8 0-33.6-12.8-33.6-33.6V756.8c0-9.6 3.2-17.6 9.6-24l683.2-656c12.8-12.8 33.6-12.8 48 0L912 241.6c6.4 6.4 9.6 14.4 9.6 24s-3.2 17.6-9.6 24L228.8 944c-6.4 8-14.4 11.2-24 11.2z m-136-68.8H192l648-620.8-123.2-116.8L68.8 771.2v115.2z"
                fill="#999999"
                p-id="3274"
              />
              <path
                d="M747.2 432c-6.4 0-17.6-3.2-24-9.6L553.6 257.6c-12.8-14.4-12.8-33.6 0-48 12.8-14.4 33.6-14.4 48 0l171.2 163.2c12.8 14.4 12.8 33.6 0 48-4.8 8-14.4 11.2-25.6 11.2z"
                fill="#999999"
                p-id="3275"
              />
              <path
                d="M990.4 955.2H436.8c-20.8 0-33.6-12.8-33.6-33.6s14.4-33.6 33.6-33.6h553.6c20.8 0 33.6 12.8 33.6 33.6s-12.8 33.6-33.6 33.6z"
                fill="#999999"
                p-id="3276"
              />
            </svg>
          </template>
        </a-input>
      </template>

      <!-- 表格顶部左侧区域 -->
      <template #tableTitle>
        <div class="left_button">
          <div class="button_operation_application ant-btn-primary">
            <span>手术申请</span>
            <plus-circle-outlined />
          </div>
          <div class="button_commit_his">
            <span>提交HIS</span>
          </div>
          <div class="button_sync_data">
            <span>同步数据</span>
          </div>
        </div>
      </template>

      <!-- 操作列 -->
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'operation'">
          <TableAction :actions="createActions(record, column)" />
        </template>
      </template>
    </BasicTable>

    <!-- 抽屉 (编辑) -->
    <EditDrawer @register="registerEditDrawer" />
  </div>
</template>

<script lang="ts">
  import { PlusCircleOutlined } from '@ant-design/icons-vue';
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { demoListApi } from './tableData';
  import { Alert } from 'ant-design-vue';
  import { defHttp } from '/@/utils/http/axios';
  // 抽屉
  import { useDrawer } from '/@/components/Drawer';
  // 抽屉 (编辑)
  import EditDrawer from './drawer/EditDrawer.vue';

  export default defineComponent({
    components: {
      BasicTable,
      AAlert: Alert,
      PlusCircleOutlined,
      TableAction,
      EditDrawer, // 抽屉 (编辑)
    },
    async setup() {
      // 注册 编辑 抽屉
      const [registerEditDrawer, { openDrawer: openEditDrawer }] = useDrawer();

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
        // 表单配置
        formConfig: getFormConfig(),
        // 显示表格设置工具
        showTableSetting: true,
        // 表格设置工具配置
        tableSetting: {
          fullScreen: true,
        },
        // 操作列
        actionColumn: {
          width: 192,
          title: '操作',
          dataIndex: 'operation',
          // slots: { customRender: 'action' },
        },
        showIndexColumn: false,
        rowKey: 'id',
        // 点击行是否选中
        clickToRowSelect: false,
      });

      // 表单配置
      function getFormConfig() {
        return {
          labelWidth: 40,
          // 操作按钮外层 Col 组件配置
          actionColOptions: {
            span: 4,
            style: 'text-align: left; padding-left: 40px;',
          },
          schemas: [
            {
              labelWidth: 30,
              field: 'sssdate',
              label: ' ',
              component: 'DatePicker',
              colProps: {
                span: 4,
              },
              componentProps: {
                placeholder: '请选择申请手术日期',
                style: 'width: 100%',
              },
            },
            {
              field: 'hzname',
              label: ' ',
              component: 'Input',
              colProps: {
                span: 4,
              },
              slot: 'hzname',
            },
            {
              field: 'zynumber',
              label: ' ',
              component: 'Input',
              colProps: {
                span: 4,
              },
              slot: 'zynumber',
            },
            {
              field: 'sjname',
              component: 'Select',
              label: ' ',
              colProps: {
                span: 4,
              },
              componentProps: {
                placeholder: '请选择术间名称',
                options: [
                  {
                    label: '选项1',
                    value: '1',
                    key: '1',
                  },
                  {
                    label: '选项2',
                    value: '2',
                    key: '2',
                  },
                  {
                    label: '选项3',
                    value: '3',
                    key: '3',
                  },
                  {
                    label: '选项4',
                    value: '4',
                    key: '4',
                  },
                  {
                    label: '选项5',
                    value: '5',
                    key: '5',
                  },
                  {
                    label: '选项6',
                    value: '6',
                    key: '6',
                  },
                  {
                    label: '选项7',
                    value: '7',
                    key: '7',
                  },
                  {
                    label: '选项8',
                    value: '8',
                    key: '8',
                  },
                  {
                    label: '选项9',
                    value: '9',
                    key: '9',
                  },
                  {
                    label: '选项10',
                    value: '10',
                    key: '10',
                  },
                ],
              },
            },
          ],
          // resetFunc() {
          //   console.log('hhh')
          // }
        };
      }

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      function onSelectChange(selectedRowKeys: (string | number)[]) {
        console.log(selectedRowKeys);
        checkedKeys.value = selectedRowKeys;
      }

      // 固定列
      function createActions(record, column) {
        // 当前条 record
        // 当前列 column
        return [
          {
            label: '编辑',
            onClick: clickEditButton.bind(null, record),
          },
          {
            label: '查看',
          },
          {
            label: '审核',
          },
        ];
      }
      // 当用户点击编辑时被调用
      function clickEditButton(record) {
        // 当前条 record
        openEditDrawer(); // 打开抽屉 (编辑)
      }

      return {
        registerTable,
        getFormValues,
        checkedKeys,
        onSelectChange,
        createActions,
        openEditDrawer,
        registerEditDrawer,
      };
    },
    data() {
      return {
        // 列表查询 表单对象
        queryListForm: {
          patientName: '',
        },
      };
    },
  });
</script>

<style lang="less">
  .application_container {
    // 左侧按钮
    .ant-table-title {
      .left_button {
        flex: 1;
        display: flex;

        .button_operation_application,
        .button_commit_his,
        .button_sync_data {
          user-select: none;
          width: 102px;
          height: 32px;
          border-radius: 4px;
          line-height: 32px;
          cursor: pointer;
          font-size: 14px;
        }

        .button_operation_application {
          // background: #27c5b7;
          color: #ffffff;
          padding-left: 35px;
          position: relative;

          .anticon-plus-circle {
            position: absolute;
            font-size: 16px;
            left: 12px;
            top: 8px;
          }
        }

        .button_commit_his,
        .button_sync_data {
          background: #ffffff;
          border: 1px solid #efefef;
          text-align: center;
          margin-left: 20px;
        }
      }

      .vben-basic-table-header__toolbar {
        .table-settings {
          margin-right: 0;
          > span {
            border: 1px solid #efefef;
            padding: 3px;
            border-radius: 4px;
          }

          > * {
            margin-right: 0;
            margin-left: 12px;
          }
        }
      }
    }

    .vben-basic-table .ant-table-wrapper {
      padding: 20px;
    }

    // 编辑 查看 审核
    .vben-basic-table-action.center {
      button {
        &:nth-of-type(1) {
          span {
            color: #4292f5;
          }
        }
        &:nth-of-type(2) {
          span {
            color: #42c0f5;
          }
        }
        &:nth-of-type(3) {
          span {
            color: #f58e42;
          }
        }
      }
    }

    // 筛选区域
    .vben-basic-column-setting__cloumn-list {
      .scrollbar__view {
        display: flex;
        justify-content: center;
        .ant-checkbox-group {
          width: 260px;
          .vben-basic-column-setting__check-item {
            min-width: 50%;
            float: left;
            padding: 0;
            .table-column-drag-icon {
              display: none;
            }
            .ant-divider-vertical {
              display: none;
            }
            .vben-basic-column-setting__fixed-left,
            .vben-basic-column-setting__fixed-right {
              display: none !important;
            }
          }
        }
      }
    }
  }
</style>
