
<script>

    import { createEventDispatcher } from 'svelte';
  
    export let selectedIds = [];
  
  
  
    const dispatch = createEventDispatcher();
  
  
  
    function updateSelectedIds(newIds) {
  
      selectedIds = newIds;
  
      dispatch('update', { detail: selectedIds });
  
    }
  
</script> 
  
  <div class="flex flex-row justify-center items-center m-4 gap-4">
    {#each ['SPBS', 'ESR', 'NSI', 'ELH', 'OHAC'] as id}
      <div
        class="cursor-pointer {selectedIds.includes(id) ? 'font-bold' : ''}"
        on:click={() => handleIdClick(id)}
      >
        {id}
      </div>
    {/each}
  </div>
  
  <style>
    .font-bold {
      font-weight: bold;
    }
  </style>