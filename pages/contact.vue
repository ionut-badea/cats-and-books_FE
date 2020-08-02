<template>
  <div class="columns is-centered">
    <div class="column is-12-mobile is-6-tablet is-5-desktop is-4-widescreen is-3-fullhd">
      <div class="container">
        <div class="box">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form method="POST">
              <div class="field">
                <label for="contact_name" class="label has-text-left">Name</label>
                <div class="control">
                  <ValidationProvider v-slot="{ errors, classes }" rules="required|min:3">
                    <input
                      id="contact_name"
                      v-model="name"
                      name="name"
                      type="text"
                      class="input"
                      :class="classes"
                      placeholder="Your name"
                      maxlength="25"
                    />
                    <span class="help is-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label for="contact_email" class="label has-text-left">Email</label>
                <div class="control">
                  <ValidationProvider v-slot="{ errors, classes }" rules="required|email">
                    <input
                      id="contact_email"
                      v-model="email"
                      name="email"
                      type="email"
                      class="input"
                      :class="classes"
                      placeholder="A valid email address"
                      maxlength="50"
                    />
                    <span class="help is-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label for="contact_message" class="label has-text-left">Message</label>
                <div class="control">
                  <ValidationProvider v-slot="{ errors, classes }" rules="required|min:5|no_quotes">
                    <textarea
                      id="contact_message"
                      v-model="body"
                      name="message"
                      type="text"
                      class="textarea"
                      :class="classes"
                      placeholder="The message"
                      maxlength="500"
                    ></textarea>
                    <span class="help is-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input id="contract_terms" v-model="terms" name="terms and conditions checkbox" type="checkbox" />
                  I agree to the
                  <router-link to="/terms">terms and conditions</router-link>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button type="submit" class="button is-primary" @click.prevent="handleSubmit(send)">
                    Send
                  </button>
                </div>
                <div class="control">
                  <button type="reset" class="button is-danger" @click.prevent="cancel">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    ...mapFields('contacts', ['name', 'email', 'body', 'terms']),
  },
  methods: {
    ...mapActions('contacts', ['cancel']),
    send() {
      this.$store.dispatch('contacts/addMessage');
    },
  },
};
</script>

<style scoped></style>
