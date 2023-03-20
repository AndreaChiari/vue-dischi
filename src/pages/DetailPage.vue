<script>
export default {
    name: 'DetailPage'
};

</script>

<template>
    <div class="container d-flex justify-content-center align-items-center mt-5">
        <div class="card">
            <img class="card-img-top"
                src="https://upload.wikimedia.org/wikipedia/en/0/0c/Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg"
                alt="Card image cap">
            <div class="card-body">
                <div class="d-flex info-detail">
                    <h5 class="card-title me-2">Name:</h5>
                    <p class="card-text">Jeffrey</p>
                </div>
                <div class="d-flex info-detail">
                    <h5 class="card-title me-2">Morto:</h5>
                    <p class="card-text">Dahmer</p>
                </div>
                <div class="d-flex info-detail">
                    <h5 class="card-title me-2">Age:</h5>
                    <p class="card-text">56</p>
                </div>
                <div class="d-flex info-detail">
                    <h5 class="card-title me-2">Kills:</h5>
                    <p class="card-text">12</p>
                </div>
                <div class="d-flex info-detail">
                    <h5 class="card-title me-2">Wanted:</h5>
                    <p class="card-text">no</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style  lang="scss" scoped>
.card {
    width: 25rem;
}

.card-body {
    background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5902a044-5b9b-44fa-98a0-4ac2215da760/d48k96z-f1c783f8-3488-4387-932f-04195fee5f7b.png/v1/fill/w_900,h_528,strp/blood_death_murder_background_by_loyalpuppet_d48k96z-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTI4IiwicGF0aCI6IlwvZlwvNTkwMmEwNDQtNWI5Yi00NGZhLTk4YTAtNGFjMjIxNWRhNzYwXC9kNDhrOTZ6LWYxYzc4M2Y4LTM0ODgtNDM4Ny05MzJmLTA0MTk1ZmVlNWY3Yi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kXDmdhY9LnAI90kpPt16WKLxeneVBQFdJMfLFxqFqns");
    background-repeat: no-repeat;

    .info-detail {
        h5 {
            color: red;
        }

        p {
            line-height: 30px;
            color: white;
        }
    }

}
</style>