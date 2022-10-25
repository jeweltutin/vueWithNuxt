<template>
<div class="row justify-content-center mt-5">
    <div class="col-6">
        <div class="card">
            <div class="card-header">
                Forgot Password
            </div>
            <div class="card-body">
                <form @submit.prevent="sendPasswordResetEmail" @keydown="forgetPassword.onKeydown($event)">
                    <div class="form-group mb-3">
                        <label for="">Email</label>
                        <input type="text" class="form-control" name="email" v-model="forgetPassword.email" placeholder="Enter Email">
                        <div class="errorShow" v-if="forgetPassword.errors.has('email')" v-html="forgetPassword.errors.get('email')" />
                    </div>
                    <div class="form-group d-flex justify-content-between align-items-center">
                        <button type="submit" class="btn btn-success" :disabled="forgetPassword.busy">
                            Send Password Reset Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    auth: 'guest',
    data() {
        return {
            forgetPassword: this.$vform({
                email: ''
            })
        }
    },
    methods: {
        async sendPasswordResetEmail() {
            try {
                //alert(this.forgetPassword.email);
                let { response } = await this.forgetPassword.post('/auth/password/email')

                this.$toast.success({
                    title: 'Success!',
                    message: 'Reset password email has been sent',
                })

            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>
