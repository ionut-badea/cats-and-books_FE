<template>
  <div class="container">
    <h1 class="title is-6 has-text-dark">Subscribe to Newsletter</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form method="POST">
        <div class="field">
          <div class="control has-text-centered">
            <ValidationProvider v-slot="{ classes }" rules="required|min:3">
              <input
                id="subscriber_name"
                v-model="name"
                name="name"
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
                v-model="email"
                name="email"
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
            <input id="subscriber_terms" v-model="terms" name="terms and conditions checkbox" type="checkbox" />
            I agree to the
            <router-link to="/terms">terms and conditions</router-link>
          </div>
        </div>
        <button type="submit" class="button is-primary" @click.prevent="handleSubmit(addSubscriber)">
          Subscribe
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    ...mapFields('subscriptions', ['name', 'email', 'terms', 'status']),
  },
  methods: {
    ...mapActions('subscriptions', ['addSubscriber']),
  },
};
</script>

<style scoped>
input.input {
  width: 17rem;
}
</style>
