<template>
  <div class="container">
    <article class="box">
      <h1 class="title is-3 has-text-centered">About Us</h1>
      <div class="columns is-centered">
        <div class="column">
          <nuxt-link to="/archive/authors/jack">
            <figure class="image">
              <img src="~/assets/images/Jack.jpg" class="avatar is-rounded" />
            </figure>
            <p class="title is-size-6-mobile is-size-4-tablet is-size-3-widescreen has-text-centered">
              Jack
            </p>
          </nuxt-link>
          <div class="has-text-justified">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dicta rerum reiciendis magnam
              aliquam sapiente? Voluptates blanditiis tempora deserunt molestiae reiciendis voluptas soluta error,
              aliquid ipsa repellat quo debitis dignissimos.
            </p>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
figure.image {
  display: block;
  /* margin-top: -5rem; */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  width: 10rem;
}
</style>
