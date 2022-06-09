<template>
<div class="fs-2 text-secondary">Sign Up</div>
<!--<img :src="image" alt="">-->
<form action="" @submit.prevent="enterHere">
    <div class="card  border-0">

        <div class="card-body" :class="v$.$error === true ? 'border border-danger border border-2':' border border-2 border '">

            <p class="card-text"></p>
            <!--<label for="">First Name</label>
        <br>
        <input type="text" v-model.trim="v$.firstname.$model" @blur="v$.firstname.$touch" class=" form-control" :class="v$.firstname.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 border  '">

        <div style="color:red" v-for=" error in v$.firstname.$errors" :key="error.$uid">{{error.$message}}</div>
        <div v-if="v$.firstname.$error">
                <p v-if="v$.firstname.required">First name is required</p>
                <p v-if="v$.firstname.maxLength"> Minimum length is 5 characters</p>
                <p v-if="v$.firstname.minLength"> Maximum length is 10 characters</p>
            </div>
        <br><br>
        <label for=""> Second Name</label>
        <br>
        <input type="text" v-model.trim="secondname" @blur="v$.secondname.$touch" class="form-control" :class="v$.secondname.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 border '">

        <div style="color:red" v-for=" error in v$.secondname.$errors" :key="error.$uid">{{error.$message}}</div>
        <div v-if="v$.secondname.$error"> Second name field has an error</div>-->
            <br><br>
            <label for="">Email</label>
            <br>
            <input type="email" v-model.trim="email" @blur="v$.email.$touch()" class="form-control" :class="v$.email.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 border '">

            <div style="color:red" v-for=" error in v$.email.$errors" :key="error.$uid">{{error.$message}}</div>
            <!--<div v-if="v$.email.$error">Email is required</div>
            <div v-if="v$.email.$invalid"> Email is invalid</div>-->

            <br><br>
            <!--
        <label for=""> Phone Number</label>
        <br>
        <input type="text" v-model.trim="phonenumber" @blur="v$.phonenumber.$touch" class="form-control" :class="v$.phonenumber.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 border '">
        <div style="color:red" v-for=" error in v$.phonenumber.$errors" :key="error.$uid">{{error.$message}}</div>
        -->
            <br><br>
            <label for=""> Password</label><br>

            <input type="password" v-model="password" @blur="v$.password.$touch" class="form-control" :class="v$.password.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 border '">

            <div style="color:red" v-for=" error in v$.password.$errors" :key="error.$uid">{{error.$message}}</div>

            <br><br>
            <button v-if="! waiting" :class="v$.$invalid === true ? 'btn btn-warning':'btn btn-danger'" type="submit">Sign Up</button>
            <!--:disabled="v$.$invalid" :class="v$.$invalid === true ? '':'text'" class="btn btn-warning"-->
            <button v-if="waiting" class="btn btn-primary"><span class="spinner-border spinner-border-sm btn-spn"></span>Wait...</button>

            <br>
            <span>Already have an account? <router-link to="/login">Login Here</router-link> </span>
        </div>
    </div>
</form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {
    maxLength,
    minLength,
    email,
    required,
    helpers
} from '@vuelidate/validators';

import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";

export default {
    data() {
        return {
            v$: useVuelidate(),
            firstname: '',
            secondname: '',
            email: '',
            password: '',
            phonenumber: '',
            image: 'https://static.thenounproject.com/png/736543-200.png',
            errors: [],
            waiting: false

        }
    },
    validations() {
        return {
            firstname: {
                required: helpers.withMessage("First name is required", required),
                maxLength: maxLength(10),
                minLength: minLength(5),
                $autoDirty: true
            },
            secondname: {
                required: helpers.withMessage("Second name is required", required),
                maxLength: maxLength(10),
                minLength: minLength(5),
                $autoDirty: true
            },
            email: {
                required: helpers.withMessage("Email is required", required),
                email,
                $autoDirty: true
            },
            phonenumber: {
                required: helpers.withMessage("Phone number is required", required),
                minLength: minLength(4),
                maxlength: maxLength(8),
                $autoDirty: true
            },
            password: {
                required: helpers.withMessage("Password is required", required),
                minLength: minLength(6),
                maxlength: maxLength(8),
                $autoDirty: true
            }

        }

    },
    methods: {
        enterHere() {
            this.v$.$touch();
            this.waiting = true;

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    console.log("Successfull");
                    //$router.push({
                    //  name: "login"
                    // })
                    // Signed in 
                    this.$router.replace('login')
                    const user = userCredential.user;
                    console.log(user);

                    // ...
                })
                .catch((error) => {
                    this.waiting = false;
                    console.log(error);
                    // const errorCode = error.code;
                    //const errorMessage = error.message;
                    // ..
                });

        }

        //this.v$.$touch();
        //console.log(this.v$);
        /*
        console.log(this.v$);
        this.v$.$validate()
        if (!this.v$.$error) {
            alert("Form submitted successfully")
        } else {
            alert("Validation Failed")
        }*/

    },
    enter() {

    }
}
</script>

<style scoped>
.textfield {
    border: 2px solid red;
}

.textone {
    border: 2px solid green;
}

.text {
    border: 2px solid crimson;
    color: white;
    background-color: crimson;
}

.cardzero {
    height: 40rem;
    border: 2px red;
}

img {
    width: 100px;
}

.card {
    margin-left: 30rem;
    background: linear-gradient(45deg, white, lightgray, white);
    width: 25rem;

}

/*.card input {
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 2px solid grey;
    background-color: lightgrey;

}*/
</style>
