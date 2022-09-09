<template>
  <BasicDrawer v-bind="$attrs" title="手术申请单" width="60%">
    <div class="edit_drawer_container">
      <BasicForm :schemas="schemas">
        <template #department-info-divider-bar>
          <div class="separate_title">
            <h1>科室信息</h1>
            <span>(必填)</span>
          </div>
        </template>

        <template #patient-info-divider-bar>
          <div class="separate_title">
            <h1>患者信息</h1>
            <span>(必填)</span>
          </div>
        </template>

        <template #surgical-info-divider-bar>
          <div class="separate_title">
            <h1>手术信息</h1>
            <span>(必填)</span>
          </div>
        </template>

        <template #preoperative-diagnosis-rich-text>
          <a-textarea v-model:value="desc" />
        </template>
      </BasicForm>
    </div>
  </BasicDrawer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  // 抽屉
  import { BasicDrawer } from '/@/components/Drawer';
  import { BasicForm, FormSchema } from '/@/components/Form/index';

  // 表单配置
  const schemas: FormSchema[] = [
    // 申请单号
    {
      labelWidth: '10.2%',
      field: 'application-number',
      label: '申请单号',
      component: 'Input',
      colProps: {
        span: 24,
      },
      componentProps: {
        placeholder: '请输入单号',
        style: 'width: 25.5%;',
      },
    },

    // 分隔栏
    {
      labelWidth: 0,
      field: 'divider-bar',
      label: '',
      slot: 'department-info-divider-bar',
      component: 'Select',
      colProps: {
        span: 24,
      },
    },
    // 申请科室
    {
      labelWidth: '31.1%',
      field: 'application-department',
      label: '申请科室',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择科室',
        // style: {
        //   minWidth: '115px',
        //   maxWidth: '180px',
        //   transition: 'min-width 1s, max-width 1s',
        // },
        options: [
          {
            label: '麻醉科',
            value: '1',
            key: '1',
          },
        ],
      },
    },
    // 申请医生
    {
      labelWidth: '30%',
      field: 'application-doctor',
      label: '申请医生',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择医生',
        // style: {
        //   minWidth: '115px',
        //   maxWidth: '180px',
        //   transition: 'min-width 1s, max-width 1s',
        // },
        options: [
          {
            label: '李鹏鹏',
            value: '1',
            key: '1',
          },
        ],
      },
    },
    // 手术类别
    {
      labelWidth: '26%',
      field: 'Operation-type',
      label: '手术类别',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择手术类别',
        // style: {
        //   minWidth: '115px',
        //   maxWidth: '180px',
        //   transition: 'min-width 1s, max-width 1s',
        // },
        options: [
          {
            label: '麻醉',
            value: '1',
            key: '1',
          },
        ],
      },
    },
    // 提交日期
    {
      labelWidth: '31.1%',
      // labelWidth: 95,
      field: 'submission-date',
      label: '提交日期',
      component: 'DatePicker',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择日期',
        style: {
          width: '100%',
          // minWidth: '115px',
          // maxWidth: '180px',
          // transition: 'min-width 1s, max-width 1s',
        },
      },
    },
    // 申请手术日期
    {
      labelWidth: '30%',
      field: 'application-operation-date',
      label: '申请手术日期',
      component: 'DatePicker',
      colProps: {
        span: 8,
        // offset: 1
      },
      componentProps: {
        placeholder: '请选择申请手术日期',
        style: {
          width: '100%',
          // minWidth: '115px',
          // maxWidth: '180px',
          // transition: 'min-width 1s, max-width 1s',
        },
      },
    },
    // 拟用手术室
    {
      labelWidth: '26%',
      field: 'proposed-operating-room',
      label: '拟用手术室',
      component: 'Select',
      colProps: {
        span: 8,
        // offset: 1
      },
      componentProps: {
        placeholder: '请选择拟用手术室',
        style: {
          width: '100%',
          // minWidth: '115px',
          // maxWidth: '180px',
          // transition: 'min-width 1s, max-width 1s',
        },
        options: [
          {
            label: 'A手术室',
            value: '1',
            key: '1',
          },
        ],
      },
    },

    // 分隔栏
    {
      labelWidth: 0,
      field: 'divider-bar',
      label: '',
      slot: 'patient-info-divider-bar',
      component: 'Select',
      colProps: {
        span: 24,
      },
    },
    // 住院号
    {
      labelWidth: '31.1%',
      field: 'inpatient-number',
      label: '住院号',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入住院号',
        // class: 'custon-name'
        // style: {
        //   minWidth: '115px',
        //   maxWidth: '180px',
        //   transition: 'min-width 1s, max-width 1s',
        // },

      },
    },
    // 姓名
    {
      labelWidth: '30%',
      field: 'inpatient-number',
      label: '姓名',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入姓名',
        // style: {
        //   minWidth: '115px',
        //   maxWidth: '180px',
        //   transition: 'min-width 1s, max-width 1s',
        // },
      },
    },
    // 性别
    {
      labelWidth: '26%',
      field: 'gender',
      label: '性别',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入性别',
        // style: {
        //   minWidth: '115px',
        //   maxWidth: '180px',
        //   transition: 'min-width 1s, max-width 1s',
        // },
      },
    },
    // 身份证号
    {
      labelWidth: '31.1%',
      field: 'id-number',
      label: '身份证号',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入身份证号',
        // style: {
        //   minWidth: '115px',
        //   maxWidth: '180px',
        //   transition: 'min-width 1s, max-width 1s',
        // },
      },
    },
    // 联系方式
    {
      labelWidth: '30%',
      field: 'contact-information',
      label: '联系方式',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入联系方式',
        // style: {
        //   minWidth: '115px',
        //   maxWidth: '180px',
        //   transition: 'min-width 1s, max-width 1s',
        // },
      },
    },
    // 年龄
    {
      labelWidth: '26%',
      field: 'age',
      label: '年龄',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择年龄',
        // style: {
        //   minWidth: '115px',
        //   maxWidth: '180px',
        //   transition: 'min-width 1s, max-width 1s',
        // },
      },
    },

    // 分隔栏
    {
      labelWidth: 0,
      field: 'divider-bar',
      label: '',
      slot: 'surgical-info-divider-bar',
      component: 'Select',
      colProps: {
        span: 24,
      },
    },
    // 术前诊断
    {
      labelWidth: '10.2%',
      field: 'preoperative-diagnosis',
      label: '术前诊断',
      component: 'Select',
      slot: 'preoperative-diagnosis-rich-text',
      colProps: {
        span: 24,
      },
    },
  ];

  export default defineComponent({
    components: {
      BasicDrawer,
      BasicForm, // 表单
    },
    setup() {
      return {
        schemas,
      };
    },
  });
</script>

<style lang="less">
  // @media screen and (max-width: 1550px) {
  //   .edit_drawer_container {
  //     .ant-input-affix-wrapper {

  //     }
  //   }
  // }

  .edit_drawer_container {
    .separate_title {
      display: flex;
      align-items: center;
      height: 20px;
      border-left: 4px solid #27c5b7;
      padding-left: 10px;

      h1 {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
      }

      span {
        font-size: 12px;
        font-weight: 400;
        color: #c52727;
        opacity: 0.5;
        margin-left: 10px;
      }
    }
  }
</style>