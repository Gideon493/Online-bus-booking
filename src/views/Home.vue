<template>
<div class="home">
    <div class="home1">
        <p> Welcome to Marusoi Transport Limited</p>
    </div>
    <div class="home3">
        <p>You can proceed to book here <router-link class="router" to="/Bus">Book Bus</router-link>
        </p>
    </div>
    <div class="home2">
        <a href=""><span class="bi bi-instagram">Instagram</span></a>
        <!-- <a href=""><span class="bi bi-envelope-fill">Email</span></a>-->
        <a href=""><span class="bi bi-facebook">Facebook</span></a>
        <a href=""><span class="bi bi-twitter">Twitter</span></a>
    </div>
    <div class="anima">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

        </ul>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {

}
</script>

<style scoped>
p {
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: lightgray;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.router {
    font-size: 1.4rem;
    margin-left: -2rem;
    color: yellow;
    font-style: italic;
}

.home3 {
    position: absolute;
    margin-top: 23rem;
    margin-left: 28rem;
}

.home3 p {
    font-size: 1.4rem;
    text-transform: none;

}

.home1 {
    width: 50rem;
    height: 10rem;

    border: 1px solid white;
    text-align: center;
    margin-left: 15rem;
    position: absolute;
    margin-top: 10rem;
    padding-top: 3rem;

}

.home2 {
    position: absolute;
    margin-top: 28rem;
    margin-left: 25rem;
}

a {
    padding: 2rem;
    height: 2rem;
    color: azure;
    text-decoration: none;
    font-size: 1rem;
}

span {
    font-size: 1.4rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.home {

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    position: relative;
    background-size: 400% 400%;
    height: 100vh;
    width: 100%;
    animation: change 10s ease-in-out infinite;
}

.anima {
    position: absolute;
    width: 100%;
    bottom: -2rem;
}

.anima ul li {
    position: absolute;
    display: block;
    list-style: none;

    width: 25px;
    height: 25px;
    background: rgba(255, 255, 255, 0.2);

}

.anima ul li:nth-child(1) {
    left: 86%;
    height: 80px;
    width: 80px;
    animation-delay: 3s;
    animation-duration: 7s;
    animation-name: animate;
    animation-iteration-count: infinite;
}

.anima ul li:nth-child(2) {
    left: 12%;
    height: 30px;
    width: 30px;
    animation-delay: 1.5s;
    animation-duration: 10s;
    animation-name: animate;
    animation-iteration-count: infinite;
}

.anima ul li:nth-child(3) {
    left: 45%;
    height: 100px;
    width: 90px;
    animation-delay: 3s;
    animation-duration: 22s;
    animation-name: animate;
    animation-iteration-count: infinite;

}

.anima ul li:nth-child(4) {
    left: 70%;
    height: 150px;
    width: 150px;
    animation-name: animate;
    animation-delay: 0s;
    animation-duration: 19s;
    animation-iteration-count: infinite;

}

.anima ul li:nth-child(5) {
    left: 50%;
    height: 120px;
    width: 130px;
    border-radius: 50%;
    animation-name: animate;
    animation-delay: 2.5s;
    animation-duration: 17s;
    animation-iteration-count: infinite;

}

.anima ul li:nth-child(6) {
    left: 40%;
    height: 60px;
    width: 60px;
    animation-name: animate;
    animation-delay: 0s;
    animation-duration: 12s;
    animation-iteration-count: infinite;

}

.anima ul li:nth-child(7) {
    left: 30%;
    height: 40px;
    width: 80px;
    animation-name: animate;
    animation-delay: 2s;
    animation-duration: 15s;
    animation-iteration-count: infinite;

}

.anima ul li:nth-child(8) {
    left: 20%;
    height: 70px;
    width: 100px;
    border-radius: 50%;
    animation-name: animate;
    animation-delay: 1.7s;
    animation-duration: 8s;
    animation-iteration-count: infinite;

}

.anima ul li:nth-child(9) {
    left: 5%;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    animation-name: animate;
    animation-delay: 3s;
    animation-duration: 15s;
    animation-iteration-count: infinite;

}

.anima ul li:nth-child(10) {
    left: 90%;
    height: 40px;
    width: 40px;
    animation-name: animate;
    animation-delay: 2s;
    animation-duration: 10s;
    animation-iteration-count: infinite;

}

@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    100% {
        transform: translateY(-800px) rotate(360deg);
        opacity: 0;
    }
}

@keyframes change {
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
