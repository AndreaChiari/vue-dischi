<script>
export default {
  name: "ContactPage",
};
</script>

<template>
  <div class="container">
    <h1 class="my-4">Contatti</h1>

    <form novalidate>
      <div class="row">
        <div class="mb-3 col-6">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" name="email" />
        </div>
        <div class="mb-3 col-6">
          <label for="subject" class="form-label">Oggetto</label>
          <input type="email" class="form-control" name="subject" />
        </div>
        <div class="mb-3 col-12">
          <label class="form-label">testo</label>
          <textarea class="col-12 form-control" name="" id=""></textarea>
        </div>
        <div class="mb-3 col-6">
          <input type="checkbox" class="form-check-input me-2" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div>
          <button type="submit" class="btn btn-primary col-1">invia</button>
        </div>
      </div>
    </form>
  </div>
</template>
