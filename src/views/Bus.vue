<template>
<div class="fs-3 text-secondary">Book a ticket now</div>
<br>
<div class="div2">
    <ticket :ticket="ticket" :details="details" />
</div>
<div class="one">
    <form action="" @submit.prevent="bookNow">

        <div class="row">
            <div class="col-sm-6">
                <div class="card bg-transparent">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                        <div id="first">
                            <br>
                            <label for="name">Name</label>
                            <br>
                            <input type="text" class="form-control" v-model="details.name" @blur="v$.details.name.$touch" :class="v$.details.name.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 border '">
                            <br>
                            <div style="color:red;" v-for=" error in v$.details.name.$errors" :key="error.$uid">{{error.$message}}</div>

                            <br>
                            <label for="email">Email</label>
                            <br>
                            <input type="email" class="form-control" v-model="details.email" @blur="v$.details.email.$touch" :class="v$.details.email.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 '">
                            <br>
                            <div style="color:red;;" v-for=" error in v$.details.email.$errors" :key="error.$uid">{{error.$message}}</div>

                            <br>
                            <label for="number">Phone number</label>
                            <br>
                            <input type="text" class="form-control" v-model="details.number" @blur="v$.details.number.$touch" :class="v$.details.number.$error === true ? 'border border-danger border border-2':'border border-primary border border-1  '">
                            <br>
                            <div style="color:red;" v-for=" error in v$.details.number.$errors" :key="error.$uid">{{error.$message}}</div>

                            <br>
                            <label for="age">Age</label>
                            <br>
                            <input type="number" class="form-control" v-model="details.age" @blur="v$.details.age.$touch" :class="v$.details.age.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 '">

                            <br>
                            <div style="color:red;" v-for=" error in v$.details.age.$errors" :key="error.$uid">{{error.$message}}</div>

                            <br>
                            <label for="">Gender</label>
                            <select name="" id="" class="form-control" v-model="details.gender" @blur="v$.details.gender.$touch" :class="v$.details.gender.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 '">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>
                            <br>
                            <div style="color:red;" v-for=" error in v$.details.gender.$errors" :key="error.$uid">{{error.$message}}</div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card bg-transparent">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                        <div id="second">
                            <div id="second">
                                <br>
                                <label for="">Leaving From</label>
                                <br>
                                <select name="" id="" class="form-control" v-model="details.from" @blur="v$.details.from.$touch" :class="v$.details.from.$error === true ? 'border border-danger border border-2':'border border-primary border border-1'">
                                    <option value="Mombasa">Mombasa</option>
                                    <option value="Nairobi">Nairobi</option>
                                    <option value="Machakos">Machakos</option>
                                    <option value="Nyeri">Nyeri</option>
                                    <option value="Nakuru">Nakuru</option>
                                    <option value="Kisumu">Kisumu</option>
                                    <option value="Eldoret">Eldoret</option>
                                    <option value="Lodwar">Lodwar</option>
                                </select>
                                <br>
                                <div style="color:red;" v-for=" error in v$.details.from.$errors" :key="error.$uid">{{error.$message}}</div>

                                <br>
                                <label for="">Leaving To</label>
                                <br>
                                <select name="" id="" class="form-control" v-model="details.to" @blur="v$.details.to.$touch" :class="v$.details.to.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 '">
                                    <option value="Mombasa">Mombasa</option>
                                    <option value="Nairobi">Nairobi</option>
                                    <option value="Machakos">Machakos</option>
                                    <option value="Nyeri">Nyeri</option>
                                    <option value="Nakuru">Nakuru</option>
                                    <option value="Kisumu">Kisumu</option>
                                    <option value="Eldoret">Eldoret</option>
                                    <option value="Lodwar">Lodwar</option>
                                </select>
                                <br>
                                <div style="color:red;" v-for=" error in v$.details.to.$errors" :key="error.$uid">{{error.$message}}</div>

                                <br>
                                <label for="date">Booking Date</label>
                                <br>
                                <input type="date" class="form-control" v-model="details.date" @blur="v$.details.date.$touch" :class="v$.details.date.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 '">
                                <br>
                                <div style="color:red;" v-for=" error in v$.details.date.$errors" :key="error.$uid">{{error.$message}}</div>

                                <br>
                                <label for="time">Time</label>
                                <br>
                                <input type="time" class="form-control" v-model="details.time" @blur="v$.details.time.$touch" :class="v$.details.time.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 '">
                                <br>
                                <div style="color:red;" v-for=" error in v$.details.time.$errors" :key="error.$uid">{{error.$message}}</div>

                                <br>

                                <label style="margin-left:-2rem;"> Choose Ticket Type</label>
                                <br>

                                <select name="" id="" class="form-control" v-model="details.type" @blur="v$.details.type.$touch" :class="v$.details.type.$error === true ? 'border border-danger border border-2':'border border-primary border border-1 '">
                                    <option value="VIP">VIP</option>
                                    <option value="Regular">Regular</option>

                                </select>
                                <br>
                                <div style="color:red;" v-for=" error in v$.details.type.$errors" :key="error.$uid">{{error.$message}}</div>

                            </div>

                        </div>

                    </div>
                </div>
                <br>
            </div>
            <br> <br>
            <button style="width:15rem;" :disabled="v$.$invalid" :class="v$.$invalid === true? 'btn btn-secondary':'btn btn-warning'" type="submit">Book bus</button>
        </div>
    </form>
</div>

<br><br>
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
import ticket from './ticket.vue'
export default {
    components: {
        ticket
    },
    data() {
        return {
            v$: useValidate(),
            details: {
                name: '',
                email: '',
                number: '',
                age: '',
                gender: '',
                from: '',
                to: '',
                date: '',
                time: '',
                type: '',
                // errors: [],
                price: ''
            }
        }
    },
    validations() {
        return {
            details: {
                name: {
                    required: helpers.withMessage("Name is required", required),
                    maxLength: maxLength(9),
                    minLength: minLength(5)

                },
                email: {
                    required: helpers.withMessage("Email is required", required),
                    email
                },
                number: {
                    required: helpers.withMessage("Phone Number is required", required)
                },
                age: {
                    required: helpers.withMessage("Age is required", required)
                },
                gender: {
                    required: helpers.withMessage("Gender is required", required)
                },
                from: {
                    required: helpers.withMessage("Boarding point is required", required)
                },
                to: {
                    required: helpers.withMessage("Destination is required", required)
                },
                date: {
                    required: helpers.withMessage("Date is required", required)
                },
                time: {
                    required: helpers.withMessage("Time is required", required)
                },
                type: {
                    required: helpers.withMessage("Ticket type  is required", required)
                }
            }

        }

    },
    methods: {

        bookNow() {
            this.v$.$touch();
            console.log(this.v$);

            if (this.from === this.to) {
                console.log("it cannot be the same");

            } else {
                console.log("Great");
            }

        }
    }

}
</script>

<style scoped>
.one {

    background: linear-gradient(45deg, #151e3d, #1f456e, #241571, #016064);
    /*  height: 100%;*/
    background-size: 400% 400%;

    width: 100%;
    animation: one 10s ease-in-out infinite;
}

.row {

    width: 60%;
    margin-left: 20rem;

}

.card {
    width: 26rem;
    margin-left: -1rem;
    border: none;
    background-color: yellowgreen;
    color: white;

}

button {
    margin-left: 17rem;
    padding: 1rem;
    height: 3rem;
    width: 10rem;
    text-align: center;
}

#radio {
    margin-left: -5rem;
    width: 1rem;
    padding: 2rem;
}

/*#btn1 {
    width: 7rem;
    padding: 5px;
}*/

select,
input {

    width: 15rem;
    height: 2.5rem;
    border: none;
    border-radius: 4px;
    margin-left: 4rem;

}

label {

    margin-left: -9rem;
}

.div2 {
    position: absolute;
    margin-left: 72rem;
    margin-top: -4rem;
}

@keyframes one {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
