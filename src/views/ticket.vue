<template>
<button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">View Ticket Details</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">

        <h3 id="offcanvasRightLabel" class="text-success"><span><img :src="image" alt=""></span> Marusoi Transport Ltd

            <p class="fs-6 text-dark"> P.O BOX 29-20402

                Longisa
                <br>
                Contact us: +254726060092 or gideongetich493@@gmail.com
            </p>
        </h3>

        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" style="background-color:skyblue;">

        <p class="fs-4" id="ticket">Your Booking Details</p>
        <table class="table table-bordered">

            <tbody>
                <tr>

                    <td colspan="1">Name</td>
                    <td colspan="2" class=" fs-5">{{details.name}}</td>

                </tr>
                <tr>

                    <td>Email</td>
                    <td colspan="2" class=" fs-5">{{details.email}}</td>

                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td colspan="2" class=" fs-5">{{details.number}}</td>

                </tr>
                <tr>

                    <td colspan="1">Age</td>
                    <td colspan="2" class=" fs-5">{{details.age}} Years</td>

                </tr>
                <tr>

                    <td colspan="1">Gender</td>
                    <td colspan="2" class=" fs-5">{{details.gender}}</td>

                </tr>
                <tr>

                    <td colspan="1">From</td>
                    <td colspan="2" class=" fs-5">{{details.from}}</td>

                </tr>
                <tr>

                    <td colspan="1">To</td>
                    <td colspan="2" class=" fs-5">{{details.to}}</td>

                </tr>
                <tr>

                    <td colspan="1">Travelling Date</td>
                    <td colspan="2" class=" fs-5">{{details.date}}</td>

                </tr>
                <tr>

                    <td colspan="1">Time</td>
                    <td colspan="2" class=" fs-5">{{details.time}} Hours</td>

                </tr>
                <tr>

                    <td colspan="1">Ticket Type</td>
                    <td colspan="2" class=" fs-5">{{details.type}}</td>

                </tr>
            </tbody>
        </table>

        <button class="btn btn-secondary">Print ticket</button>

    </div>
</div>
</template>

<script>
export default {
    props: [
        'ticket',
        'details'
    ],
    data() {
        return {
            image: 'https://www.infinityindustrialpark.com/wp-content/uploads/2019/09/f794ad52bccba5259868672d8db49de5.png'
        }
    }

}
</script>

<style scoped>
tbody,
#offcanvasRightLabel,
#ticket,
button {

    font-family: cursive;
}

img {
    width: 5rem;
    float: left;
}
</style>
