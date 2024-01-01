<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm">
            <h2>后台管理系统</h2>
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" type="username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)" class="btu">Submit</el-button>
                <el-button @click="resetForm(ruleFormRef)" class="btu">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus';

const ruleFormRef = ref<FormInstance>()
const validateUsername = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the Username'))
    } else {
        if (ruleForm.username !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('username', () => null)
        }
        callback()
    }
}
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    username: '',
    checkPass: '',
})
const rules = reactive<FormRules<typeof ruleForm>>({
    username: [{ validator: validateUsername, trigger: 'blur' }],
    checkPass: [{ validator: validatePass, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
// export default defineComponent({
//     setup() {
//   const data=reactive({
//
// })
//         return {}
//     }
// })
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url("../assets/loginbg.jpg");
    padding: 1px;
    text-align: center;

    .demo-ruleForm {
        width: 500px;
        margin: 200px auto;
        background-color: white;
        padding: 40px;
        border-radius: 20px;
    }

    .btu {
        width: 48%;
    }

    h2 {
        margin-bottom: 10px;
    }
}
</style>