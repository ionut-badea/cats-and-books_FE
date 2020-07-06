<template>
  <div class="container">
    <article class="box">
      <!-- <div v-if="article.image">
        <figure class="image">
          <img :src="article.image" :alt="article.title" />
        </figure>
        <br />
      </div>-->
      <h1
        class="title is-size-5-mobile is-size-3-tablet is-size-2-widescreen has-text-centered"
      >
        {{ article.title }}
      </h1>
      <div class="columns is-centered">
        <div class="column has-text-centered is-12-mobile is-3-tablet">
          <h2
            class="subtitle is-size-6-mobile is-size-5-tablet is-size-4-desktop"
          >
            wrote by

            <nuxt-link :to="`archive/authors/${article.author.username}`">
              <strong>
                {{ article.author.username }}
              </strong>
            </nuxt-link>
          </h2>
        </div>
        <div class="column has-text-centered is-12-mobile is-6-tablet">
          <div v-for="tag in article.tags" :key="tag.uid" class="tags">
            <nuxt-link :to="`archive/tags/${tag.slug}`">
              <span class="tag is-size-7-mobile is-size-6-tablet">
                {{ tag.name }}
              </span>
            </nuxt-link>
          </div>
          <h2
            class="subtitle is-size-6-mobile is-size-5-tablet is-size-4-desktop"
          >
            published
            <strong>{{ $moment(article.published).from() }}</strong>
          </h2>
        </div>
        <div class="column has-text-centered is-12-mobile is-3-tablet">
          <h2
            class="subtitle is-size-6-mobile is-size-5-tablet is-size-4-desktop"
          >
            category
            <nuxt-link :to="`archive/categories/${article.category.slug}`">
              <strong>{{ article.category.name }}</strong>
            </nuxt-link>
          </h2>
        </div>
      </div>
      <div class>
        <p class="content is-size-6-mobile is-size-5-desktop">
          {{ article.body }}
        </p>
        <br />
      </div>
      <div v-if="comments.length !== 0" class="columns">
        <div class="container">
          <div
            v-for="comment in comments"
            :key="comment.id"
            class="media column is-10-tablet is-offset-1"
          >
            <div class="media-content">
              <p class="content">
                <strong>{{ comment.name }}</strong>
              </p>
              <p class="help">
                {{ $moment(comment.created).from() }}
              </p>
              <p class="content">{{ comment.body }}</p>
            </div>
          </div>
        </div>
      </div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form method="POST">
          <div class="columns is-centered">
            <div
              class="column has-text-centered is-12-mobile is-8-tablet is-6-desktop"
            >
              <h2 class="subtitle is-size-5-mobile is-size-4-tablet">
                Leave us a message
              </h2>
              <div class="field">
                <div class="control">
                  <ValidationProvider
                    v-slot="{ errors, classes }"
                    rules="required|no_quotes"
                  >
                    <textarea
                      id="comment_message"
                      v-model="message"
                      name="message"
                      type="text"
                      class="textarea"
                      :class="classes"
                      placeholder="The comment"
                      maxlength="500"
                    ></textarea>
                    <span class="help is-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <ValidationProvider
                    v-slot="{ errors, classes }"
                    rules="required|alpha_spaces"
                  >
                    <input
                      id="comment_name"
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
                <div class="control">
                  <input
                    id="checkbox"
                    v-model="save"
                    name="save"
                    type="checkbox"
                    class="checkbox has-text-left"
                  />
                  <label for="checkbox">
                    Save my name in this browser for the next time I comment.
                  </label>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button
                    type="submit"
                    class="button is-primary"
                    @click.prevent="handleSubmit(send)"
                  >
                    Send
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
            </div>
          </div>
        </form>
      </ValidationObserver>
    </article>
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
  async asyncData({ params, store }) {
    await store.dispatch('posts/articles/loadArticleBySlug', {
      slug: params.slug
    })
    await store.dispatch('posts/comments/loadAllComments', {
      slug: params.slug
    })
  },
  data() {
    return {
      addComment: false,
      displayComments: true
    }
  },
  computed: {
    ...mapState('posts/articles', {
      article: (state) => state.article
    }),
    ...mapState('posts/comments', {
      comments: (state) => state.comments
    }),
    ...mapFields('posts/comments', {
      message: 'comment.body',
      name: 'comment.name',
      save: 'comment.save'
    })
  },
  methods: {
    send() {
      const uid = this.$store.state.posts.articles.article.uid
      this.$store.dispatch('posts/comments/addComment', { uid })
    },
    ...mapActions('posts/comments', ['cancel'])
  }
}
</script>

<style scoped>
article.box {
  margin: 3rem 0px;
  padding: 2%;
}
div.tags {
  display: inline-block;
  margin: 0% 2%;
}
article.media {
  display: inline-block;
}
button#display {
  margin-bottom: 25px;
}
button#social {
  margin: 10px 10px 0 10px;
}
button#add {
  margin: 25px 0;
}
button::-moz-focus-inner {
  border: 0;
}
</style>
