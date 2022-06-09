<template>
<div>
    <form action="" @submit.prevent="submit">
        <div class="fs-2 text-secondary">Login</div>
        <!-- <img :src="image" alt="...">-->
        <br>
        <div class="card shadow border-0" :class="v$.$error === true ? 'border border-danger border border-2':' border border-2 border '" style="width: 25rem;">

            <div class="card-body">
                <p class="card-text"></p>

                <label for=""> Email</label>
                <br>
                <span><i class="bi bi-person-fill"></i></span>
                <input type="text" v-model.trim="email" @blur="v$.email.$touch" class="form-control" :class="v$.$error === true ? 'border-danger':'border-primary'">
                <div style="color:red" v-for=" error in v$.email.$errors" :key="error.$uid">{{error.$message}}</div>
                <br><br>

                <label for=""> Password</label><br>
                <span><i class="bi bi-key-fill"></i></span>
                <input type="password" v-model.trim="password" class="form-control" :class="v$.$error === true ? 'border-danger':'border-primary'">
                <div style="color:red" v-for=" error in v$.password.$errors" :key="error.$uid">{{error.$message}}</div>
                <br><br>
                <button v-if="! waiting" :disabled="v$.$invalid" :class="v$.$invalid === true ? 'btn btn-warning':'btn btn-primary'" type="submit">Login</button>
                <button v-if="waiting" class="btn btn-primary"><span class="spinner-border spinner-border-sm btn-spn"></span>Wait...</button>

                <br><br>
                <span>Need an Account? <router-link to="/signup">Register</router-link> </span>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import useValidate from '@vuelidate/core'
import {
    required,
    minLength,
    maxLength,
    email,
    helpers
} from '@vuelidate/validators'
import {
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";

export default {
    data() {
        return {

            v$: useValidate(),
            email: '',
            password: '',
            image: 'https://www.kindpng.com/picc/m/192-1925162_login-icon-png-transparent-png.png',
            waiting: false
        }
    },
    validations() {
        return {
            email: {
                required: helpers.withMessage("Email is required", required),
                email,
                // minLength: minLength(4),
                // maxLength: maxLength(8),
                $autoDirty: true
            },
            password: {
                required: helpers.withMessage("Password is required", required),
                minLength: minLength(6),
                maxLength: maxLength(8),
                $autoDirty: true
            },

        }
    },
    methods: {
        submit() {
            this.waiting = true;

            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    //$router.push({
                    //name: "Bus"
                    // })
                    this.$router.replace('Bus')
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    this.waiting = false;

                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
            /*firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    //window.alert(user)
                    console.log(user);
                    //this.$router.replace(name:"Bus")
                },

                (err) => {
                    console.log(err);
                    //alert(error.massage);
                }
            );*/

            //this.v$.$touch();
            /*
            console.log(this.v$);
            this.v$.$validate()
            if (!this.v$.$error) {
                alert("Form submitted successfully")
            } else {
                alert("Validation Failed")
            }*/

        }
    }

}
</script>

<style scoped>
.text {
    background-color: dodgerblue;
    border-color: white;
}

.classone {
    border: 2px solid red;

}

.classtwo {
    border: 2px solid green;

}

img {
    width: 100px;
}

.card {
    margin-left: 30rem;
    background: linear-gradient(45deg, lightgray, rgb(238, 233, 233), lightgray);
}

/*.card input {
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid grey;
}*/

button {
    width: 8rem;
}
</style>
