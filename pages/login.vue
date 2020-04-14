<template>
  <div class="columns is-centered">
    <div class="column is-12-mobile is-6-tablet is-3-desktop">
      <div class="container">
        <div class="box">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form method="POST">
              <div class="field">
                <label class="label has-text-left">Username</label>
                <div class="control">
                  <ValidationProvider
                    v-slot="{ errors, classes }"
                    rules="required|no_quotes"
                  >
                    <input
                      id="account_username"
                      v-model="username"
                      name="username"
                      type="text"
                      class="input"
                      :class="classes"
                      placeholder="Username"
                    />
                    <span class="help is-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-left">Password</label>
                <div class="control">
                  <ValidationProvider
                    v-slot="{ errors, classes }"
                    rules="required"
                  >
                    <input
                      id="account_password"
                      v-model="password"
                      name="password"
                      type="password"
                      class="input"
                      :class="classes"
                      placeholder="Password"
                      autocomplete="on"
                    />
                    <span class="help is-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button
                    type="submit"
                    class="button is-primary"
                    @click.prevent="handleSubmit(login)"
                  >
                    Login
                  </button>
                </div>
                <div class="control">
                  <button
                    type="reset"
                    class="button is-danger"
                    @click.prevent="cancel"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </ValidationObserver>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  layout: 'login',
  computed: {
    ...mapFields('accounts', ['username', 'password']),
    ...mapState('accounts', {
      isAuthenticated: (state) => state.isAuthenticated
    })
  },
  methods: {
    ...mapActions('accounts', ['login', 'cancel'])
  }
}
</script>

<style scoped></style>
