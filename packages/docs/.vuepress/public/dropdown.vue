<vs-dropdown
v-if="role === 'admin' || role === 'owner' || role === 'contributor'"
class="cursor-pointer"
vs-custom-content
vs-trigger-click
>
<feather-icon
  icon="MoreVerticalIcon"
  svgClasses="w-6 h-6 text-grey"
></feather-icon>

<vs-dropdown-menu class="w-32">
  <vs-dropdown-item
    v-if="
      role === 'admin' || role === 'owner' || role === 'contributor'
    "
    @click="$emit('edit')"
  >
    <feather-icon
      icon="EditIcon"
      class="inline-block mr-2"
      svgClasses="w-4 h-4"
    /><span>Edit</span>
  </vs-dropdown-item>
  <vs-dropdown-item
    v-if="role === 'admin' || role === 'owner'"
    @click="confirmDelete()"
  >
    <feather-icon
      icon="TrashIcon"
      class="inline-block mr-2"
      svgClasses="w-4 h-4"
    /><span>Delete</span>
  </vs-dropdown-item>
</vs-dropdown-menu>
</vs-dropdown>
