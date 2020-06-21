# Vuesax + Nuxtjs

<card>

  ## Installation

  Vuesax 4 has a plugin for [create-nuxt-app](https://nuxtjs.org/guide/installation#using-code-create-nuxt-app-code-) so starting a project is relatively quick just we have to select the Vuesax option within UI frameworks.

  <img src="/nuxt-ui-vuesax.png" >

</card>

<card>

  ## Version

  Great, we already have vuesax in our project, but the version may not be updated as it is constantly changing before a stable version.

  So we are going to run after finishing installing all `npm install vuesax @ next` with this we are going to download the latest vuesax and should not break anything

</card>

<card>

  ## Test a component

  Now that we have everything correct we are going to test and verify that everything is ready

  for this you can enter the pages folder and add a new test call or choose the `index.vue` that represents the main page of our project.

  ### Add a component

  Let's try adding a simple component like [vsButton](/docs/components/) the final code could be something like this

  ```html
    <template>
      <div class="app">
        <vs-button>
          Hello World Vuesax + Nuxtjs
        </vs-button>
      </div>
    </template>

    <script>
    export default {}
    </script>

    <style>
    .app {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    </style>
  ```

  and if we see the page `/test` we find something like this

  <img src="/nuxt-test-page.png" >
</card>

<card>

  ## Tips

  #### nuxt-purgecss

  For some reason this plugin removes the css from vuesax and causes the components to not work correctly after running `npm run build`, if you are using this plugin at the moment it cannot be used with vuesax 4 to avoid this error

  #### Install the latest version

  Vuesax 4 is constantly updated before reaching a stable version and therefore whenever you start a project after installing all the packages you have to run `npm install vuesax@next`

</card>
