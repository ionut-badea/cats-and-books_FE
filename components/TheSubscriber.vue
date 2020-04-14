<template>
  <div class="container">
    <h1 class="title is-6 has-text-dark">Subscribe to Newsletter</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form method="POST">
        <div class="field">
          <div class="control has-text-centered">
            <ValidationProvider
              v-slot="{ classes }"
              rules="required|alpha|min:3"
            >
              <input
                id="subscriber_name"
                name="name"
                v-model="name"
                type="text"
                class="input is-small"
                :class="classes"
                placeholder="Your name"
                maxlength="25"
              />
            </ValidationProvider>
          </div>
        </div>
        <div class="field">
          <div class="control has-text-centered">
            <ValidationProvider v-slot="{ classes }" rules="required|email">
              <input
                id="subscriber_email"
                name="email"
                v-model="email"
                type="text"
                class="input is-small"
                :class="classes"
                placeholder="A valid email address"
                maxlength="50"
              />
            </ValidationProvider>
          </div>
        </div>
        <div class="field">
          <div class="control has-text-centered">
            <input
              id="subscriber_terms"
              v-model="terms"
              name="terms and conditions checkbox"
              type="checkbox"
            />
            I agree to the
            <router-link to="/terms">terms and conditions</router-link>
          </div>
        </div>
        <button
          type="submit"
          class="button is-primary"
          @click.prevent="handleSubmit(subscribe)"
        >
          Subscribe
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  computed: {
    ...mapFields('subscribers', ['name', 'email', 'terms', 'status'])
  },
  methods: {
    ...mapActions('subscribers', ['subscribe'])
  }
}
</script>

<style scoped>
input.input {
  width: 17rem;
}
</style>
