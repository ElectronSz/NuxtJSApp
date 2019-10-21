<template>
  <div>
    <section class="section">
      <h2 class="title is-3 has-text-grey">
        "Just start
        <b-icon icon="rocket" size="is-large" />"
      </h2>
      <h3 class="subtitle is-6 has-text-grey">
        Author:
        <a href="https://github.com/anteriovieira">Antério Vieira</a>
      </h3>
      <nuxt-link to="results/hello" exact-active-class="is-active">
        <b-icon icon="home" />Hello Link
      </nuxt-link>
    </section>
    <nuxt />
  </div>
</template>
