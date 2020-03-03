<template>
  <div class="center">
    <vs-button shadow @click="active=!active">
      Open Dialog
    </vs-button>
    <vs-dialog scroll overflow-hidden not-close auto-width v-model="active">
      <template #header>
        <h3>
          Introduction
        </h3>
      </template>
      <div class="con-content-scroll">
        <h4>
          Whats is Vuesax?
        </h4>
        <p>
          Vuesax (pronounced / vjusacksː /, as view sacks) is a framework of UI components created with Vuejs to make projects easily and with a unique and pleasant style, vuesax is created from scratch and designed for all types of developers from the frontend lover to the backend who wants to easily create their visual approach to the end-user

          We are focused on streamlining the work of the programmer by giving components created in their entirety and with independent customization and very easy to implement, so creativity is in our hands but we do not neglect that each project is different both visually and in its ecosystem

          Vuesax does not have a design line such as other component frameworks based on Material Design, we believe that there are already emaciated frameworks that look visually and in UI / UX and we don't want to be one more of the bunch, apart from that we love to create and design new experiences and surprise you with new elements or details that we can only do by being visually free.
        </p>

        <h4>
          Why Vuesax?
        </h4>

        <p>
          Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
          <br>
          <br>
          - Vuesax, unlike many frameworks, is designed from scratch and we are not anchored to any design line, this is something great since your project is going to be unique and very different from the others

          <br>
          <br>
          - We are focused on the quick and easy creation of projects giving a beautiful visual line but without forgetting the personalization and independence of the developer

          <br>
          <br>
          - Vuesax uses native css variables for better customization and production changes such as changing to dark theme or changing the main color of the entire application with few javascript lines
          <br>
          <br>

          - Vuesax is a frame designed to have a great visual impact and that is always in trend with respect to design.
          <br>
          <br>

          - An open-source community to create, improve and correct any component or function.
          <br>
          <br>

          - Independent components to avoid importing unnecessary code.
          <br>
          <br>

          - Markdown documents for better sustainability.
          <br>
          <br>

          - and much more.
        </p>
      </div>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
    input1: '',
    input2: '',
    checkbox1: false
  })
}
</script>
<style lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.con-content-scroll
  p
    margin 20px 0px
    position relative
    display block
    font-size .9rem
    width 100%

</style>
