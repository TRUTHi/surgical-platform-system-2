<template>
  <BasicDrawer v-bind="$attrs" title="手术申请单" width="60%" ref="container">
    <div class="edit_drawer_container">
      <BasicForm
        :schemas="schemas"
        :submitButtonOptions="submitButtonOptions"
        :actionColOptions="actionColOptions"
        :resetButtonOptions="resetButtonOptions"
      >
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
          <a-textarea v-model:value="desc1" :style="{ width: '96%', height: '65px' }" />
        </template>

        <template #device-requirements-rich-text>
          <a-textarea v-model:value="desc2" :style="{ width: '96%', height: '65px' }" />
        </template>

        <template #special-matter-rich-text>
          <a-textarea v-model:value="desc3" :style="{ width: '96%', height: '65px' }" />
        </template>
      </BasicForm>
    </div>
  </BasicDrawer>
</template>

<!-- <script lang="ts"> -->
<script lang="tsx">
  import { defineComponent } from 'vue';
  // 抽屉
  import { BasicDrawer } from '/@/components/Drawer';
  import { BasicForm, FormSchema } from '/@/components/Form/index';

  // 表单配置
  const schemas: FormSchema[] = [
    // 申请单号
    {
      labelWidth: '10%',
      field: 'application-number',
      label: '申请单号',
      component: 'Input',
      colProps: {
        span: 24,
      },
      componentProps: {
        placeholder: '请输入单号',
        class: 'custom-row-input',
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
      labelWidth: '30%',
      field: 'application-department',
      label: '申请科室',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择科室',
        style: {
          width: '85%',
        },
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
        style: {
          width: '85%',
        },
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
      labelWidth: '30%',
      field: 'Operation-type',
      label: '手术类别',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择手术类别',
        style: {
          width: '85%',
        },
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
      labelWidth: '30%',
      field: 'submission-date',
      label: '提交日期',
      component: 'DatePicker',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择日期',
        style: {
          width: '85%',
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
      },
      componentProps: {
        placeholder: '请选择申请手术日期',
        style: {
          width: '85%',
        },
      },
    },
    // 拟用手术室
    {
      labelWidth: '30%',
      field: 'proposed-operating-room',
      label: '拟用手术室',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择拟用手术室',
        style: {
          width: '85%',
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
      labelWidth: '30%',
      field: 'inpatient-number',
      label: '住院号',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入住院号',
        style: {
          width: '85%',
        },
      },
      renderComponentContent: () => {
        return {
          suffix: () => (
            <svg
              t="1663119332851"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1632"
              width="16"
              height="14"
            >
              <path
                d="M204.8 955.2H33.6c-20.8 0-33.6-12.8-33.6-33.6V756.8c0-9.6 3.2-17.6 9.6-24l683.2-656c12.8-12.8 33.6-12.8 48 0L912 241.6c6.4 6.4 9.6 14.4 9.6 24s-3.2 17.6-9.6 24L228.8 944c-6.4 8-14.4 11.2-24 11.2z m-136-68.8H192l648-620.8-123.2-116.8L68.8 771.2v115.2z"
                fill="#999999"
                p-id="1633"
              ></path>
              <path
                d="M747.2 432c-6.4 0-17.6-3.2-24-9.6L553.6 257.6c-12.8-14.4-12.8-33.6 0-48 12.8-14.4 33.6-14.4 48 0l171.2 163.2c12.8 14.4 12.8 33.6 0 48-4.8 8-14.4 11.2-25.6 11.2z"
                fill="#999999"
                p-id="1634"
              ></path>
              <path
                d="M990.4 955.2H436.8c-20.8 0-33.6-12.8-33.6-33.6s14.4-33.6 33.6-33.6h553.6c20.8 0 33.6 12.8 33.6 33.6s-12.8 33.6-33.6 33.6z"
                fill="#999999"
                p-id="1635"
              ></path>
            </svg>
          ),
        };
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
        style: {
          width: '85%',
        },
      },
      renderComponentContent: () => {
        return {
          suffix: () => (
            <svg
              t="1663119332851"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1632"
              width="16"
              height="14"
            >
              <path
                d="M204.8 955.2H33.6c-20.8 0-33.6-12.8-33.6-33.6V756.8c0-9.6 3.2-17.6 9.6-24l683.2-656c12.8-12.8 33.6-12.8 48 0L912 241.6c6.4 6.4 9.6 14.4 9.6 24s-3.2 17.6-9.6 24L228.8 944c-6.4 8-14.4 11.2-24 11.2z m-136-68.8H192l648-620.8-123.2-116.8L68.8 771.2v115.2z"
                fill="#999999"
                p-id="1633"
              ></path>
              <path
                d="M747.2 432c-6.4 0-17.6-3.2-24-9.6L553.6 257.6c-12.8-14.4-12.8-33.6 0-48 12.8-14.4 33.6-14.4 48 0l171.2 163.2c12.8 14.4 12.8 33.6 0 48-4.8 8-14.4 11.2-25.6 11.2z"
                fill="#999999"
                p-id="1634"
              ></path>
              <path
                d="M990.4 955.2H436.8c-20.8 0-33.6-12.8-33.6-33.6s14.4-33.6 33.6-33.6h553.6c20.8 0 33.6 12.8 33.6 33.6s-12.8 33.6-33.6 33.6z"
                fill="#999999"
                p-id="1635"
              ></path>
            </svg>
          ),
        };
      },
    },
    // 性别
    {
      labelWidth: '30%',
      field: 'gender',
      label: '性别',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入性别',
        style: {
          width: '85%',
        },
      },
    },
    // 身份证号
    {
      labelWidth: '30%',
      field: 'id-number',
      label: '身份证号',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入身份证号',
        style: {
          width: '85%',
        },
      },
      renderComponentContent: () => {
        return {
          suffix: () => (
            <svg
              t="1663119332851"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1632"
              width="16"
              height="14"
            >
              <path
                d="M204.8 955.2H33.6c-20.8 0-33.6-12.8-33.6-33.6V756.8c0-9.6 3.2-17.6 9.6-24l683.2-656c12.8-12.8 33.6-12.8 48 0L912 241.6c6.4 6.4 9.6 14.4 9.6 24s-3.2 17.6-9.6 24L228.8 944c-6.4 8-14.4 11.2-24 11.2z m-136-68.8H192l648-620.8-123.2-116.8L68.8 771.2v115.2z"
                fill="#999999"
                p-id="1633"
              ></path>
              <path
                d="M747.2 432c-6.4 0-17.6-3.2-24-9.6L553.6 257.6c-12.8-14.4-12.8-33.6 0-48 12.8-14.4 33.6-14.4 48 0l171.2 163.2c12.8 14.4 12.8 33.6 0 48-4.8 8-14.4 11.2-25.6 11.2z"
                fill="#999999"
                p-id="1634"
              ></path>
              <path
                d="M990.4 955.2H436.8c-20.8 0-33.6-12.8-33.6-33.6s14.4-33.6 33.6-33.6h553.6c20.8 0 33.6 12.8 33.6 33.6s-12.8 33.6-33.6 33.6z"
                fill="#999999"
                p-id="1635"
              ></path>
            </svg>
          ),
        };
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
        style: {
          width: '85%',
        },
      },
      renderComponentContent: () => {
        return {
          suffix: () => (
            <svg
              t="1663119332851"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1632"
              width="16"
              height="14"
            >
              <path
                d="M204.8 955.2H33.6c-20.8 0-33.6-12.8-33.6-33.6V756.8c0-9.6 3.2-17.6 9.6-24l683.2-656c12.8-12.8 33.6-12.8 48 0L912 241.6c6.4 6.4 9.6 14.4 9.6 24s-3.2 17.6-9.6 24L228.8 944c-6.4 8-14.4 11.2-24 11.2z m-136-68.8H192l648-620.8-123.2-116.8L68.8 771.2v115.2z"
                fill="#999999"
                p-id="1633"
              ></path>
              <path
                d="M747.2 432c-6.4 0-17.6-3.2-24-9.6L553.6 257.6c-12.8-14.4-12.8-33.6 0-48 12.8-14.4 33.6-14.4 48 0l171.2 163.2c12.8 14.4 12.8 33.6 0 48-4.8 8-14.4 11.2-25.6 11.2z"
                fill="#999999"
                p-id="1634"
              ></path>
              <path
                d="M990.4 955.2H436.8c-20.8 0-33.6-12.8-33.6-33.6s14.4-33.6 33.6-33.6h553.6c20.8 0 33.6 12.8 33.6 33.6s-12.8 33.6-33.6 33.6z"
                fill="#999999"
                p-id="1635"
              ></path>
            </svg>
          ),
        };
      },
    },
    // 年龄
    {
      labelWidth: '30%',
      field: 'age',
      label: '年龄',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择年龄',
        style: {
          width: '85%',
        },
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
      labelWidth: '10%',
      field: 'preoperative-diagnosis',
      label: '术前诊断',
      component: 'Select',
      slot: 'preoperative-diagnosis-rich-text',
      colProps: {
        span: 24,
      },
    },
    // 拟施手术名称
    {
      labelWidth: '30%',
      field: 'proposed-operation-name',
      label: '拟施手术名称',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入拟施手术名称',
        style: {
          width: '85%',
        },
      },
      renderComponentContent: () => {
        return {
          suffix: () => (
            <svg
              t="1663119332851"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1632"
              width="16"
              height="14"
            >
              <path
                d="M204.8 955.2H33.6c-20.8 0-33.6-12.8-33.6-33.6V756.8c0-9.6 3.2-17.6 9.6-24l683.2-656c12.8-12.8 33.6-12.8 48 0L912 241.6c6.4 6.4 9.6 14.4 9.6 24s-3.2 17.6-9.6 24L228.8 944c-6.4 8-14.4 11.2-24 11.2z m-136-68.8H192l648-620.8-123.2-116.8L68.8 771.2v115.2z"
                fill="#999999"
                p-id="1633"
              ></path>
              <path
                d="M747.2 432c-6.4 0-17.6-3.2-24-9.6L553.6 257.6c-12.8-14.4-12.8-33.6 0-48 12.8-14.4 33.6-14.4 48 0l171.2 163.2c12.8 14.4 12.8 33.6 0 48-4.8 8-14.4 11.2-25.6 11.2z"
                fill="#999999"
                p-id="1634"
              ></path>
              <path
                d="M990.4 955.2H436.8c-20.8 0-33.6-12.8-33.6-33.6s14.4-33.6 33.6-33.6h553.6c20.8 0 33.6 12.8 33.6 33.6s-12.8 33.6-33.6 33.6z"
                fill="#999999"
                p-id="1635"
              ></path>
            </svg>
          ),
        };
      },
    },
    // 手术级别
    {
      labelWidth: '30%',
      field: 'surgical-grade',
      label: '手术级别',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入手术级别',
        style: {
          width: '85%',
        },
      },
    },
    // 拟施体位
    {
      labelWidth: '30%',
      field: 'proposed-position',
      label: '拟施体位',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择拟施体位',
        style: {
          width: '85%',
        },
      },
    },
    // 手术台次
    {
      labelWidth: '30%',
      field: 'several-operations',
      label: '手术台次',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入手术台次',
        style: {
          width: '85%',
        },
      },
    },
    // 手术部位
    {
      labelWidth: '30%',
      field: 'Surgical-site',
      label: '手术部位',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入手术部位',
        style: {
          width: '85%',
        },
      },
    },
    // 切口类别
    {
      labelWidth: '30%',
      field: 'proposed-position',
      label: '切口类别',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请选择切口类别',
        style: {
          width: '85%',
        },
      },
    },
    // 预计手术时间
    {
      labelWidth: '30%',
      field: 'estimated-operation-time',
      label: '预计手术时间',
      component: 'Input',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入预计手术时间',
        style: {
          width: '85%',
        },
      },
      renderComponentContent: () => {
        return {
          suffix: () => (
            <svg
              t="1663119580018"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1907"
              width="16"
              height="14"
            >
              <path
                d="M566.4 8C244.8-27.2-27.2 244.8 8 566.4c24 235.2 212.8 424 448 449.6 323.2 33.6 593.6-236.8 558.4-558.4C990.4 220.8 801.6 32 566.4 8z m-19.2 939.2C278.4 968 56 744 76.8 476.8c17.6-211.2 188.8-382.4 400-400 268.8-20.8 491.2 201.6 470.4 470.4-17.6 211.2-188.8 382.4-400 400z"
                fill="#999999"
                p-id="1908"
              ></path>
              <path
                d="M476.8 262.4V528L672 700.8c14.4 12.8 36.8 11.2 49.6-3.2 12.8-14.4 11.2-36.8-3.2-49.6L547.2 496V262.4c0-19.2-16-35.2-35.2-35.2-19.2-1.6-35.2 14.4-35.2 35.2z"
                fill="#999999"
                p-id="1909"
              ></path>
            </svg>
          ),
        };
      },
    },

    // 分隔栏
    {
      labelWidth: 0,
      field: 'divider-bar',
      label: '以下信息可做选填，由科室人员确定最终信息',
      component: 'Divider',
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          color: 'rgba(197, 39, 39, .5)',
        },
      },
    },
    // 手术医生
    {
      labelWidth: '30%',
      field: 'surgeon',
      label: '手术医生',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入手术医生',
        style: {
          width: '85%',
        },
      },
    },
    // 第一助理
    {
      labelWidth: '30%',
      field: 'surgeon-assistant-1',
      label: '第一助理',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入第一助理',
        style: {
          width: '85%',
        },
      },
    },
    // 第二助理
    {
      labelWidth: '30%',
      field: 'surgeon-assistant-2',
      label: '第二助理',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入第二助理',
        style: {
          width: '85%',
        },
      },
    },
    // 麻醉医生
    {
      labelWidth: '30%',
      field: 'anesthesiologist',
      label: '麻醉医生',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入麻醉医生',
        style: {
          width: '85%',
        },
      },
    },
    // 第一助理
    {
      labelWidth: '30%',
      field: 'anesthesiologist-assistant-1',
      label: '第一助理',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入第一助理',
        style: {
          width: '85%',
        },
      },
    },
    // 第二助理
    {
      labelWidth: '30%',
      field: 'anesthesiologist-assistant-2',
      label: '第二助理',
      component: 'Select',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '请输入第二助理',
        style: {
          width: '85%',
        },
      },
    },
    // 拟施麻醉
    {
      labelWidth: '10%',
      field: 'anesthesiologist',
      label: '拟施麻醉',
      component: 'Select',
      colProps: {
        span: 24,
      },
      componentProps: {
        placeholder: '请输入拟施麻醉',
        class: 'custom-row-input',
      },
    },
    // 器械要求
    {
      labelWidth: '10%',
      field: 'device-requirements',
      label: '器械要求',
      component: 'Select',
      slot: 'device-requirements-rich-text',
      colProps: {
        span: 24,
      },
    },
    // 特殊事项
    {
      labelWidth: '10%',
      field: 'special-matter',
      label: '特殊事项',
      component: 'Select',
      slot: 'special-matter-rich-text',
      colProps: {
        span: 24,
      },
    },
  ];

  // 节流
  function throttle(callback, delay) {
    let timer = 0;
    return function () {
      if (timer) return false;
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = 0;
      }, delay);
      callback();
    };
  }

  export default defineComponent({
    components: {
      BasicDrawer,
      BasicForm, // 表单
    },
    setup() {
      return {
        // schemas,
      };
    },
    data() {
      return {
        schemas,
        // 操作按钮外层 Col 组件配置
        actionColOptions: { span: 24, style: { textAlign: 'left' } },
        // 确认按钮配置
        submitButtonOptions: {
          text: '提交',
        },
        // 重置按钮配置
        resetButtonOptions: {
          style: {
            'margin-left': '10%',
          },
        },
      };
    },
    mounted() {
      // 页面首次加载, 如果屏幕宽度小于 1550 像素
      if (window.innerWidth <= 1550) {
        // 自适应 重置按钮
        this.resetButtonOptions.style['margin-left'] = '11.5%';
        this.schemas.forEach((item) => {
          // 如果是那几个独占一行的, 就把他们的标签宽度改大些
          if (
            item.label == '术前诊断' ||
            item.label == '申请单号' ||
            item.label == '拟施麻醉' ||
            item.label == '器械要求' ||
            item.label == '特殊事项'
          )
            return (item.labelWidth = '11.5%');
          // 其他的也改大些
          item.labelWidth = '35%';
        });
      }

      // 当用户调整窗口大小
      window.onresize = throttle(() => {
        // 如果屏幕宽度小于 1550 像素
        if (window.innerWidth <= 1550) {
          // 自适应 重置按钮
          this.resetButtonOptions.style['margin-left'] = '11.5%';
          this.schemas.forEach((item) => {
            if (
              item.label == '术前诊断' ||
              item.label == '申请单号' ||
              item.label == '拟施麻醉' ||
              item.label == '器械要求' ||
              item.label == '特殊事项'
            )
              return (item.labelWidth = '11.5%');
            item.labelWidth = '35%';
          });
          // 否则的话, 屏幕宽度大于 1550 像素
        } else {
          // 自适应 重置按钮
          this.resetButtonOptions.style['margin-left'] = '10%';
          this.schemas.forEach((item) => {
            if (
              item.label == '术前诊断' ||
              item.label == '申请单号' ||
              item.label == '拟施麻醉' ||
              item.label == '器械要求' ||
              item.label == '特殊事项'
            )
              return (item.labelWidth = '10%');
            item.labelWidth = '30%';
          });
        }
      }, 250);
    },
  });
</script>

<style lang="less">
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

    .ant-divider-horizontal.ant-divider-with-text {
      margin: 16px 0 28px 0;
    }

    .ant-select-arrow {
      right: 13px;
    }

    .custom-row-input {
      width: 22%;
    }
  }

  @media screen and (max-width: 1550px) {
    .edit_drawer_container {
      .custom-row-input {
        width: 20%;
      }
    }
  }
</style>
