<template>
<img :src="image" alt="">
<div id="nav" class="">
    <ul>
        <li>
            <router-link to="/Home"><span class="bi bi-house"></span> Home</router-link>
        </li>
        <li>
            <router-link to="/Bus"><span class="fa fa-bus"></span> Book Bus</router-link>
        </li>

        <li>
            <router-link to="/about">About Us</router-link>
        </li>

        <!--<router-link to="/book">Book</router-link>-->

        <div class="" id="nav2">

            <li>
                <router-link class="btn btn-outline-secondary " v-if="! userIn" to="/login">Login</router-link>
            </li>

            <li> <button v-if="userIn" @click="signOut" class="btn btn-outline-dark"> Sign Out
                </button></li>

            <li>
                <router-link class="btn btn-outline-secondary" v-if="!userIn" to="/signup">Signup</router-link>
            </li>

        </div>
    </ul>
</div>
<router-view />
</template>

<script>
import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

export default {
    created() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {

            if (user) {
                this.userIn = true;
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log(uid);
                // ...
            } else {
                this.userIn = false;
                // User is signed out
                // ...
            }
        });

    },
    data() {
        return {
            userIn: false,
            image: 'https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI='
        }
    },

    methods: {

        signOut() {
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                this.$router.replace('Home')
            }).catch((error) => {
                console.log(error);
                // An error happened.
            });
        },
        account() {

            const auth = getAuth();
            const user = auth.currentUser;
            if (user !== null) {
                // The user object has basic properties such as display name, email, etc.
                //const displayName = user.displayName;
                const email = user.email;
                // const photoURL = user.photoURL;
                //const emailVerified = user.emailVerified;

                // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
                const uid = user.uid;
            }
        }
    }

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    background-color: lightgrey;

}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

#nav a.router-link-exact-active {
    color: #42b983;

    padding: 5px;
}

#nav2 {
    float: right;
    margin-top: 0.9rem;

}

#nav2 li {
    padding: 5px 5px;
}

img {
    float: left;
    width: 180px;
    border-radius: 50%;
    border: none;
}

ul {
    display: inline;

}

ul li {
    list-style: none;
    padding: 20px 15px;
    display: inline-block;
}
</style>
