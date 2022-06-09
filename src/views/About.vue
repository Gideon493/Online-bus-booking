<template>
<div class="about">

    <p class="fs-4">We provide online services for booking <span class="text-warning">Marusoi Transport Limited</span> </p>
    <p class="fs-5"> These are the instructions for you to book</p>
    <p class="fs-5">1. During peak periods like from <span class="text-warning">March - April and November - December</span> </p>
    <p class="fs-5"> You need to book as early as one-two weeks before Travelling date or else all seats weill be booked</p>
    <p class="fs-5"> 2. Once book cannot be cancelles meaning if you have booked you'll need to avail yourself at the bus station</p>
    <p class="fs-4">These are our contacts in case you would to know more info about us</p>

    <p class="fs-5"><span><i class="bi bi-telephone"></i></span> 0726060092</p>

    <p class="fs-5"><span><i class="bi bi-envelope"></i></span> gideongetich493@gmail.com</p>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about {
    background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    position: relative;
    background-size: 400% 400%;
    height: 100vh;
    width: 100%;
    color: white;
    animation: change 10s ease-in-out infinite;
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
